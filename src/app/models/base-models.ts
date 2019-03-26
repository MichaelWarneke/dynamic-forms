import { FormControl } from '@angular/forms'

export class FormControlBase extends FormControl {
  controlType: string;
}

export class FormControlTextbox extends FormControlBase {
  controlType = 'TextBox';
  type: string;
}

export class FormControlDate extends FormControlBase {
  controlType = 'Date';
  type: string;
}

export {Validators} from '@angular/forms';