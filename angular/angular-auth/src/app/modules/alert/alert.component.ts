import { Component, OnInit, Input } from '@angular/core';
import { AlertService, Alert } from './alert.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-alert',
    providers: [NgbAlertConfig],
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit {
    alert: Alert;
    staticAlertClosed = false;

    constructor(
        private alertConfig: NgbAlertConfig,
        private alertService: AlertService
    ) {
        // customize default values of alerts used by this component tree
        alertConfig.type = 'success';
        alertConfig.dismissible = true;
    }

    ngOnInit() {
        this.alertService
            .getMessage()
            .subscribe(alert => {
                this.alert = alert;
                this.staticAlertClosed = false;
                // auto close alertbox after some time
                setTimeout(() => this.staticAlertClosed = true, 6000);
            });
    }
}
