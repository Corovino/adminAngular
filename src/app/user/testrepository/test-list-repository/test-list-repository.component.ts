import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../../modal/description-test/description-test.component';

@Component({
  selector: 'app-test-list-repository',
  templateUrl: './test-list-repository.component.html',
  styleUrls: ['./test-list-repository.component.css']
})
export class TestListRepositoryComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}

  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }

  ngOnInit() {
  }

}
