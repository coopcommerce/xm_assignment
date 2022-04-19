import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { userResponse } from 'src/data/registrationResponse';
import { PersonService } from './person.service';


describe('PersonService', () => {
	let service: PersonService;
  let httpController: HttpTestingController;

	let url = 'localhost:3080/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PersonService);
    httpController = TestBed.inject(HttpTestingController);
  });

	it('should start with an empty person', () => {
    service.person$.subscribe(response => {
      expect(response).toEqual(null);
    });
  });


  it('should call setPerson and populate the observable', () => {
    service.setPerson(userResponse)
    service.person$.subscribe(response => {
      expect(response).toEqual(userResponse);
    });
  });

  it('should empty the person which will be called when destroying a component', () => {
    service.setPerson(userResponse)
    service.destroyPerson()

    service.person$.subscribe(response => {
      expect(response).toEqual(null);
    });
  });

})
