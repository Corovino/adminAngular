import { Component, OnInit } from '@angular/core';
import { CurrentURLService } from '../../providers/current-url.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CurrentURLService]
})
export class AdminComponent implements OnInit {

  private currentUrl: string = '/';
  public titlePage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
        switch (this.currentUrl) {
          case '/admin/test':
            this.titlePage = 'Test';
            break;
          case '/admin/usersManagement' :
            this.titlePage = 'User Management';
            break;
          case '/admin/testhistory' :
            this.titlePage = 'Test hostory';
            break;
          case '/admin/patientManagement':
            this.titlePage = 'Patient Manager';
            break;
          case '/admin/accessPermission':
            this.titlePage = 'Access Permission';
            break;
          case '/admin/locations':
            this.titlePage = 'Locations';
            break;
          case '/admin/billing':
            this.titlePage = 'Billing';
            break;
        }
      }
    });
  }
}
