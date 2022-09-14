import { StatusDevices } from './../../enum/status-devices.enum';
import { WaterTankService } from './../services/water-tank.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WaterTankDevice } from 'src/app/models/water-tank-device';

@Component({
  selector: 'app-resume-water-tank',
  templateUrl: './resume-water-tank.component.html',
  styleUrls: ['./resume-water-tank.component.scss']
})
export class ResumeWaterTankComponent implements OnInit {

  @Input() idUser: string = '';
  @Input() mac: string = '';

  deviceWaterTank$: Observable<WaterTankDevice> = new Observable;
  deviceWaterTank1$: Observable<WaterTankDevice> = new Observable;
  
  constructor(
    private waterTankService: WaterTankService
  ) {}

  ngOnInit(): void {
    console.log('ResumeWaterTankComponent');
    this.deviceWaterTank$ = this.waterTankService.getDeviceData(this.idUser, this.mac);
    this.deviceWaterTank1$ = this.waterTankService.getDeviceDataFilter(this.idUser, this.mac);
  }

  // getDevice():Observable<WaterTankDevice>{
  //   // let on = StatusDevices[1];
  //   // let off = StatusDevices[0];
  //   // let nc = StatusDevices[-1];
  //   // let nac = StatusDevices[2];

  //   // let on1 = StatusDevices['On'];
  //   // let off1 = StatusDevices['Off'];
  //   // let nc1 = StatusDevices['NoConnect'];

  //   // let on1 = StatusDevices.On;
  //   // let off1 = StatusDevices.Off;
  //   // let nc1 = StatusDevices.NoConnect;

  //   // console.log(`nc: ${nc} off: ${off} on: ${on} nac: ${nac}`)
  //   // console.log(`nc: ${nc1} off: ${off1} on: ${on1}`)

  //   console.log('aqui')

  //   return this.waterTankService.getDeviceData();
  // }

  isActivity(value: number):boolean{
    return value !== StatusDevices.NoConnect ? true : false;
  }

  getSrcImage(value: number):string{
    switch (value){
      case 0:
        return "/off.png";

      case 1:
        return "/on.png";

      default:
        return "/off.png";
    }
  }
}
