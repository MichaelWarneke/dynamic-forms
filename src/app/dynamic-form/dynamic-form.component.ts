import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControlBase } from './models/base-models';

@Component({
  selector: 'dynamic-form',
  template: `
  <form [formGroup]="form">
    <ng-container *ngFor="let val of formlist;" dynamicField [val]="val" [group]="form"></ng-container>
  </form>
  <dynamic-form-submit-button *ngIf="formModel.submitButtonText" [text]="formModel.submitButtonText" [group]="form" (onClicked)="onSave(form.value)"></dynamic-form-submit-button>
  <dynamic-form-reset-button *ngIf="formModel.resetButtonText" [text]="formModel.resetButtonText" [group]="form" (onClicked)="onReset(form.value)"></dynamic-form-reset-button>
  <dynamic-form-delete-button *ngIf="formModel.deleteButtonText" [text]="formModel.deleteButtonText" [group]="form" (onClicked)="onDelete(form.value)"></dynamic-form-delete-button>
  <br>
  FormValues: {{form.value | json}} <br>
  Data from DB: {{data | json}}
  `,
  styles: [``]
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

  @Output() saveEntry = new EventEmitter<any>();
  @Output() deleteEntry = new EventEmitter<any>();

  form: FormGroup | null = null;
  formlist = new Array();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(this.formModel.model);
    this.updateData(this.data);
  }

  onReset() {
    if(this.form) this.form.reset();
  }

  onSave(data: any) {
    console.warn('onSave: ', data);
    if(this.form)
      this.saveEntry.emit(this.form.value);
  }

  onDelete(data: any) {
    console.warn('onDelete: ', data);
    if(this.form)
      this.deleteEntry.emit(this.form.value);
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
