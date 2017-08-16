import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../../../providers/auth.service';

@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrls: ['./headeruser.component.css'],
  providers : [ AuthService ]
})
export class HeaderuserComponent implements OnInit {

  @Input() titlePage: string;
  constructor( private auth :AuthService ) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }

}
