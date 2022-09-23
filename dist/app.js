"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.listen(process.env.PORT, () => {
    console.log('server running in port:', process.env.PORT);
});
app.get('/', (req, res) => {
    return res.json({ message: 'API succes. It is working' });
});
