"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChessTools = require('chess-tools');
const ng_webworker_helper_1 = require("ng-webworker-helper");
class Book extends ng_webworker_helper_1.WorkerClass {
    find(fen, resolve) {
        resolve(this.source.find(fen));
    }
}
class Eco extends ng_webworker_helper_1.WorkerClass {
}
class ChessToolsWorker extends ng_webworker_helper_1.BaseWorker {
    constructor() {
        super();
        this.book = new Book(new ChessTools.OpeningBooks.Polyglot());
        this.eco = new ChessTools.ECO();
    }
    loadBook(file, resolve) {
        this.getFile(file).then(response => {
            this.book.source.on("loaded", () => {
                resolve(true);
            });
            this.book.source.load_book(response);
        });
    }
}
new ChessToolsWorker();
