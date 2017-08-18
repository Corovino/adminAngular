import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SelecttestComponent } from '../../../modal/selecttest/selecttest.component';
import { DescriptionTestComponent } from '../../../modal/description-test/description-test.component';

@Component({
  selector: 'app-patienttestlist-user',
  templateUrl: './patienttestlist-user.component.html',
  styleUrls: ['./patienttestlist-user.component.css']
})
export class PatienttestlistUserComponent implements OnInit {

  constructor(public dialog: MdDialog) {}
  ngOnInit() {}
  selectTest() {
    this.dialog.open(SelecttestComponent);
  }
  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
}
