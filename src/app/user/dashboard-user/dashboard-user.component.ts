import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
  // Doughnut
  public doughnutChartLabels: string[] = ['Males', 'Females'];
  public doughnutChartData: number[] = [350, 100];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartColors: Array<any> = [
    { // Blue
      backgroundColor: '#0085C6',
      borderColor: '#0085C6',
      pointBackgroundColor: '#0085C6',
      pointBorderColor: '#0085C6',
      pointHoverBackgroundColor: '#0085C6',
      pointHoverBorderColor: '#0085C6'
    },
    { // green
      backgroundColor: '#64DD17',
      borderColor: '#64DD17',
      pointBackgroundColor: '#64DD17',
      pointBorderColor: '#64DD17',
      pointHoverBackgroundColor: '#64DD17',
      pointHoverBorderColor: '#64DD17'
    }
  ];
  ngOnInit() {
  }

}
