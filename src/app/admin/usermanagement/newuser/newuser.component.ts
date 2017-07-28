import { Component, OnInit } from '@angular/core';
import { MdDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  gender = [
    {value: 'male ', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
