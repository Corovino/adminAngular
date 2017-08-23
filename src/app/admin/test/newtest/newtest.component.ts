import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtest',
  templateUrl: './newtest.component.html',
  styleUrls: ['./newtest.component.css']
})
export class NewtestComponent implements OnInit {

  subject = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];
  key = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];


  public status : any;

  constructor() { }

  ngOnInit() {

    this.status = {
       problem : true,
       solution : false,
       rules : false,
       position : false
    }

    console.log(this.status.problem);
  }


  asideStatus( status : string)
  {

       switch (status){
         case "problem":
           this.status.problem = true;
           this.status.solution = false;
           this.status.rules = false;
           this.status.position = false;
           break;
         case "solution":
           this.status.problem = false;
           this.status.solution = true;
           this.status.rules = false;
           this.status.position = false;
           break;
         case "rules":
           this.status.problem = false;
           this.status.solution = false;
           this.status.rules = true;
           this.status.position = false;
           break;
         case "position":
           this.status.problem = false;
           this.status.solution = false;
           this.status.rules = false;
           this.status.position = true;
           break;
       }

  }

}
