import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../../admin/modal/description-test/description-test.component';
import { DeleteComponent } from '../../../admin/modal/delete/delete.component';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}

  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
  openDelete() {
    this.dialog.open(DeleteComponent);
  }

  ngOnInit() {
  }

}
