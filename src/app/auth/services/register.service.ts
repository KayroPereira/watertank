import { BehaviorSubject, catchError, from, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');
  private userLoginSubject$: BehaviorSubject<User> = new BehaviorSubject<User>({firstName: '', lastName: '', address: '', city: '', state: '', email: '', mobilePhone: '', });
  private isLoggedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  public userLogin$ = this.userLoginSubject$.asObservable();
  public isLogged$ = this.isLoggedSubject$.asObservable();

  public userLogin: User = {firstName: '', lastName: '', address: '', city: '', state: '', email: '', mobilePhone: '', };

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth ) { }

  register(user: User): Observable<boolean>{
    return from(this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password || ''))
      .pipe(
        switchMap((u: firebase.default.auth.UserCredential) => {
            delete user.password;
            return this.userCollection.doc(u.user?.uid)
            .set({...user, id: u.user?.uid})
            .then(()=>true)
          }
        ),
        catchError((err)=>throwError(() => err))
      );
  }
  
  login(email: string, password: string): Observable<User>{
    // login(email: string, password: string): Observable<any>{
    // let a: User = {firstName: '', lastName: '', address: '', city: '', state: '', email: '', mobilePhone: '', };

    console.log(`email: ${email} - passsword: ${password}`);
      
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap((u: firebase.default.auth.UserCredential) => {
          const _id: string = u.user?.uid || '';

          let user = this.userCollection.doc<User>(_id).valueChanges() as Observable<User>;

          user.pipe(tap(u => this.userLoginSubject$.next(u)));
          this.setUser(user);
          this.isLoggedSubject$.next(true);
          return user;
        }),
        catchError((err) => {
          console.log(`err: ${err}`);
          this.clearUser();
          return throwError(() => 'Invalid crendentials or user id not registered.')
        })
      )
  }

  // login(email: string, password: string): Observable<User>{
  //   // login(email: string, password: string): Observable<any>{
  //   return this.userLogin$.pipe(from(this.afAuth.signInWithEmailAndPassword(email, password))
  //     .pipe(
  //       switchMap((u: firebase.default.auth.UserCredential) => {
  //         const _id: string = u.user?.uid || '';
  //         return this.userCollection.doc<User>(_id).valueChanges() as Observable<User>;
  //       }),
  //       catchError(() => throwError(() => 'Invalid crendentials or user id not registered.'))
  //     ));
  // }

  private clearUser(){
    this.userLogin.firstName = '';
    this.userLogin.lastName = '';
    this.userLogin.email = '';
    this.userLogin.address = '';
    this.userLogin.id = '';
    this.userLogin.mobilePhone = '';
    this.userLogin.state = '';
    this.userLogin.city = '';
    this.userLogin.password = '';
  }

  private setUser(user: Observable<User>){
    user.subscribe(u => {
      this.userLogin.firstName = u.firstName;
      this.userLogin.lastName = u.lastName;
      this.userLogin.email = u.email;
      this.userLogin.address = u.address;
      this.userLogin.id = u.id;
      this.userLogin.mobilePhone = u.mobilePhone;
      this.userLogin.state = u.state;
      this.userLogin.city = u.city;
      this.userLogin.password = u.password;
    })
  }

  logout(){
    this.afAuth.signOut();
    this.isLoggedSubject$.next(false);
    this.userLoginSubject$.next({firstName: '', lastName: '', address: '', city: '', state: '', email: '', mobilePhone: '', });
  }

  getUserLog() : Observable<User>{
    return this.afAuth.authState
    .pipe(
      switchMap(u => (u) ? this.userCollection.doc<User>(u.uid).valueChanges() : of(null))
    ) as Observable<User>
  }

  authenticated() : Observable<boolean>{
    return this.afAuth.authState
    .pipe(map(u => u != null))
  }
}