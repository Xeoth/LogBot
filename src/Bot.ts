import { Client, Message } from "discord.js";

export default class Bot {
  prefix = process.env.PREFIX || ";";

  private client: Client = new Client({
    ws: {
      intents: ["GUILD_MESSAGES", "GUILD_MEMBERS"],
    },
  });

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (!this.client) return;

    // Handlers
    this.client.on("message", async (message: Message) => {
      if (message.author.bot) return;
      if (message.content.startsWith(this.prefix)) return;
    });

    this.client.on("ready", () => console.log("connected"));
  }

  connect(): void {
    this.client.login(process.env.TOKEN);
  }
}
