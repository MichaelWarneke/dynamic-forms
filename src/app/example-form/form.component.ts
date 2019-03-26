import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ExampleModel, ExampleModelData, ExampleModelForm } from './form-model';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <br>
  <dynamic-form [form]="form"></dynamic-form>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class FormComponent  {
  @Input() name: string = 'Not yet';
  data: ExampleModelData;
  form: FormGroup;

  constructor (private fb: FormBuilder) {
    this.data = {id: '1234', name: 'Hello', date: new Date(Date.now())};
    this.form = this.fb.group(new ExampleModelForm());
    this.form.patchValue(this.data);
  }
}
