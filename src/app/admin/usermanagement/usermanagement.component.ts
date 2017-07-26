import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {DeleteComponent} from '../../admin/modal/delete/delete.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

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
