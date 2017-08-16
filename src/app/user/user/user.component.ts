import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private currentUrl: string = '/';
  public titlePage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
        switch (this.currentUrl) {
          case '/user/dashboard':
            this.titlePage = 'Dashboard';
            break;
          case '/user/testrepository':
            this.titlePage = 'Test Repository';
            break;
          case '/user/testpacient':
            this.titlePage = 'Test Repository';
            break;
          case '/user/patientManagement':
            this.titlePage = 'Patient Management';
            break;
          case '/user/patientManagement/PatientlistUser':
            this.titlePage = 'Patient Management';
            break;
          case '/user/patientManagement/PatienttestlistUser':
            this.titlePage = 'Patient Management';
            break;
          case '/user/testhistory':
            this.titlePage = 'Test History';
            break;
         }
      }
    });
  }

}
