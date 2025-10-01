"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Person_1 = require("./Person");
class User extends Person_1.Person {
    constructor(id, name) {
        super(id, name, "User");
    }
}
exports.User = User;
