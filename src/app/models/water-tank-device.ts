import { StatusDevices } from './../enum/status-devices.enum';
export interface WaterTankDevice{
    id_user?: string,
    status: number,
    code: string,
    mac: string,
    nickName: string,
    password: string,
    topLevel: number,
    bottomLevel: number,
    criticalTopLevel: number,
    criticalBottomLevel: number
    currentLevel: number,
    statusValveInput: number,
    statusValveOutput: number,
    currentFlag: number,
}

//id_user: 'adfdasTIU12HG', status: -1, code: 'wt2', mac: 'F412AD', nickName: 'Casa Praia', password: 'fdahfab562387hfd78mndda', 
//topLevel: 60, bottomLevel: 25, criticalTopLevel: 65, criticalBottomLevel: 10, currentLevel: 45, statusValveInput: 0, statusValveOutput: 1, currentFlag: 23456
export class WaterTankDeviceObject implements WaterTankDevice{
    id_user;
    code;
    mac;
    nickName;
    password;
    status;
    topLevel;
    bottomLevel;
    criticalTopLevel;
    criticalBottomLevel;
    currentLevel;
    statusValveInput;
    statusValveOutput;
    currentFlag;

    constructor(id_user: string, code: string, mac: string, nickName: string, password: string, status?: number, 
        topLevel?: number, bottomLevel?: number, criticalTopLevel?: number, criticalBottomLevel?: number,
        currentLevel?: number, statusValveInput?: number, statusValveOutput?: number, currentFlag?: number){
            this.id_user = id_user || "";
            this.status = status || StatusDevices.NoConnect;
            this.code = code || "";
            this.mac = mac || "";
            this.nickName = nickName || "";
            this.password = password || "";
            this.topLevel = topLevel || 0;
            this.bottomLevel = bottomLevel || 0;
            this.criticalTopLevel = criticalTopLevel || 0;
            this.criticalBottomLevel = criticalBottomLevel || 0;
            this.currentLevel = currentLevel || 0;
            this.statusValveInput = statusValveInput || 0;
            this.statusValveOutput = statusValveOutput || 0;
            this.currentFlag = currentFlag || 0;
    }
}