import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DeleteComponent } from '../../../modal/delete/delete.component';
import { SelecttestComponent } from '../../../modal/selecttest/selecttest.component';
import { DescriptionTestComponent } from '../../../modal/description-test/description-test.component';

@Component({
  selector: 'app-patienttestlist',
  templateUrl: './patienttestlist.component.html',
  styleUrls: ['./patienttestlist.component.css']
})
export class PatienttestlistComponent implements OnInit {

  constructor(public dialog: MdDialog) {}
  ngOnInit() {}
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
  selectTest() {
    this.dialog.open(SelecttestComponent);
  }
  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
}
