import { Component, OnInit, Injectable, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class TwoWeekDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) { }

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -1);
      const end = this._dateAdapter.addCalendarDays(date, 5);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: TwoWeekDayRangeSelectionStrategy,
    },
  ],
})
export class TimesheetComponent implements OnInit {

  @ViewChild('picker', { static: false }) datePicker: MatDatepicker<Date>;

  listOfDates: Array<any>;

  currentDate:Date;
 

  @Output() newItemEvent = new EventEmitter<string>();
  changeData: boolean = false;
  constructor( private dataPipe :DatePipe) { }

  range = new FormGroup({
    start: new FormControl(this.getFirstAndLastHalfOfWeek()),
    end: new FormControl(new Date())
  });

  startDate = new Date((new Date().getTime() - 3888000000));
  displayedColumns: string[] = ['Name', 'Pay Period', 'Over Time', 'PTO Balance', 'Holiday Balance', 'Hrs In Pay Period', 'Type'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    console.log(this.datePicker);
    this.getListOfDates();
  }



  getFirstAndLastHalfOfWeek(){
    let date = new Date();
    let newDate = new Date();
    if(date.getDate() <= 15){
      newDate.setDate(newDate.getDate() - date.getDate()+1);
    }
   
    if(date.getDate() >= 15 || date.getDate() <=31){
      newDate.setDate(newDate.getDate() - date.getDate()+1);
    }

  
  
    return newDate;
  }




  prevousTwoWeek() {

  }
  nextTwoWeek() {    
    this.getListOfDates();
  }


  /**
   * 
   */
  getListOfDates() {
    this.listOfDates = [];
    let dates = this.getDates(this.range['value']['start'], this.range['value']['end']);
    dates.forEach(data => {
      this.listOfDates.push(this.dataPipe.transform(data, "yyyy-MM-dd"));
    })

    console.log(this.listOfDates);
    return this.listOfDates;

  }

  getDates(startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
      const date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    while (currentDate <= endDate) {
      dates.push(currentDate)
      currentDate = addDays.call(currentDate, 1)
    }
    return dates;
  }

}


export interface GenaralDateInfo {
  name: string;
  payPeriod: string;
  overTime: number;
  ptobalance: number;
  holidayBalance: number;
  hrsInPayPeriod: number;
  type: string
}

const ELEMENT_DATA: GenaralDateInfo[] = [
  {
    name: "Shivam Aashirbadam", payPeriod: 'Pick A data', overTime: 10, ptobalance: 20,
    holidayBalance: 20, hrsInPayPeriod: 20, type: "w2"
  }
];


