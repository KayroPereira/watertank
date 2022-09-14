import { BehaviorSubject } from 'rxjs';
import { WaterTankDevice } from 'src/app/models/water-tank-device';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  devicesFavorites$: BehaviorSubject<WaterTankDevice[]> = new BehaviorSubject<WaterTankDevice[]>([]);

  constructor() { 
    this.devicesFavorites$.next([
      { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: '123433TIU12HG', status: 0, code: '', mac: 'A412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: 'adfd4278112HG', status: 0, code: '', mac: 'B412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: 'ad12fdadas12G', status: 0, code: '', mac: 'FC12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: '12HKJdasT12HG', status: 0, code: '', mac: 'D412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: '856adfEEWQsTG', status: 0, code: '', mac: 'F412AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
      { id_user: 'adfdasTIU12HG', status: 0, code: '', mac: 'FB12AD', nickName: '', password: '', topLevel: 0, bottomLevel: 0, criticalTopLevel: 0, criticalBottomLevel: 0, currentLevel: 0, statusValveInput: 0, statusValveOutput: 0, currentFlag: 0 },
    ])

    // [
      //   {id_user: 'adfdasTIU12HG', status: -1, code: 'wt2', mac: 'F412AD', nickName: 'Casa Praia', password: 'fdahfab562387hfd78mndda', topLevel: 60, bottomLevel: 25, criticalTopLevel: 65, criticalBottomLevel: 10, currentLevel: 45, statusValveInput: 0, statusValveOutput: 1, currentFlag: 23456},
      //   {id_user: '123433TIU12HG', status: 0, code: 'wt4', mac: 'A412AD', nickName: 'Caixa Principal', password: 'fdahfab562387hfd78mndda', topLevel: 70, bottomLevel: 35, criticalTopLevel: 75, criticalBottomLevel: 15, currentLevel: 55, statusValveInput: 1, statusValveOutput: 0, currentFlag: 13456},
      //   {id_user: 'adfd4278112HG', status: 1, code: 'wt8', mac: 'B412AD', nickName: 'Caixa Reserva', password: 'fdahfab562387hfd78mndda', topLevel: 80, bottomLevel: 45, criticalTopLevel: 85, criticalBottomLevel: 20, currentLevel: 65, statusValveInput: 0, statusValveOutput: 1, currentFlag: 43456},
      //   {id_user: 'ad12fdadas12G', status: 0, code: 'wt2', mac: 'C412AD', nickName: 'Casa Férias', password: 'fdahfab562387hfd78mndda', topLevel: 90, bottomLevel: 55, criticalTopLevel: 95, criticalBottomLevel: 25, currentLevel: 75, statusValveInput: -1, statusValveOutput: 0, currentFlag: 456},
      //   {id_user: '12HKJdasT12HG', status: 1, code: 'wt2', mac: 'D412AD', nickName: 'Caixa Empresa', password: 'fdahfab562387hfd78mndda', topLevel: 100, bottomLevel: 65, criticalTopLevel: 105, criticalBottomLevel: 30, currentLevel: 85, statusValveInput: 0, statusValveOutput: -1, currentFlag: 56},
      //   {id_user: '856adfEEWQsTG', status: -1, code: 'wt4', mac: 'FA12AD', nickName: 'Caixa Limpeza', password: 'fdahfab562387hfd78mndda', topLevel: 110, bottomLevel: 75, criticalTopLevel: 115, criticalBottomLevel: 35, currentLevel: 95, statusValveInput: 1, statusValveOutput: 1, currentFlag: 93456},
      //   {id_user: 'adfdasTIU12HG', status: 1, code: 'wt6', mac: 'FB12AD', nickName: 'Caixa Residuos', password: 'fdahfab562387hfd78mndda', topLevel: 120, bottomLevel: 85, criticalTopLevel: 125, criticalBottomLevel: 40, currentLevel: 105, statusValveInput: 0, statusValveOutput: -1, currentFlag: 123456},
      //   {id_user: '123433TIU12HG', status: 0, code: 'wt8', mac: 'FC12AD', nickName: 'Silo Arroz', password: 'fdahfab562387hfd78mndda', topLevel: 400, bottomLevel: 125, criticalTopLevel: 450, criticalBottomLevel: 95, currentLevel: 200, statusValveInput: 1, statusValveOutput: 0, currentFlag: 63456},
      // ]
  }

  getDevicesFavorites(){
    return this.devicesFavorites$;
  }

  deleteFavoriteDeviceByDevice(device: WaterTankDevice){
    let id = this.devicesFavorites$.getValue().findIndex(d => d.id_user = device.id_user);
    this.devicesFavorites$.getValue().splice(id, 1);
    console.log(`================== index: ${id}`);
  }


  deleteFavoriteDeviceBydMac(mac: string){
    let id = this.devicesFavorites$.getValue().findIndex(d => d.mac == mac);
    this.devicesFavorites$.getValue().splice(id, 1);
    console.log(`================== index: ${id}`);
  }
}
