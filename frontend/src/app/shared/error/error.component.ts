import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationField } from 'src/models/registration.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: RegistrationField;

  constructor() { }

  ngOnInit(): void {
  }

}
