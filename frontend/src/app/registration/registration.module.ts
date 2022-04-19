import { SharedModule } from './../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationService } from './registration.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
]

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  providers: [
    RegistrationService
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegistrationModule {}
