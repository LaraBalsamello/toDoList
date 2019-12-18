import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { ListComponent } from '../components/list/list.component';
import { CommonModule } from '@angular/common';

const components = [ MainPageComponent ]

@NgModule({
  declarations: [
      components
  ],
  imports: [
    ComponentsModule, 
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  exports: [ components ],
  providers: [],
  bootstrap: [],
  entryComponents: [ ListComponent ]
})

export class PagesModule { }
