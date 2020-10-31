export enum CommandType {
  ping,
  nicknames,
  usernames,
}

export interface CommandOptions {
  helpText: string;
  example: string;
}

export abstract class Command<CommandType> {
  helpText = "";
  example = "";
  abstract execute(): Promise<void>;
  abstract allowedToExec(): boolean;
}
