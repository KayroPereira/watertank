import { Router } from '@angular/router';
import { RegisterService } from './../../auth/services/register.service';
import { User } from './../../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, of, timer, map, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  user$: Observable<User> = new Observable;
  authenticated$: Observable<boolean> = new Observable;
  
  private unsubscribeAll$: Subject<any> = new Subject();
  
  constructor (
    private registerService: RegisterService,
    private router: Router
    ){
      this.user$ = registerService.userLogin$
      .pipe(takeUntil(this.unsubscribeAll$));

      this.authenticated$ = registerService.isLogged$
      .pipe(takeUntil(this.unsubscribeAll$));

      // router.navigate([{outlets: {primary: '', }}]);
      // router.navigate(['/home/begin', ]);



    // interval(2000).pipe(
    //   map(() => {
    //     console.log(this.authenticated$)
    //   })
    // ).subscribe();

    // interval(2000).subscribe(
    //   () => {
    //     this.authenticated$.subscribe(u => console.log(u.valueOf()));
    //     this.user$.subscribe(u => console.log(u.valueOf()));
    //   }
    // );
  }

  ngOnInit(): void {
    console.log('----------------------- Input')
  }

  logout(){
    this.registerService.logout();
    // this.authenticated$ = of(false);
    // this.user$ = of(new User);
    this.router.navigateByUrl('/auth/login');
    this.unsubscribeAll$.next('');
    console.log('----------------------- unsubscribe')


    // this.router.navigateByUrl('/auth/register');

  }

  ngOnDestroy(){
    this.unsubscribeAll$.next('');
    console.log('----------------------- Output')
  }
}
