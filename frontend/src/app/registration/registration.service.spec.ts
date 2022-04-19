import { userResponse } from './../../../../backend/data/registrationResponse';
import { RegistrationService } from './registration.service';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { registrationFormFieldsResponseExample } from 'src/data/registrationResponse';
import { PersonService } from '../shared/services/person.service';
import { RegistrationRequest } from 'src/models/registration.model';


describe('RegistrationService', () => {
  let person: PersonService;
	let service: RegistrationService;
  let httpController: HttpTestingController;

	let url = 'localhost:3080/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService, RegistrationService]
    });
    person = TestBed.inject(PersonService)
    service = TestBed.inject(RegistrationService);
    httpController = TestBed.inject(HttpTestingController);
  });

	it('should get registration form with the correct values', () => {
    service.getRegistrationFormFields().subscribe(response => {
      expect(response).toEqual(registrationFormFieldsResponseExample);
    });
  });

  it('should call postRegister and return the data posted', () => {
    const serverFakeData: RegistrationRequest = {
      first_name: 'John',
      middle_name: '',
      last_name: 'Doe',
      email: 'john@test.com',
      phone_number: '12345678',
      password: 'Password828282@'
    };

    service.postRegister(serverFakeData).subscribe(response => {
      expect(response).toEqual(userResponse);
    });
  });

})
