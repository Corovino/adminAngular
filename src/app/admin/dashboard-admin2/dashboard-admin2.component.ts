import {Component, NgModule, OnInit} from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-dashboard-admin2',
  templateUrl: './dashboard-admin2.component.html',
  styleUrls: ['./dashboard-admin2.component.css']
})
export class DashboardAdmin2Component implements OnInit {

  distribution = [
    {value: '1', viewValue: 'Gender'},
    {value: '2', viewValue: 'Age Ranges'},
    {value: '3', viewValue: 'Drug of Choice'},
    {value: '4', viewValue: 'Employment Status'},
    {value: '5', viewValue: 'Level of Education'},
    {value: '6', viewValue: 'Test performed'}
  ];

  // Datepicker
  public dateInputs: any = [
    {
      start: moment().subtract(4, 'month'),
      end: moment()
    }
  ];
  // Doughnut
  public doughnutChartLabels: string[] = ['Males', 'Females'];
  public doughnutChartData: number[] = [8, 17, 8, 20, 19, 22];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartColors: Array<any> = [
    {
      backgroundColor: [ '#33691E', '#72D1FF', '#00ABFE', '#006B9E', '#B2FF59', '#64DD17']
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
