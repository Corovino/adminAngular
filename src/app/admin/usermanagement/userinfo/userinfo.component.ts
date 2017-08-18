import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
}
