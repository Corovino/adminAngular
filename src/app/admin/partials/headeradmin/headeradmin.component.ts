import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  @Input() titlePage: string;
  constructor() { }

  ngOnInit() {
  }

}
