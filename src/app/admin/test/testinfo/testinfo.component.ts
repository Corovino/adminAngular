import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testinfo',
  templateUrl: './testinfo.component.html',
  styleUrls: ['./testinfo.component.css']
})
export class TestinfoComponent implements OnInit {

  location = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  division = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
