import { Component, OnInit } from '@angular/core';

import instruments from '../instrument';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  instruments = instruments;

  constructor() { }

  ngOnInit(): void {
  }

}
