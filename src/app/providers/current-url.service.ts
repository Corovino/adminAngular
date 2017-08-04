import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Injectable()
export class CurrentURLService {

  title = 'app';
  private currentUrl: string = '/';
  public titlePage: string;

  constructor(private router: Router ) { }
  getCurrentURL() {
    this.titlePage = '';
    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
        switch (this.currentUrl) {
          case '/test':
            this.titlePage = 'Test';
            break;
          case '/usersManagement' :
            this.titlePage = 'User Management';
            break;
          case '/usersManagement/userinfo' :
            this.titlePage = 'User Management';
            break;
          case '/accessPermission':
            this.titlePage = 'Access Permission';
            break;
          case '/locations':
            this.titlePage = 'Location';
            break;
          case '/patientManagement':
            this.titlePage = 'Patient Management';
            break;
          case '/patientManagement/patienttestlist':
            this.titlePage = 'Patient Management';
            break;
          case '/testhistory':
            this.titlePage = 'Test History';
            break;
        }
        return this.titlePage;
      }
    });
  }

}
