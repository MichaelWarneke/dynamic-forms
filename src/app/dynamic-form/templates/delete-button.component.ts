import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form-delete-button',
  template: `
  <ng-container [formGroup]="group">
    <button class="delete-button" mat-raised-button color="warn" (click)="onClicked.emit()">{{text}}</button>
  </ng-container>
  `,
  styles: [`.delete-button{margin: 10px}`]
})
export class DynamicFormDeleteButtonComponent  {
  @Input() text: string | null = null;
  @Input() group: FormGroup | null = null;
  @Output() onClicked = new EventEmitter<any>();
  
  constructor() {}

}
