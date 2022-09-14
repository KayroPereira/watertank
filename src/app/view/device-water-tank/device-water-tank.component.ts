import { User } from './../../models/user';
import { RegisterService } from './../../auth/services/register.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-water-tank',
  templateUrl: './device-water-tank.component.html',
  styleUrls: ['./device-water-tank.component.scss']
})

export class DeviceWaterTankComponent implements OnInit {

  formRegister = new FormGroup({
    nickname: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    mac: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    bottomLevel: new FormControl('', Validators.max(999)),
    topLevel: new FormControl('', Validators.max(999)),
    criticalTopLevel: new FormControl('', Validators.max(999)),
    criticalBottomLevel: new FormControl('', Validators.max(999))
  });

  private userLog: User = {firstName: '', lastName: '', address: '', city: '', state: '', email: '', mobilePhone: '', };

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.userLog = this.registerService.userLogin$.subscribe(u => u.);
  }

  onSubmit(){
    newDevice: De
    console.log('fasdlf')
  }

  formatInputNumber(min: number, max: number, event: any){

    const regexText = /[A-Z]/gi;
    const regexNumber = /[0-9]/;
    let validCharacter = event.data?.match(regexText)?.length;

    if(validCharacter === undefined){
      validCharacter = event.data?.match(regexNumber)?.length;

      if(validCharacter !== undefined || (event.data === null && (event.inputType == 'deleteContentForward' || event.inputType == 'deleteContentBackward'))){
          validCharacter = true;
        }else {
          validCharacter = false;
        }
    }else{
      validCharacter = false;
    }

    let valueBackup = event?.target?.attributes?.valuebackup?.value;

    if(valueBackup === undefined){
        valueBackup = 0;
        event.target.setAttribute('valuebackup', valueBackup);
    }

    if(event.target.value > max || event.target.value < min || !validCharacter){
      event.target.value = valueBackup != 0 ? valueBackup : '';
      return;
    }else{
      event.target.attributes.valuebackup.value = event.target.value;
    }
  }
}