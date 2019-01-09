"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton;
(function (Singleton) {
    var instance = null;
    class Foo {
        constructor(name) {
            this.name = name;
        }
    }
    function getInstance() {
        if (instance === null) {
            instance = new Foo('single');
            return instance;
        }
        else {
            return instance;
        }
    }
    Singleton.getInstance = getInstance;
})(Singleton = exports.Singleton || (exports.Singleton = {}));
