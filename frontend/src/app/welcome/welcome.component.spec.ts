import { PersonService } from './../shared/services/person.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the details of the person', () => {

    const service = fixture.debugElement.injector.get(PersonService);
    service.setPerson({
      first_name: 'John',
      middle_name: '',
      last_name: 'Doe',
      email: 'john@test.com',
      phone_number: '12345678',
    });

    fixture.detectChanges();

    let email = fixture.debugElement.query(By.css('.email'));
    let phone_number = fixture.debugElement.query(By.css('.phone_number'));

    expect(email.nativeElement.textContent).toBe(' Email: john@test.com ');
    expect(phone_number.nativeElement.textContent).toBe(' Phone Number: 12345678 ');

  });
});
