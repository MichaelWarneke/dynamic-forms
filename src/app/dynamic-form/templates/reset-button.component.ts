import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form-reset-button',
  template: `
  <ng-container [formGroup]="group">
    <button class="reset-button" mat-raised-button color="accent" (click)="onClicked.emit()">{{text}}</button>
  </ng-container>
  `,
  styles: [`.reset-button{margin: 10px}`]
})
export class DynamicFormResetButtonComponent  {
  @Input() text: string | null = null;
  @Input() group: FormGroup | null = null;
  @Output() onClicked = new EventEmitter<any>();
  
  constructor() {}

}