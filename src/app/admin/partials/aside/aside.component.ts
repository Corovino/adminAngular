import { Component, OnInit } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  tiles = [

  ];

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {}
