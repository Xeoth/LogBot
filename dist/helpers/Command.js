"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandType = void 0;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["ping"] = 0] = "ping";
    CommandType[CommandType["nicknames"] = 1] = "nicknames";
    CommandType[CommandType["usernames"] = 2] = "usernames";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
class Command {
    constructor() {
        this.helpText = "";
        this.example = "";
    }
}
exports.Command = Command;
