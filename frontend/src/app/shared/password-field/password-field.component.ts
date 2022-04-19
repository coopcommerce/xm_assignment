import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { RegistrationField } from 'src/models/registration.model';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFieldComponent),
      multi: true
    }
  ],
})
export class PasswordFieldComponent implements OnInit, ControlValueAccessor {

  control: AbstractControl;

  @Input() form: FormGroup;
  @Input() field: RegistrationField;

  @Input() placeholder: string = '············';
  public passwordTextHidden: boolean;

  private _password: string;
  private _modelChange: (value: any) => void;
  private _modelTouched: (value: any) => void;

  set password(value: string) {
    if ( !value ) return;
    this._password = value;
  }

  get password(): string {
    return this._password;
  }

  constructor() {
    this._modelChange = () => {};
    this._modelTouched = () => {};
  }

  ngOnInit() {
    this.passwordTextHidden = this.field.type === 'text'
  }

  registerOnChange(fn: any): void {
    this._modelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._modelTouched = fn;
  }
  writeValue(value: string) {
    if ( !value ) return;
    this.password = value
  }

  togglePasswordTextType(event: Event) {
    event.stopPropagation();
    this.passwordTextHidden = !this.passwordTextHidden;
  }

  onPasswordChanged(event: any) {
    this.password = event.target.value
    this._modelTouched(this.password);
    this._modelChange(this.password);
  }


}
