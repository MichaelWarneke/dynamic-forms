import { Component, Input } from '@angular/core';

import { ExampleModel, FormSetup, ExampleModelData, ExampleModelForm } from './form-model';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <br>
  <dynamic-form [data]="data" [formModel]="formModel" (saveEntry)="onSave($event)" (deleteEntry)="onDelete($event)"></dynamic-form>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class FormComponent  {
  @Input() name: string = 'Not yet';
  data: ExampleModelData;
  formModel = new FormSetup();

  constructor () {
    this.data = {id: '1234', name: 'Hello', date: new Date(Date.now())};
  }

  onSave(data: any) {
    console.warn('Save outside :', data);
  }

  onDelete(data: any) {
    console.warn('Delete outside :', data);
  }
}
