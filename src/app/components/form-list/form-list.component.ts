import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  title;
  descriptions: Array<string> = []

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  addTaskForm = this.formBuilder.group({
    title: [],
    descr: []
  })

  ngOnInit() {

  }

  submitFullTask(){
    if(this.addTaskForm.get('descr').value!==null){
      this.descriptions.push(this.addTaskForm.get('descr').value);
    }
  }

  addTask(){
    this.title = this.addTaskForm.get('title').value;
    if(this.addTaskForm.get('descr').value!==null){
      this.descriptions.push(this.addTaskForm.get('descr').value);
    }
  }

}
