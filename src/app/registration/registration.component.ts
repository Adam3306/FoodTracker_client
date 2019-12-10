import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { RegistrationService } from '../registration.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit
{
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegistrationService,
    private authService: AuthService,
  )
  {
    // redirect to home if already logged in
    if (this.authService.isLoggedIn)
    {
      this.router.navigate(['/foods']);
    }
  }

  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid)
    {
      return;
    }

    const { username, password } = this.registerForm.value;
    this.registerService.register(username, password);
    this.router.navigate(['/login']);
  }
}