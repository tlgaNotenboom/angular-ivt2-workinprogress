import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    // moduleId: module.id,
    selector: 'app-alert',
    providers: [NgbAlertConfig],
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit {
    @Input() public alerts: Array<string> = [];
    message: any;
    staticAlertClosed = false;

    constructor(
        private alertService: AlertService,
        private alertConfig: NgbAlertConfig
    ) {
        // Globally customize default values of alerts used by this component tree
        this.alertConfig.dismissible = true;

        setTimeout(() => this.staticAlertClosed = true, 4000);

    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            console.dir(message);
            this.message = message;
        });
    }
}
