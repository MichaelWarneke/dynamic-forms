import { Component, Input } from '@angular/core';

import { ExampleModel, ExampleModelData, ExampleModelForm } from './form-model';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <br>
  ex-data: {{data | json}}
  <dynamic-form [data]="data" [formModel]="model"></dynamic-form>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class FormComponent  {
  @Input() name: string = 'Not yet';
  data: ExampleModelData;
  formModel = new ExampleModelForm();

  constructor () {
    this.data = {id: '1234', name: 'Hello', date: new Date(Date.now())};
  }
}
