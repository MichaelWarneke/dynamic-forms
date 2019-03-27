import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent, DynamicFormDatepickerComponent } from './templates';
import { DynamicFieldDirective } from './directive/dynamic-form.directive';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule ],
  declarations: [ DynamicFieldDirective, DynamicFormComponent, DynamicFormInputComponent, DynamicFormDatepickerComponent ],
  exports:      [ ReactiveFormsModule, DynamicFormComponent],
  entryComponents: [DynamicFormInputComponent, DynamicFormDatepickerComponent]
})
export class DynamicFormModule { }