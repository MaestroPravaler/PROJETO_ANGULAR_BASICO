import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Violino';
  instrument : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addInstrument(){
    this.instrument.push(this.name);
    console.log(this.instrument);
  }

}
