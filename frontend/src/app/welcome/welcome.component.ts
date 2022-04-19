import { PersonService } from './../shared/services/person.service';
import { Component, OnInit } from '@angular/core';
import { RegistrationRequest } from 'src/models/registration.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  person: RegistrationRequest | null;

  constructor(
    private _personService: PersonService
  ) { }

  ngOnInit(): void {
    this._personService.person$.subscribe(person => this.person = person)
  }

  ngOnDestroy(): void {
    this._personService.destroyPerson()
  }

  getFullName(): string {
    return `${this.person?.['first_name']} ${this.person?.['middle_name']} ${this.person?.['last_name']}`
  }


}
