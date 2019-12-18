import { Component, EventEmitter, Output, ComponentRef, Renderer, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { List } from 'src/app/models/list';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent {
	@Input()list: List;
	@Output() removeList: EventEmitter<any> = new EventEmitter();
	doneTasks: Array<string> = [];
	decorate;

	constructor(private render: Renderer, private elem: ElementRef) {}

	deleteList(list) {
		this.removeList.emit(list);
	}

	decorateText(evt, des) {
		this.render.setElementClass(evt.target.parentElement.parentElement, 'decorate-text', true);
	}

	getAllDone(des) {
		this.doneTasks.push(des);
		// console.log(des, this.doneTasks, this.descr);
		// for (const i in this.doneTasks) {
		// 	if (this.doneTasks.hasOwnProperty(i)) {
		// 		const element = this.doneTasks[i];
		// 		if (element === this.descr[i]) {
		// 			console.log('same');
		// 		}
		// 	}
		// }
		// if (this.doneTasks == this.list.descr) {
		// 	console.log('allDone');
		// } else {
		// 	console.log('no es el mismo array');
		// }
	}
}
