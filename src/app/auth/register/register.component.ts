import { User } from 'src/app/models/user';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  statesBrazil: string[] = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO','MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  formRegister = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
  },{
    validators: [this.matchingPasswords()]
  });

  constructor(
    private registerService: RegisterService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newUser: User = {
      firstName: this.formRegister.value.firstName,
      lastName: this.formRegister.value.lastName,
      address: this.formRegister.value.address,
      city: this.formRegister.value.city,
      state: this.formRegister.value.state,
      mobilePhone: this.formRegister.value.mobile,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password
    }

    this.registerService.register(newUser)
    .subscribe({
      next: (u)=>{
        this.snackbar.open(
          'Success registered.', 'OK', {duration: 2000}
        );
        this.router.navigateByUrl('/auth/login');
      },
      error: (err) => {
        this.snackbar.open(
          'Error in register.', 'OK', {duration: 2000}
        );
      }
    });
  }

  matchingPasswords(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {

      if(control){
        const password1 = control.get('password')?.value;
        const password2 = control.get('passwordConfirmation')?.value;

        if(password1 === password2){
          return null;
        }
      }
      return {matching: false};
    }
  }
}