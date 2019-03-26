import { Validators, FormControlTextbox, FormControlDate } from './base-models'

export abstract class FormModel {
  abstract id: any;
  abstract name: any;
  abstract date: any;
};

export abstract class FormModelData implements FormModel {
  id: string | null = null;
  name: string | null = null;
  date: Date | null = null;
}

export class FormModelForm implements FormModel {
  id = new FormControlTextbox('nothing', Validators.required);
  name = new FormControlTextbox('nothing', Validators.required);
  date = new FormControlDate('nothing', Validators.required);
}

