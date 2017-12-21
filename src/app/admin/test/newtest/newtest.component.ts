import { Component, OnInit, ElementRef, Renderer2, ViewChild, Inject,  NgZone } from '@angular/core';

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


  public status: any;
  public newTest: string;
  public noteTest: string;
  public countSolution: number = 3;
  public countBox: number = 1;
  public delete : any;
  public solutionTest : any;
  public wordText :any;





  constructor(  private renderer : Renderer2,
                private el: ElementRef,
                private zone : NgZone) {

  }

  ngOnInit() {

    this.wordText = '';
    this.newTest = '';
    this.noteTest = '';
    this.delete = {
       onDelete : true
    }

    this.solutionTest = {
        inputOne : '',
        inputTwo : '',
        inputThree :''
    }
    this.status = {
      problem: true,
      solution: false,
      rules: false,
      position: false
    }


  }


  asideStatus(status: string) {

    switch (status) {
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


  addElement() {
    this.countSolution++;
    let element = document.createElement('fieldset');
    element.setAttribute("class", "mb20");
    element.setAttribute('id', 'fieldset${this.countSolution}');

    element.innerHTML = `<md-input-container #testInput class="mat-input-container ng-tns-c8-33" *ngIf="delete.onDelete">
                             <input mdInput #value${this.countSolution} maxlength='120' placeholder='Value 0${this.countSolution}' value=''>
                               <md-hint align='star'>
                                <a href='javascript:void(0)' class='plus' (click)="addElement()">
                                  <i class='icon-plus'></i>
                                 </a>
                                 <a href='javascript:void(0)' class='minus' (click)="#testInput.remove()">
                                   <i class='icon-minus'></i>
                                 </a>
                                </md-hint>
                                <md-hint align='end'>
                                   {{value${this.countSolution}.value.length}} / 120
                                </md-hint>
                           </md-input-container>`;

    this.$('#inputSolution').appendChild(element);
  }

  deleteElement(e, element :any)
  {

       if (e.target.tagName === "I"){
           this.$('#inputSolution').removeChild(element);
       }

       /*console.log(e.target.tagName);
       if (e.target.tagName === "I"){
           console.log(this.elementRef.nativeElement.querySelector("fieldset"));
           let test = this.elementRef.nativeElement.querySelector("fieldset");
           test.remove();
       }*/
   }

   questionBox()
   {
       this.countBox ++;
       let element =  document.createElement("div");
       element.setAttribute("class","field");
       element.innerHTML = `<div class="number">
                                       <span>${this.countBox}.</span>
                            </div>`;
       this.$("#questionBox").appendChild(element);
   }

   addCheckbox( element :any)
   {
       console.log(element);

       this.zone.run( () => {

           console.log(this.solutionTest.inputOne.length);
           if ( this.solutionTest.inputOne.length > 0 && this.solutionTest.inputOne.length == 1 ){

                console.log(element);
                this.wordText = this.solutionTest.inputOne;
                console.log(this.wordText);
                var elem = document.createElement("li");
                //elem.innerHTML = `<md-checkbox class="mat-checkbox mat-accent">{{wordText}}</md-checkbox>`;
                elem.innerHTML = `</label></label><input type="checkbox">
                                  <label>{{wordText}}</label>`;
                console.log(elem);
                this.$('#checkboxes').appendChild(elem);
                /*const li = this.renderer.createElement("li");
                const  text = this.renderer.createText("{{solutionTest.inputOne}}");

                this.renderer.appendChild(li,text);
                this.renderer.appendChild(this.el.nativeElement, li);*/

           }
       } );
   }

   $(selector)
   {
       return document.querySelector(selector);
   }

}
