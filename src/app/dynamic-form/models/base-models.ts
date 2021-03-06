import { FormControl } from '@angular/forms'

export interface FormBase {
  controlType: string;
}

export class FormControlBase extends FormControl implements FormBase {
  controlType: string = '';
}

export class FormControlTextbox extends FormControlBase {
  controlType = 'input';
  type: string = '';
}

export class FormControlDate extends FormControlBase {
  controlType = 'datepicker';
  type: string = '';
}

export {Validators} from '@angular/forms';