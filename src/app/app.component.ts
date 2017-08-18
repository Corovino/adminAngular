import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private currentUrl: string = '/';

  public titlePageUser: string;

  constructor(private router: Router ) {
    if(this.router.url === this.currentUrl){
      this.router.navigate[('/login')];
    }
  }
  ngOnInit() {
    this.pageTitle();
  }

  pageTitle(){
    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
          switch (this.currentUrl) {
          case '/user':
            this.titlePageUser = 'Test-User';
            break;
          default:
            this.titlePageUser = 'User Admin';
            break;
        }
      }
    });
  }
}

