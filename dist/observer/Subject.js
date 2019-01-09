"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObserverList_1 = require("./ObserverList");
class Subject {
    constructor() {
        this.observers = new ObserverList_1.default();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.remove(this.observers.indexOf(observer));
    }
    notify(context) {
        let observerCount = this.observers.count();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context);
        }
    }
}
exports.default = Subject;
