import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControlBase } from './models/base-models';

@Component({
  selector: 'dynamic-form',
  template: `
  <form [formGroup]="form">
    <ng-container *ngFor="let val of formlist;" dynamicField [val]="val" [group]="form"></ng-container>
  </form>
  FormValues: {{form.value | json}} <br>
  Data from DB: {{data | json}}
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit  {
  @Input() formModel: any;
  
  _data: any;
  @Input() set data(data: any) {
    this._data = data;
    this.updateData(data);
  };
  get data() {
    return this._data;
  }

  form: FormGroup | null = null;
  formlist = new Array();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(this.formModel);
    this.updateData(this.data);
  }

  updateData(data: any) {
    if(data && this.form) {
      this.form.patchValue(this.data);
      Object.keys(this.form.controls).forEach(key => {
        this.formlist.push({...this.form.get(key) as FormControlBase, key: key });
      })
    }
  }
}
