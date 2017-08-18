import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public dialog: MdDialog) {}
  openDelete() {
    this.dialog.open(DeleteComponent);
  }

  ngOnInit() {
  }

}
