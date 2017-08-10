import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';
import { SelecttestComponent } from '../../../modal/selecttest/selecttest.component';

@Component({
  selector: 'app-patienttestlist',
  templateUrl: './patienttestlist.component.html',
  styleUrls: ['./patienttestlist.component.css']
})
export class PatienttestlistComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}
  ngOnInit() {}
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
  selectTest() {
    this.dialog.open(SelecttestComponent);
  }
}
