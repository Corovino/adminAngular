import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewLocationComponent } from '../../admin/modal/new-location/new-location.component';
import { DeleteComponent } from '../../admin/modal/delete/delete.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  constructor(public dialog: MdDialog) {}

  openNewLocation() {
    this.dialog.open(NewLocationComponent);
  }
  openDelete() {
    this.dialog.open(DeleteComponent);
  }
  ngOnInit() {
  }

}
