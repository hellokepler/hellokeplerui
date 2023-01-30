import { Component, OnInit, Input, SimpleChange, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-timeentry',
  templateUrl: './timeentry.component.html',
  styleUrls: ['./timeentry.component.scss'],

})
export class TimeentryComponent implements OnInit {
  inputColumns = ['date', 'training', 'work', 'pto', 'totalHours', 'holiday'];
  inputData = [];

 

  @Input() listOfDate: Array<any>;
  displayColumns: string[];
  displayData: any[];
  showTable: boolean;

  datasource = this.createDataSource();

  constructor(private _formBuilder: FormBuilder){}

  form = new FormGroup({
     date: new FormControl()
  });

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getValue(value){
    console.log(value);
  }
  ngOnInit() {
 
  
    // this.createDataSource();
    // // this.displayColumns = ['date'].concat(this.inputData.map(x => x.date.toString()));
    // // this.displayData = this.inputColumns.map(x => this.formatInputRow(x));

    // console.log(this.displayColumns);
    // console.log(this.displayData);

    // this.showTable = true;
    //  console.log(this.form);
  }

  // formatInputRow(row) {
  //   const output = {};
  //   output[0] = row;
  //   for (let i = 0; i < this.inputData.length; ++i) {
     
  //     output[this.inputData[i].date] = this.inputData[i][row];
  //   }

  //   return output;
  // }

  createDataSource() {
  
    this.listOfDate.forEach(data => {
      this.inputData.push({ date: data, training: 8, work: 1, pto: 8,  holiday: 8 ,totalHours: 8})

    })

  }


  getFormContolData(value){
    console.log(value);

    return value;
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





