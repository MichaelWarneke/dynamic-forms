import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControlBase } from './models/base-models';

@Component({
  selector: 'dynamic-form',
  template: `
  <form [formGroup]="form">

  <div *ngFor="let val of formlist">
    {{val.key}}:
    <input [formControlName]="val.key">
  </div>
  
  </form>
  FormValues: {{form.value | json}} <br>
  Data from DB: {{data | json}}
  `,
  styles: []
})
export class DynamicFormComponent  {
  @Input() set form(data: FormGroup) {
    this.form = data;
    Object.keys(this.form.controls).forEach(key => {
      this.formlist.push({...this.form.get(key) as FormControlBase, key: key });
    })
  }
  formlist = new Array();

}
