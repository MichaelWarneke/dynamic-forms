import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form-submit-button',
  template: `
  <ng-container [formGroup]="group">
    <button class="submit-button" mat-raised-button color="primary" (click)="onClicked.emit()">{{text}}</button>
  </ng-container>
  `,
  styles: [`.submit-button{margin: 10px;}`]
})
export class DynamicFormSubmitButtonComponent  {
  @Input() text: string | null = null;
  @Input() group: FormGroup | null = null;
  @Output() onClicked = new EventEmitter<any>();
  
  constructor() {}

}
