import { Component, OnInit, EventEmitter, Output, Self, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-list.boxes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  viewRef: ComponentRef<ListComponent>;
  title;
  descr;
  @Output() removeList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  deleteList(){
    this.viewRef.destroy();
  }


}
