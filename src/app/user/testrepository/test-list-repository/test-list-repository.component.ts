import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../../modal/description-test/description-test.component';
import { SearchpatientComponent } from '../../../modal/searchpatient/searchpatient.component';

@Component({
  selector: 'app-test-list-repository',
  templateUrl: './test-list-repository.component.html',
  styleUrls: ['./test-list-repository.component.css']
})
export class TestListRepositoryComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
  openSearch() {
    this.dialog.open(SearchpatientComponent);
  }

  ngOnInit() {
  }

}
