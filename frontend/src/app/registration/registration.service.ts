import { PersonService } from './../shared/services/person.service';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationField, RegistrationRequest } from 'src/models/registration.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegistrationService {

  constructor(
    private _http: HttpClient,
    private _personService: PersonService
  ) { }

  getRegistrationFormFields() {
    // return of<RegistrationField[]>(registrationFormFieldsResponseExample)
    return this._http.get<RegistrationField[]>(environment.apiUrl + '/register')
  }

  postRegister(formData: RegistrationRequest) {
    return this._http.post<RegistrationRequest>(environment.apiUrl + '/register', formData).pipe(
      tap(response => {
        this._personService.setPerson(response)
      })
    )
  }
}
