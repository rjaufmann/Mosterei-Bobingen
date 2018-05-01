import { Component, OnInit } from '@angular/core';
import {DateFormatPipe} from "util/DateFormatPipe";

@Component({
  selector: 'app-card-anmeldungen-header',
  templateUrl: './card-anmeldungen-header.component.html',
  styleUrls: ['./card-anmeldungen-header.component.scss']
})
export class CardAnmeldungenHeaderComponent implements OnInit {

  selectedDate : Date;

  constructor() {
    this.selectedDate = new Date(Date.now());
  }

  ngOnInit() {
  }


}


