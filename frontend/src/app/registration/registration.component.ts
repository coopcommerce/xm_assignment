import { FieldValidation, RegistrationField, RegistrationRequest } from './../../models/registration.model';
import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public loading = false;
  public registerForm: FormGroup;
  public formFields: RegistrationField[];

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService

  ) {
  }

  setGenericValidators(validator: FieldValidation): ValidatorFn {
    switch(validator.name) {
      case 'minlength': return Validators.minLength(+validator.value)
      case 'maxlength': return Validators.maxLength(+validator.value)
      case 'regex': return Validators.pattern(validator.value.toString())
      default: return Validators.nullValidator
    }
  }

  ngOnInit(): void {
    this.setRegistrationFormFields()
  }

  setRegistrationFormFields() {
    this._registrationService.getRegistrationFormFields().subscribe(formFields => {
      this.registerForm = this._formBuilder.group({});
      this.formFields = formFields;

      formFields.forEach(field => {
        this.registerForm.addControl(
          field.name,
          this._formBuilder.control('')
        )
        if (field.required) {
          this.registerForm.get(field.name)?.addValidators(Validators.required)
        }
        if (field.validations) {

          field.validations.forEach(validator => {
            this.registerForm.get(field.name)?.addValidators(this.setGenericValidators(validator))
          })
        }

      })
    });
  }

  onSubmit() {

    // stop here if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    const formData: RegistrationRequest = {
      ...this.registerForm.value
    }

    this._registrationService.postRegister(formData).subscribe(response => {
        this.loading = false;
        this._router.navigate(['welcome']);
      },
      (errors) => {
        this.loading = false;
      }
    )
  }

}
