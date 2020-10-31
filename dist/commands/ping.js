"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const Command_1 = require("../helpers/Command");
class Ping extends Command_1.Command {
    constructor(message, client, options) {
        super();
        this.message = message;
        this.client = client;
        this.options = options;
        this.allowedToExec = () => true;
        this.example = this.options.example;
        this.helpText = this.options.helpText;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.allowedToExec())
                return;
            yield this.message.channel.send(`The bot is up. Latency is ${this.client.ws.ping}, bot has been up for ${this.client.uptime}.`);
        });
    }
}
exports.Ping = Ping;
