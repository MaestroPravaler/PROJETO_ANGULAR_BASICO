import { Component, OnInit } from '@angular/core';

import instruments from '../instrument';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  value = 0;
  instruments = instruments;

  constructor() { }

  ngOnInit(): void {
  }

  addInstrument(){
    this.instruments.push({name: this.name, value: this.value});
    console.log(this.instruments);
  }

}
