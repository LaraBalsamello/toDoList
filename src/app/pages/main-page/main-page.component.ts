import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { ListComponent } from 'src/app/components/list/list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef1: any;
  valuesForList: Array <Object> = [];
  

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    ) { }

  catchInfo($evt){
    this.valuesForList.push($evt);
    for (const i in this.valuesForList) {
      if (this.valuesForList.hasOwnProperty(i)) {
        const element = this.valuesForList[i];
        const componentFactory1 = this.componentFactoryResolver.resolveComponentFactory(ListComponent);
        // add the component to the view
        this.componentRef1 = this.container.createComponent(componentFactory1);   
        // pass some data to the component
        this.componentRef1.instance.title = element['titles'];
        this.componentRef1.instance.descr = element['descr'];
        this.componentRef1.instance.viewRef = this.componentRef1;
      }
    }
    this.valuesForList = [];
  }
}
