import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';

@Component({
  selector: 'app-permissionlist',
  templateUrl: './permissionlist.component.html',
  styleUrls: ['./permissionlist.component.css']
})
export class PermissionlistComponent implements OnInit {

  constructor(public dialog: MdDialog) {}
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
  ngOnInit() {
  }

}
