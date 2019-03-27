import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormInputComponent, DynamicFormDatepickerComponent } from "../templates";
import { FormControlBase } from '../models/base-models';

const componentMapper = {
  input: DynamicFormInputComponent,
  datepicker: DynamicFormDatepickerComponent,
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() val: FormControlBase | null = null;
  @Input() group: FormGroup | null = null;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.val.controlType]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.val = this.val;
    this.componentRef.instance.group = this.group;
  }
}