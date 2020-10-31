import { Client, Message } from "discord.js";
import { Command, CommandOptions, CommandType } from "../helpers/Command";

export class Ping extends Command<CommandType.ping> {
  constructor(
    private message: Message,
    private client: Client,
    private options: CommandOptions
  ) {
    super();

    this.example = this.options.example;
    this.helpText = this.options.helpText;
  }

  async execute(): Promise<void> {
    if (!this.allowedToExec()) return;

    await this.message.channel.send(
      `The bot is up. Latency is ${this.client.ws.ping}, bot has been up for ${this.client.uptime}.`
    );
  }

  allowedToExec = (): boolean => true;
}
