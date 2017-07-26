import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewLocationComponent} from '../../admin/modal/new-location/new-location.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openNewLocation() {
    this.dialog.open(NewLocationComponent);
  }
  ngOnInit() {
  }

}
