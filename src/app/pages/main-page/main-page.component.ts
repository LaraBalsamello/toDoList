import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ListComponent } from 'src/app/components/list/list.component';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  lists: Array<Object>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private listService: ListService
    ) { }

  ngOnInit(): void {
    this.listService.getList().subscribe(response => {
      this.lists = response;
    })  
  }

  removeList(list) {
    console.log(list);
    for (const listX of this.lists) {
      if(listX === list) {
        this.lists.splice(this.lists.indexOf(listX),1);
      }
    }
  }

  catchInfo($evt){
    this.lists.push($evt);
  }
}
