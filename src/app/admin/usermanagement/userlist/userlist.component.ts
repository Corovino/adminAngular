import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}
  openDelete() {
    this.dialog.open(DeleteComponent);
  }

  ngOnInit() {
  }

}
