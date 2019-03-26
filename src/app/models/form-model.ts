import { Validators, FormControlTextbox, FormControlDate } from './base-models'

export abstract class FormModel {
  abstract id;
  abstract name;
  abstract date;
};

export abstract class FormModelData implements FormModel {
  id: string | null;
  name: string | null;
  date: Date | null;
}

export class FormModelForm implements FormModel {
  id = new FormControlTextbox('nothing', Validators.required);
  name = new FormControlTextbox('nothing', Validators.required);
  date = new FormControlDate('nothing', Validators.required);
}

