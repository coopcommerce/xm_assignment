import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { ErrorComponent } from './error/error.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PasswordFieldComponent,
    ErrorComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule],
  exports: [PasswordFieldComponent, ErrorComponent]
})
export class SharedModule {}
