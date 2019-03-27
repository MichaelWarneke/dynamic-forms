import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../models/base-models';

@Component({
  selector: 'dynamic-form-input',
  template: `
  <mat-form-field class="dyn-input" [formGroup]="group">
    <input matInput placeholder="{{val.key}}" [formControlName]="val.key">
  </mat-form-field>
  `,
  styles: ['.dyn-input{margin: 10px;}']
})
export class DynamicFormInputComponent  {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}

}
