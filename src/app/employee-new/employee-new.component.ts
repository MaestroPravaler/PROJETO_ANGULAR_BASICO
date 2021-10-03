import { Component, OnInit } from '@angular/core';

import { Instrument, InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  instrument: Instrument = {
    name: '',
    value: 0,
    discount: 0,
  }

  constructor(private instrumentService: InstrumentService) { 

  }

  ngOnInit(): void {
  }

  addInstrument(){
    const copy = Object.assign({}, this.instrument)
    this.instrumentService.addInstrument(copy);
  }

}
