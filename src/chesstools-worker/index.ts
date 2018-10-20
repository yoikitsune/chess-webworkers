const ChessTools = require ('chess-tools');
import { BaseWorker, WorkerClass } from 'ng-webworker-helper';

class Book extends WorkerClass {
	find (fen:string, resolve:Function) {
		resolve (this.source.find(fen));
	}
}

class Eco extends WorkerClass {
}

class ChessToolsWorker extends BaseWorker {
	book:Book;
	eco:Eco;
	constructor () {
		super ();
		this.book = new Book (new ChessTools.OpeningBooks.Polyglot());
		this.eco = new ChessTools.ECO();
	}

	loadBook (file:string, resolve:Function) {
		this.getFile (file).then (response => {
			this.book.source.on("loaded", ()=> {
				resolve (true);
			});
			this.book.source.load_book(response);
		});
	}
}
new ChessToolsWorker ();
