import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';

const components = [ MainPageComponent ]

@NgModule({
  declarations: [
      components
  ],
  imports: [
    ComponentsModule, 
    AppRoutingModule
  ],
  exports: [ components ],
  providers: [],
  bootstrap: []
})

export class PagesModule { }
