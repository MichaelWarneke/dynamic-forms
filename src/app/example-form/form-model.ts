import { Validators, FormControlTextbox, FormControlDate } from '../dynamic-form';

export interface ExampleModel {
  id: any;
  name: any;
  date: any;
};

export class ExampleModelData implements ExampleModel {
  id: string | null = null;
  name: string | null = null;
  date: Date | null = null;
}

export class ExampleModelForm implements ExampleModel {
  id = new FormControlTextbox('nothing', [Validators.required]);
  name = new FormControlTextbox('nothing', [Validators.required]);
  date = new FormControlDate('nothing', [Validators.required]);
}

export class FormSetup {
  model = new ExampleModelForm();
  submitButtonText = 'Save ME';
  deleteButtonText = 'Delete Me';
  resetButtonText = 'Reset';
}

