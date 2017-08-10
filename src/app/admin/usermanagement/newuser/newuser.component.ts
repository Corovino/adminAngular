import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  gender = [
    { value: 'male ', viewValue: 'Male'},
    { value: 'female', viewValue: 'Female'}
  ];
  city = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  state = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  reportsto = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  usertype = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  certifications = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  roleselection = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  location = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];
  division = [
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'},
    { value: 'option ', viewValue: 'option'},
    { value: 'option', viewValue: 'option'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
