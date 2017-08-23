import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SelecttestComponent } from '../../../modal/selecttest/selecttest.component';

@Component({
  selector: 'app-testlistblank',
  templateUrl: './testlistblank.component.html',
  styleUrls: ['./testlistblank.component.css']
})
export class TestlistblankComponent implements OnInit {

  constructor(public dialog: MdDialog) {}
  ngOnInit() {  }
  selectTest() {
      this.dialog.open(SelecttestComponent);
  }
}
