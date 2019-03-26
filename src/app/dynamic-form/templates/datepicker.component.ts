import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../models/base-models';

@Component({
  selector: 'dynamic-form-datepicker',
  template: `
  <div [formGroup]="group">
    {{val.key}}:
    <input type="date" [formControlName]="val.key">
  </div>
  `,
  styles: []
})
export class DynamicFormDatepickerComponent  {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}

}
