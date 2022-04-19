import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { RegistrationField, RegistrationRequest } from 'src/models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personSubject$: BehaviorSubject<RegistrationRequest | null> = new BehaviorSubject<RegistrationRequest | null>(null);
  public person$: Observable<RegistrationRequest | null> = this.personSubject$.asObservable();

  setPerson(person: RegistrationRequest) {
    this.personSubject$.next(person);
  }

  destroyPerson() {
    this.personSubject$.next(null);
  }

}
