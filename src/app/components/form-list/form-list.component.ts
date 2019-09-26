import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {

  title: string;
  descriptions: Array<string> = [];
  fullList: Object;
  @Output() valuesForList: EventEmitter<Object> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  addTaskForm = this.formBuilder.group({
    title: [],
    descr: []
  })

  addTask(){
    this.title = this.addTaskForm.get('title').value;
    if(this.addTaskForm.get('descr').value!==null){
      this.descriptions.push(this.addTaskForm.get('descr').value);
      this.addTaskForm.get('descr').setValue(null);
    }
  }

  submitFullTask(){
    if(this.addTaskForm.get('descr').value!==null){
      this.descriptions.push(this.addTaskForm.get('descr').value);
    }
    let fullList = {
      titles: this.title,
      descr: this.descriptions
    }
    this.valuesForList.emit(fullList);
    this.title = undefined;
    this.descriptions = [];
    this.addTaskForm.get('title').setValue(null);
    this.addTaskForm.get('descr').setValue(null);  
  }
}
