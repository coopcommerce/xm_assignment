import { SharedModule } from './../shared/shared.module';
import { registrationFormFieldsResponseExample } from './../../data/registrationResponse';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationComponent } from './registration.component';
import { RegistrationService } from './registration.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  const mockRegisterService = jasmine.createSpyObj("RegistrationService", ["getRegistrationFormFields"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        SharedModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule

      ],
      providers: [
        RegistrationService,
        { provide: RegistrationService, useValue: mockRegisterService }
      ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    mockRegisterService.getRegistrationFormFields.and.returnValue(
      of(registrationFormFieldsResponseExample)
    );
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render first_name and last_name elements', async() => {
    const regForm = fixture.debugElement.queryAll(By.css('input'));
    expect(regForm[0]).toBeTruthy();
    expect(regForm[2]).toBeTruthy();
  });


  it('should call submit when form clicked', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const regForm = fixture.debugElement.query(By.css('.registration-form'));
    expect(regForm.triggerEventHandler('submit', compiled)).toBeUndefined();
  });


});
