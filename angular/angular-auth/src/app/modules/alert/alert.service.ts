import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

export interface Alert {
    type: string;
    message: string;
}

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        console.log('constructor');
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(msg: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', message: msg });
    }

    error(msg: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', message: msg });
    }

    getMessage(): Observable<Alert> {
        // console.log('getMessage');
        return this.subject.asObservable();
    }
}
