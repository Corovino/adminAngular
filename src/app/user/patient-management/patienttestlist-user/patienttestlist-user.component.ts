import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SelecttestComponent } from '../../../modal/selecttest/selecttest.component';

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
  selectTest() {
    this.dialog.open(SelecttestComponent);
  }
}
