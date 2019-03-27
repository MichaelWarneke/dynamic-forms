import { Validators, FormControlTextbox, FormControlDate } from '../dynamic-form';

export abstract class ExampleModel {
  abstract id: any;
  abstract name: any;
  abstract date: any;
};

export abstract class ExampleModelData implements ExampleModel {
  id: string | null = null;
  name: string | null = null;
  date: Date | null = null;
}

export class ExampleModelForm implements ExampleModel {
  id = new FormControlTextbox('nothing', [Validators.required]);
  name = new FormControlTextbox('nothing', [Validators.required]);
  date = new FormControlDate('nothing', [Validators.required]);
}

