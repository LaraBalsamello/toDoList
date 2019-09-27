import { Component, OnInit, EventEmitter, Output, Self, ComponentRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-list.boxes.responsive-box',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  viewRef: ComponentRef<ListComponent>;
  title;
  descr;
  decorate;
  @Output() removeList: EventEmitter<any> = new EventEmitter();

  constructor(private render:Renderer) { }

  deleteList(){
    this.viewRef.destroy();
  }

  decorateText(description, evt) {
    this.decorate = description; 
    this.render.setElementClass(evt.target.parentElement.parentElement,"decorate-text",true);
  }
}
