import {Component, NgModule, OnInit} from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment/moment';
import { MdDialog } from '@angular/material';
import { NewpatientComponent } from '../../../modal/newpatient/newpatient.component';


@Component({
  selector: 'app-patientlist-user',
  templateUrl: './patientlist-user.component.html',
  styleUrls: ['./patientlist-user.component.css']
})
export class PatientlistUserComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public lineChartColors: Array<any> = [
    { // Blue
      backgroundColor: 'rgba(0,133,198,0.2)',
      borderColor: '#0085C6',
      pointBackgroundColor: '#0085C6',
      pointBorderColor: '#0085C6',
      pointHoverBackgroundColor: '#0085C6',
      pointHoverBorderColor: '#0085C6'
    }
  ];

  // Datepicker
  public dateInputs: any = [
    {
      start: moment().subtract(4, 'month'),
      end: moment()
    }
  ];

  public mainInput = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month')
  }

  public eventLog = '';
  constructor(private daterangepickerOptions: DaterangepickerConfig, public dialog: MdDialog) {
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      ranges: {
        'Last Month': [moment().subtract(1, 'month'), moment()],
        'Last 3 Months': [moment().subtract(4, 'month'), moment()],
        'Last 6 Months': [moment().subtract(6, 'month'), moment()],
        'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  newpatient() {
    this.dialog.open(NewpatientComponent);
  }
  ngOnInit() {}

}
