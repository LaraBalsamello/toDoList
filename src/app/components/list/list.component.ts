import { Component, EventEmitter, Output, ComponentRef, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list.boxes.responsive-box',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  viewRef: ComponentRef<ListComponent>;
  title;
  descr;
  doneTasks = [];
  decorate;
  @Output() removeList: EventEmitter<any> = new EventEmitter();

  constructor(private render:Renderer, private elem: ElementRef) { }

  deleteList(){
    this.viewRef.destroy();
  }

  decorateText(evt, des) {
    this.render.setElementClass(evt.target.parentElement.parentElement,"decorate-text",true);
    this.getAllDone(des);
  }

  getAllDone(des) {
    this.doneTasks.push(des);
    console.log(des, this.doneTasks, this.descr)
    for (const i in this.doneTasks) {
      if (this.doneTasks.hasOwnProperty(i)) {
        const element = this.doneTasks[i];
        if(element === this.descr[i]){
          console.log('same');
        }
      }
    }
    if(this.doneTasks == this.descr) {
      console.log('allDone'); 
    } else {
      console.log('no es el mismo array')
    }
  }
}
