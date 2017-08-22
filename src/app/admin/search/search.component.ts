import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DescriptionTestComponent } from '../../modal/description-test/description-test.component';
import { PatientscoreComponent } from '../../modal/patientscore/patientscore.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public dialog: MdDialog) {}
  openDescription() {
    this.dialog.open(DescriptionTestComponent);
  }
  openScore() {
    this.dialog.open(PatientscoreComponent);
  }
  ngOnInit() {
  }

}
