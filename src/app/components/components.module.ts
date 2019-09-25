import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormListComponent } from './form-list/form-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { CommonModule } from '@angular/common';

const components = [ ListComponent, FormListComponent ]

@NgModule({
  declarations: [ components ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [ components ],
  providers: [],
  bootstrap: []
})

export class ComponentsModule { }