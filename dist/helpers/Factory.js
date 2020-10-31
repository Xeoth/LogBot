"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandFactory = void 0;
const Bot_1 = __importDefault(require("../Bot"));
const Command_1 = require("./Command");
const ping_1 = require("../commands/ping");
class CommandFactory {
    constructor(client, prefix) {
        this.client = client;
        this.prefix = prefix;
    }
    createCommand(message) {
        const [keyword, args] = this.parseCommand(message.content);
        switch (keyword) {
            case Command_1.CommandType.ping:
                return new ping_1.Ping(message, this.client, {
                    example: `${Bot_1.default}ping`,
                    helpText: "Checks whether bot is up",
                });
            default:
                return null;
        }
    }
    parseCommand(messageContent) {
        var _a, _b;
        const args = messageContent.slice(this.prefix.length).trim().split(/ +/g);
        const keyword = (_b = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
        const commandType = Command_1.CommandType[keyword];
        return [commandType, args];
    }
}
exports.CommandFactory = CommandFactory;
