import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports:      [ ReactiveFormsModule ],
  declarations: [ DynamicFormComponent ],
  exports:      [ ReactiveFormsModule]
})
export class DynamicFormModule { }