import { Component } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { WindowRef } from '../WindowRef'
@Component({
    selector: 'app-nav',
    templateUrl: 'navComponent.component.html',
    styleUrls: ['navComponent.component.css']
})

export class NavComponent {

    device = null;
    jsBool: boolean = false;
    cookieEnabled = navigator.cookieEnabled ? "enabled" : "disabled";
    onLine = navigator.onLine ? "Online!" : "Offline";
    lang = navigator.language;
    OSplatform = navigator.platform;
    maxTouchPoints = navigator.maxTouchPoints;
    appCodeName = navigator.appCodeName;
        constructor(private deviceService: Ng2DeviceService) {
        this.device = deviceService.getDeviceInfo();
        if (this.device) {
            this.jsBool = true;

        }
        this.device.javascript = null;
        console.log("jsBool : " + this.jsBool);

        if (this.jsBool) {
            this.device.javascript = "enabled";
        }
       
        
    }
}