import { Injectable } from '@angular/core';

export interface Instrument {
  name: string;
  value: number;
  discount: number;
}

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  instruments: Instrument[] = [];

  constructor() {}

  addInstrument(instrument: Instrument) {
    instrument.discount = instrument.value <= 1000 ? 0 : instrument.discount;
    this.instruments.push(instrument);
  }
}
