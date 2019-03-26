import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormModule } from './dynamic-form';

import { AppComponent } from './app.component';
import { FormComponent } from './example-form/form.component';

@NgModule({
  imports:      [ BrowserModule, DynamicFormModule ],
  declarations: [ AppComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
