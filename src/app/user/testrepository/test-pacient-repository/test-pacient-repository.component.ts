import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pacient-repository',
  templateUrl: './test-pacient-repository.component.html',
  styleUrls: ['./test-pacient-repository.component.css']
})
export class TestPacientRepositoryComponent implements OnInit {

  search = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
