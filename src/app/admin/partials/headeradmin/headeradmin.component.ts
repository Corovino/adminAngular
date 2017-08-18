import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../../../providers/auth.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css'],
  providers : [ AuthService ]
})
export class HeaderAdminComponent implements OnInit {

  @Input() titlePage: string;

  constructor( private auth :AuthService ) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }

}
