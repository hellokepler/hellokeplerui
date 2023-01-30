import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-timesheetentry',
  templateUrl: './timesheetentry.component.html',
  styleUrls: ['./timesheetentry.component.scss']
})
export class TimesheetentryComponent implements OnInit {

  displayedColumns: string[] = ['date', 'training', 'work', 'pto', 'holiday', 'totalHours'];
  dataSource;
  inputData = [];
  @Input() listOfDate: Array<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listOfDate);
    this.createDataSource();


  }

  createDataSource() {

    console.log(this.listOfDate);
    this.listOfDate.forEach(data => {
      this.inputData.push({ date: data, training: 8, work: 1, pto: 8, holiday: 8, totalHours: 8 })

    })

    this.dataSource = this.inputData;

  }


}


export interface workDone {
  date: string;
  training: number;
  work: number
  pto: number;
  holiday: number;
  totalHours: number
}

