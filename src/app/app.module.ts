import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormModule } from './dynamic-form';

import { AppComponent } from './app.component';
import { FormComponent } from './example-form/form.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, DynamicFormModule ],
  declarations: [ AppComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
