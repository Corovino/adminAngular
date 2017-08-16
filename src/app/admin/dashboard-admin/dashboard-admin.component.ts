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

  // Datepicker
  public dateInputs: any = [
    {
      start: moment().subtract(4, 'month'),
      end: moment()
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
