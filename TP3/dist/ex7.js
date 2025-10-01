"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
function etFirst(arr) {
    return arr[0];
}
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getAll() {
        return this.items;
    }
}
