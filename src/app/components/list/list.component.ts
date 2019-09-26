import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list.boxes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title;
  descr;

  constructor() { }

  ngOnInit() {
  console.log("title:", this.title, "description:", this.descr)
  }


}
