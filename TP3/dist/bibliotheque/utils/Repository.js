"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    items = [];
    add(item) {
        if (this.items.some((i) => i.id === item.id)) {
            throw new Error(`Item with id=${item.id} already exists`);
        }
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter((i) => i.id !== id);
    }
    getAll() {
        return this.items;
    }
    getById(id) {
        return this.items.find((i) => i.id === id);
    }
}
exports.Repository = Repository;
