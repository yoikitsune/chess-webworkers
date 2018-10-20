"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ng_webworker_helper_1 = require("ng-webworker-helper");
class Engine extends ng_webworker_helper_1.BaseWorker {
    //engine:WorkerClass;
    constructor() {
        super();
        //this.book = new Book (new ChessTools.OpeningBooks.Polyglot());
        //this.eco = new ChessTools.ECO();
    }
}
new Engine();
