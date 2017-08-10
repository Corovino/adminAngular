import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../modal/description-test/description-test.component';

@Component({
  selector: 'app-selecttest',
  templateUrl: './selecttest.component.html',
  styleUrls: ['./selecttest.component.css']
})
export class SelecttestComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }

  ngOnInit() {
  }

}
