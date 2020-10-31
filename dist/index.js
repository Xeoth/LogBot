"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const Bot_1 = __importDefault(require("./Bot"));
dotenv_1.config();
const bot = new Bot_1.default();
bot.connect();
