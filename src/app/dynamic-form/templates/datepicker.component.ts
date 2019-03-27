import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../models/base-models';

@Component({
  selector: 'dynamic-form-datepicker',
  template: `
  <mat-form-field [formGroup]="group">
    <input matInput [matDatepicker]="picker" placeholder="{{val.key}}" [formControlName]="val.key">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  `,
  styles: []
})
export class DynamicFormDatepickerComponent  {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}

}
