import { BaseWorker, WorkerClass } from 'ng-webworker-helper';

class Engine extends BaseWorker {
	//engine:WorkerClass;
	constructor () {
		super ();
		//this.book = new Book (new ChessTools.OpeningBooks.Polyglot());
		//this.eco = new ChessTools.ECO();
	}
}
new Engine ();
