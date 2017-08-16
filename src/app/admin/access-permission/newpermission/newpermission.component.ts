import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpermission',
  templateUrl: './newpermission.component.html',
  styleUrls: ['./newpermission.component.css']
})
export class NewpermissionComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
