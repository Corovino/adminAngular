import {Component, NgModule, OnInit} from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  distribution = [
    {value: '1', viewValue: 'Gender'},
    {value: '2', viewValue: 'Age Ranges'},
    {value: '3', viewValue: 'Drug of Choice'},
    {value: '4', viewValue: 'Employment Status'},
    {value: '5', viewValue: 'Level of Education'},
    {value: '6', viewValue: 'Test performed'}
  ];

  information = [
    {value: '1', viewValue: 'Patient'},
    {value: '2', viewValue: 'Evaluator'},
    {value: '3', viewValue: 'Office'}
  ];

  // Datepicker
  public dateInputs: any = [
    {
      start: moment().subtract(4, 'month'),
      end: moment()
    }
  ];
  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 70, 70, 66, 55, 40, 78],
    [28, 48, 40, 50, 60, 40, 35, 55],
    [18, 28, 30, 9, 40, 17, 30, 50],
  ];
  public lineChartLabels: Array<any> = ['01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02', '08/02'];
  public lineChartType: string = 'line';
  public lineChartColors: Array<any> = [
    { // Blue
      backgroundColor: 'transparent',
      borderColor: '#0085C6',
      pointBackgroundColor: '#0085C6',
      pointBorderColor: '#0085C6',
      pointHoverBackgroundColor: '#0085C6',
      pointHoverBorderColor: '#0085C6'
    },
    { // green
      backgroundColor: 'transparent',
      borderColor: '#64DD17',
      pointBackgroundColor: '#64DD17',
      pointBorderColor: '#64DD17',
      pointHoverBackgroundColor: '#64DD17',
      pointHoverBorderColor: '#64DD17'
    },
    { // black
      backgroundColor: 'transparent',
      borderColor: '#1C2326',
      pointBackgroundColor: '#1C2326',
      pointBorderColor: '#1C2326',
      pointHoverBackgroundColor: '#1C2326',
      pointHoverBorderColor: '#1C2326'
    }
  ];
  // Doughnut
  public doughnutChartLabels: string[] = ['Males', 'Females'];
  public doughnutChartData: number[] = [21, 79];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartColors: Array<any> = [
    {
      backgroundColor: [ '#64DD17', '#00ABFE' ]
    }
  ];
  public mainInput = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month')
  }

  public eventLog = '';
  constructor(private daterangepickerOptions: DaterangepickerConfig) {
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
  ngOnInit() {
  }

}
