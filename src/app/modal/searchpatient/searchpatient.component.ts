import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewpatientComponent } from '../../modal/newpatient/newpatient.component';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css']
})
export class SearchpatientComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  newpatient() {
    this.dialog.open(NewpatientComponent);
  }
}
