"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_1 = __importDefault(require("./routes/Employee"));
const app = (0, express_1.default)();
const port = 3000;
// Connect to MongoDB
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    console.log("Successfully connected to database");
})
    .catch((error) => {
    console.log(error);
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
// ROUTES
app.use("/employees", Employee_1.default);
