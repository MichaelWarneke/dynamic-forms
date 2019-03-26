import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../models/base-models';

@Component({
  selector: 'dynamic-form-input',
  template: `
  <div [formGroup]="group">
    {{val.key}}:
    <input [formControlName]="val.key">
  </div>
  `,
  styles: []
})
export class DynamicFormInputComponent  {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}

}
