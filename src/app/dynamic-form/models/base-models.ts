import { FormControl } from '@angular/forms'

export class FormControlBase extends FormControl {
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