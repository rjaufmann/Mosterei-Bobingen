import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-card-anmeldungen-header',
  templateUrl: './card-anmeldungen-header.component.html',
  styleUrls: ['./card-anmeldungen-header.component.scss']
})
export class CardAnmeldungenHeaderComponent implements OnInit {

  protected selectedDate : Date;
  protected showDate : String;

  constructor() {
    this.selectedDate = new Date(Date.now());
    this.showDate = this.selectedDate.toLocaleDateString(
      "de-DE",
      { year: 'numeric', month: '2-digit', day: '2-digit'
      })
  }

  ngOnInit() {
  }


}


