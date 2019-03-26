import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent, DynamicFormDatepickerComponent } from './templates';
import { DynamicFieldDirective } from './directive/dynamic-form.directive';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ DynamicFieldDirective, DynamicFormComponent, DynamicFormInputComponent, DynamicFormDatepickerComponent ],
  exports:      [ ReactiveFormsModule, DynamicFormComponent],
  entryComponents: [DynamicFormInputComponent, DynamicFormDatepickerComponent]
})
export class DynamicFormModule { }