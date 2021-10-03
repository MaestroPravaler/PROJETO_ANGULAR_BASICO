import { Component, OnInit } from '@angular/core';

import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  
  constructor(public instrumentService: InstrumentService) {}

  ngOnInit(): void {}

  getInstrumentColor(instrument: any) {
    return instrument.value > 1000 ? 'green' : 'red';
  }
}
