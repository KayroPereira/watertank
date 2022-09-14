import { WaterTankDeviceObject } from './../../models/water-tank-device';
import { MainService } from './../service/main.service';
import { RegisterService } from './../../auth/services/register.service';
import { Router } from '@angular/router';
import { WaterTankService } from './../../components/services/water-tank.service';
import { WaterTankDevice } from 'src/app/models/water-tank-device';
import { Component, OnInit } from '@angular/core';
import { catchError, pipe, Subscriber, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogger$: Observable<boolean> = new Observable;
  // devicesFavorites$: BehaviorSubject<WaterTankDevice[]> = new BehaviorSubject<WaterTankDevice[]>([]);

  // devicesFavoritesTemp: WaterTankDevice[] = [
  //   { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: '123433TIU12HG', status: 0, code: '', mac: 'A412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: 'adfd4278112HG', status: 0, code: '', mac: 'B412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: 'ad12fdadas12G', status: 0, code: '', mac: 'FC12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: '12HKJdasT12HG', status: 0, code: '', mac: 'D412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: '856adfEEWQsTG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  //   { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'FB12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
  // ]

  // {id_user: 'adfdasTIU12HG', status: -1, code: 'wt2', mac: 'F412AD', nickName: 'Casa Praia', password: 'fdahfab562387hfd78mndda', topLevel: 60, bottomLevel: 25, criticalTopLevel: 65, criticalBottomLevel: 10, currentLevel: 45, statusValveInput: 0, statusValveOutput: 1, currentFlag: 23456},
  // {id_user: '123433TIU12HG', status: 0, code: 'wt4', mac: 'A412AD', nickName: 'Caixa Principal', password: 'fdahfab562387hfd78mndda', topLevel: 70, bottomLevel: 35, criticalTopLevel: 75, criticalBottomLevel: 15, currentLevel: 55, statusValveInput: 1, statusValveOutput: 0, currentFlag: 13456},
  // {id_user: 'adfd4278112HG', status: 1, code: 'wt8', mac: 'B412AD', nickName: 'Caixa Reserva', password: 'fdahfab562387hfd78mndda', topLevel: 80, bottomLevel: 45, criticalTopLevel: 85, criticalBottomLevel: 20, currentLevel: 65, statusValveInput: 0, statusValveOutput: 1, currentFlag: 43456},
  // {id_user: 'ad12fdadas12G', status: 0, code: 'wt2', mac: 'C412AD', nickName: 'Casa Férias', password: 'fdahfab562387hfd78mndda', topLevel: 90, bottomLevel: 55, criticalTopLevel: 95, criticalBottomLevel: 25, currentLevel: 75, statusValveInput: -1, statusValveOutput: 0, currentFlag: 456},
  // {id_user: '12HKJdasT12HG', status: 1, code: 'wt2', mac: 'D412AD', nickName: 'Caixa Empresa', password: 'fdahfab562387hfd78mndda', topLevel: 100, bottomLevel: 65, criticalTopLevel: 105, criticalBottomLevel: 30, currentLevel: 85, statusValveInput: 0, statusValveOutput: -1, currentFlag: 56},
  // {id_user: '856adfEEWQsTG', status: -1, code: 'wt4', mac: 'FA12AD', nickName: 'Caixa Limpeza', password: 'fdahfab562387hfd78mndda', topLevel: 110, bottomLevel: 75, criticalTopLevel: 115, criticalBottomLevel: 35, currentLevel: 95, statusValveInput: 1, statusValveOutput: 1, currentFlag: 93456},
  // {id_user: 'adfdasTIU12HG', status: 1, code: 'wt6', mac: 'FB12AD', nickName: 'Caixa Residuos', password: 'fdahfab562387hfd78mndda', topLevel: 120, bottomLevel: 85, criticalTopLevel: 125, criticalBottomLevel: 40, currentLevel: 105, statusValveInput: 0, statusValveOutput: -1, currentFlag: 123456},
  // {id_user: '123433TIU12HG', status: 0, code: 'wt8', mac: 'FC12AD', nickName: 'Silo Arroz', password: 'fdahfab562387hfd78mndda', topLevel: 400, bottomLevel: 125, criticalTopLevel: 450, criticalBottomLevel: 95, currentLevel: 200, statusValveInput: 1, statusValveOutput: 0, currentFlag: 63456},
  
  constructor(
    private waterTankService: WaterTankService,
    private registerService: RegisterService,
    private router: Router,
    public mainService: MainService,

    ) { 
      console.log('dlsf1')
      // this.devicesFavorites$.next([
      //   { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: '123433TIU12HG', status: 0, code: '', mac: 'A412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: 'adfd4278112HG', status: 0, code: '', mac: 'B412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: 'ad12fdadas12G', status: 0, code: '', mac: 'FC12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: '12HKJdasT12HG', status: 0, code: '', mac: 'D412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: '856adfEEWQsTG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      //   { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'FB12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      // ])

  }

  deleteTemp(){
    // let t = this.devicesFavorites$.getValue();
    // let t = this.mainService.devicesFavorites$.getValue();

    // t.splice(0, 1);

    this.mainService.deleteFavoriteDeviceByDevice(this.mainService.getDevicesFavorites().getValue()[0]);
  }

  addTemp(){
    let device: WaterTankDevice = {id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'FB12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 }
    let device1 = new WaterTankDeviceObject('adfdasTIU12HG', 'HV2', 'FB12AD', 'Casa Praia', '!@#$%*');
    let id: string = "";
    
    console.log(typeof device);
    console.log(typeof device1);

    // this.waterTankService.addDevice('devices', device, WaterTankDeviceObject).then(ret => {
    this.waterTankService.addDevice('devices', device1).then(ret => {
      console.log("Return");
      console.table(ret);
      console.log(`id: ${ret?.id || 'null'}`)
    }).catch(err => {
      console.log("Error");
      console.table(err);
    })
  }

  test(){
    let t = new WaterTankDeviceObject("teste", "21", '22', '23', '24', 20, 25, 26, 27, 28, 29, 30, 31, 32);
    let t1 = new WaterTankDeviceObject("teste1", "21", '22', '23', '24', 20, 25, undefined, 27, 28, 29, 30, 31, 32);
    let t2 = new WaterTankDeviceObject("teste2", "21", '22', '23', '24', 20, 25, undefined, 27);
    console.log("============================================");
    console.log(t);
    console.log(t1);
    console.log(t2);
  }

  ngOnInit(): void {
    console.log('Init: ')

    this.isLogger$ = this.registerService.isLogged$;


    //TODO: Reativar
    // this.isLogger$.subscribe(e => {
    //   console.log('---------> Logger');

    //   if(!e.valueOf()){
    //     this.router.navigateByUrl('/auth/login');
    //   }
    // })


    // this.router.navigateByUrl('');
  }

  cont: number = 0;

  isDevice(idUser?: string, mac?: string): boolean{
    console.log('isDevice: ' + this.cont++)
    // let device = this.waterTankService.getDeviceData(idUser || '', mac || '')
    // // .subscribe({
    // //   next: (u) => {
    // //     console.log('sucess: ' + u.id_user)
    // //     // console.log('sucess: ' + u)
    // //   },
    // //   error: (err) =>{
    // //     // console.log('----------- Err: ' + err)
    // //   },
    // //   complete: () => {
    // //     // console.log('********* Complete: ')
    // //   }
    // // }


    //   // pipe((u) => {
    //   //   console.log(u);

    //   //   catchError(e =>{
    //   //     return false;
    //   //   })
    //   // }),
    // // );

    // console.log(device)

    // // device.unsubscribe;

    let device = this.cont;

    // console.log(this.cont % 2 == 0)
    // return this.cont % 2 == 0;
    return device != undefined;
  }
}
