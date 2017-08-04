import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrls: ['./headeruser.component.css']
})
export class HeaderuserComponent implements OnInit {

  @Input() titlePage: string;
  constructor() { }

  ngOnInit() {
  }

}
