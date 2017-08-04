import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-patienttestlist-user',
  templateUrl: './patienttestlist-user.component.html',
  styleUrls: ['./patienttestlist-user.component.css']
})
export class PatienttestlistUserComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}
  ngOnInit() {}

}
