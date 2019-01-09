"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObserverList {
    constructor() {
        this.observerList = [];
    }
    add(observer) {
        this.observerList.push(observer);
    }
    count() {
        return this.observerList.length;
    }
    get(index) {
        return this.observerList[index];
    }
    indexOf(observer) {
        return this.observerList.indexOf(observer);
    }
    remove(index) {
        this.observerList.splice(index, 1);
    }
}
exports.default = ObserverList;
