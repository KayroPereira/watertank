import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { RegisterService } from '../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // loginForm = new FormGroup({
  //   emailLogin: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)])
  // });

  loginForm: FormGroup = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private registerService: RegisterService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  // user$: Observable<User> = new Observable;
  loading : boolean = false;

  observerlogin$: Subscription = new Subscription();

  ngOnInit(): void {
    // this.user$.subscribe(()=>{
    //   console.log('dfajdçfaksdjfa');
    // });
  }

  msgError(){
    this.snackbar.open('Login failed','' , { duration: 2000 });
  }

  onSubmit(){
    this.loading = true;
    let email = this.loginForm.value.emailLogin;
    let password = this.loginForm.value.password;

    console.log(email);
    console.log(password);

    this.observerlogin$ = this.registerService.login(email, password)
    .subscribe({
      next: (u) => {
        console.log('fakljsdhf')
        this.loading = false;
        this.router.navigateByUrl('/home/begin');
      },
      error: (err)=> {
        // console.log('false:1')
        this.loading = false;
        this.msgError();
        console.log(err);
        console.log('t1');
      }
    });

    // console.log('t2');

    // console.log(this.observerlogin$)
  }

  ngOnDestroy(){
    // this.user$.subscribe().unsubscribe();
    // console.log('t3');
    this.observerlogin$.unsubscribe();
  }

  checkError(controlName: string, errorType: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorType);
  }
}
