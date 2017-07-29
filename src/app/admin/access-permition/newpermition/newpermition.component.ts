import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpermition',
  templateUrl: './newpermition.component.html',
  styleUrls: ['./newpermition.component.css']
})
export class NewpermitionComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
