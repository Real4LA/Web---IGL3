"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Person_1 = require("./Person");
class Admin extends Person_1.Person {
    constructor(id, name) {
        super(id, name, "Admin");
    }
}
exports.Admin = Admin;
