import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormModel, FormModelData, FormModelForm, FormControlBase } from './models/form-model';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <br>
  <form [formGroup]="form">

  <div *ngFor="let val of formlist">
    {{val.key}}:
    <input [formControlName]="val.key">
  </div>
  
  </form>
  FormValues: {{form.value | json}} <br>
  Data: {{data | json}}
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  data: FormModelData;
  form: FormGroup;
  formlist = new Array();

  constructor (private fb: FormBuilder) {
    this.data = {id: '123', name: 'Hello', date: new Date(Date.now())};
    this.form = this.fb.group(new FormModelForm());
    this.form.patchValue(this.data);
    Object.keys(this.form.controls).forEach(key => {
      this.formlist.push({...this.form.get(key) as FormControlBase, key: key });
    })
    let control: FormControlBase = this.form.controls['date'];
    console.log(control);
    console.log(this.form.controls);
  }
}
