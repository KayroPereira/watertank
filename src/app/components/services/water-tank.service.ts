import { WaterTankDeviceObject } from './../../models/water-tank-device';
import { MainService } from './../../main/service/main.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WaterTankDevice } from 'src/app/models/water-tank-device';
import { Injectable } from '@angular/core';
import { from, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaterTankService {

  private devicesCollection: AngularFirestoreCollection<WaterTankDevice> = this.afs.collection('devices');

  constructor(
    private afs: AngularFirestore,
    private mainService: MainService,
  ) { }

  // devicesTemp: WaterTankDevice[] =  [
  //   new WaterTankDevice()
  // ]

  devicesTemp: WaterTankDevice[] = [
    {id_user: 'adfdasTIU12HG', status: -1, code: 'wt2', mac: 'F412AD', nickName: 'Casa Praia', password: 'fdahfab562387hfd78mndda', topLevel: 60, bottomLevel: 25, criticalTopLevel: 65, criticalBottomLevel: 10, currentLevel: 45, statusValveInput: 0, statusValveOutput: 1, currentFlag: 23456},
    {id_user: '123433TIU12HG', status: 0, code: 'wt4', mac: 'A412AD', nickName: 'Caixa Principal', password: 'fdahfab562387hfd78mndda', topLevel: 70, bottomLevel: 35, criticalTopLevel: 75, criticalBottomLevel: 15, currentLevel: 55, statusValveInput: 1, statusValveOutput: 0, currentFlag: 13456},
    {id_user: 'adfd4278112HG', status: 1, code: 'wt8', mac: 'B412AD', nickName: 'Caixa Reserva', password: 'fdahfab562387hfd78mndda', topLevel: 80, bottomLevel: 45, criticalTopLevel: 85, criticalBottomLevel: 20, currentLevel: 65, statusValveInput: 0, statusValveOutput: 1, currentFlag: 43456},
    {id_user: 'ad12fdadas12G', status: 0, code: 'wt2', mac: 'C412AD', nickName: 'Casa Férias', password: 'fdahfab562387hfd78mndda', topLevel: 90, bottomLevel: 55, criticalTopLevel: 95, criticalBottomLevel: 25, currentLevel: 75, statusValveInput: -1, statusValveOutput: 0, currentFlag: 456},
    {id_user: '12HKJdasT12HG', status: 1, code: 'wt2', mac: 'D412AD', nickName: 'Caixa Empresa', password: 'fdahfab562387hfd78mndda', topLevel: 100, bottomLevel: 65, criticalTopLevel: 105, criticalBottomLevel: 30, currentLevel: 85, statusValveInput: 0, statusValveOutput: -1, currentFlag: 56},
    {id_user: '856adfEEWQsTG', status: -1, code: 'wt4', mac: 'FA12AD', nickName: 'Caixa Limpeza', password: 'fdahfab562387hfd78mndda', topLevel: 110, bottomLevel: 75, criticalTopLevel: 115, criticalBottomLevel: 35, currentLevel: 95, statusValveInput: 1, statusValveOutput: 1, currentFlag: 93456},
    {id_user: 'adfdasTIU12HG', status: 1, code: 'wt6', mac: 'FB12AD', nickName: 'Caixa Residuos', password: 'fdahfab562387hfd78mndda', topLevel: 120, bottomLevel: 85, criticalTopLevel: 125, criticalBottomLevel: 40, currentLevel: 105, statusValveInput: 0, statusValveOutput: -1, currentFlag: 123456},
    {id_user: '123433TIU12HG', status: 0, code: 'wt8', mac: 'FC12AD', nickName: 'Silo Arroz', password: 'fdahfab562387hfd78mndda', topLevel: 400, bottomLevel: 125, criticalTopLevel: 450, criticalBottomLevel: 95, currentLevel: 200, statusValveInput: 1, statusValveOutput: 0, currentFlag: 63456},
  ]

  // getDeviceData(): Observable<WaterTankDevice> {
  //   return of(this.devicesTemp[Math.floor(Math.random()*this.devicesTemp.length)]);
  // }
  cont: number = 0;

  getDeviceData(idUser: string, mac: string): Observable<WaterTankDevice> {
    // let searchDevice = this.mainService.getDevicesFavorites().getValue().filter((device) => device.id_user === idUser && device.mac === mac)[0];
    let searchDevice = this.devicesTemp.filter((device) => device.id_user === idUser && device.mac === mac)[0];

    
    console.log(`========================= cont: ${this.cont++}`);

    console.log(idUser)
    console.log(mac)
    console.log(searchDevice)

    if(searchDevice === undefined){
      this.mainService.deleteFavoriteDeviceBydMac(mac);
    }

    return  searchDevice != undefined ? of(searchDevice) : of();
  }

  // addDevice(collection: string, device: any, type: any): Promise<any>{
  addDevice(collection: string, device: any): Promise<any>{
    // let collectionFirebase: AngularFirestoreCollection<typeof type> = this.afs.collection(collection);
    // let collectionFirebase: AngularFirestoreCollection<typeof device> = this.afs.collection(collection);

    let collectionFirebase: AngularFirestoreCollection<typeof device> = this.afs.collection(collection);


    console.log("addDevice");
    console.table(device);

    return collectionFirebase.add(Object.assign({}, device));

    // let result: string = "";

    // collectionFirebase.add(device).then(ret => {
    //   console.log("Return");
    //   console.table(ret);
    //   result = ret.id;
    // }).catch(err => {
    //   console.log("Error");
    //   console.table(err);
    //   result = err;
    // })
    // return result;
  }

  getDeviceDataFilter(password: string, mac: string): Observable<WaterTankDevice>{
    let device = this.devicesCollection.ref.where('password', '==', password).get();
    console.log('------==================00000000');
    console.log(device);
    // let d = from(device).pipe(
    //   tap(v => {
    //     console.log('djfahldhfadsfhasdfhjkadshlkfans')
    //     console.log(v)
    //   })
    // );
    // return new Observable;

    // let d = from(device).subscribe(v => 
    //   {
    //     console.log('djfahldhfadsfhasdfhjkadshlkfans')
    //     console.log(v)
    //   }
    //   )
    
    let d = device.then(v => console.log('===============@@@@@@@>' + v.docChanges()));

    console.log('********************************>' + d)
    // .pipe(
    //   tap(v => {
    //     console.log('djfahldhfadsfhasdfhjkadshlkfans')
    //     console.log(v)
    //   })
    // );

    return new Observable;
  }
}
