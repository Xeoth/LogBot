import { Client, Message } from "discord.js";

import prefix from "../Bot";
import { Command, CommandType } from "./Command";
import { Ping } from "../commands/ping";

export class CommandFactory {
  constructor(private client: Client, private prefix: string) {}

  createCommand(message: Message): Command<CommandType> | null {
    const [keyword, args] = this.parseCommand(message.content);

    switch (keyword) {
      case CommandType.ping:
        return new Ping(message, this.client, {
          example: `${prefix}ping`,
          helpText: "Checks whether bot is up",
        });

      default:
        return null;
    }
  }

  private parseCommand(messageContent: string): [CommandType, string[]] {
    const args = messageContent.slice(this.prefix.length).trim().split(/ +/g);
    const keyword = args.shift()?.toLowerCase() ?? "";
    const commandType = CommandType[keyword as keyof typeof CommandType];
    return [commandType, args];
  }
}
