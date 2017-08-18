import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../../modal/description-test/description-test.component';
import { DeleteComponent } from '../../../modal/delete/delete.component';
import { TestComponent } from '../../../modal/test/test.component';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
  openTest() {
    this.dialog.open(TestComponent);
  }

  ngOnInit() {
  }

}
