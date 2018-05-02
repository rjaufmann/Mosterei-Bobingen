import { Component, OnInit } from '@angular/core';
import * as data from 'ressources/anmeldungen.json';
import {Abfuellung_Enum, AnmeldungenModel, Mitglied_Enum, SaftArt_Enum} from "./anmeldungen.model";
const ANMELDUNGEN_CONST = (<any>data);

@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss']
})

export class AnmeldungenComponent implements OnInit {
  Anmeldungen : AnmeldungenModel[];

  constructor() {

  }

  ngOnInit() {
    console.log(ANMELDUNGEN_CONST);
    let keys = Object.keys(ANMELDUNGEN_CONST);
    console.log(keys.length);
    for(var item of keys) {
      console.log(item);
      let Anmeldung = new AnmeldungenModel(Mitglied_Enum.J, "07:00", "Thomas Mustermann",
        "0170 12345", SaftArt_Enum.SM, Abfuellung_Enum.BAGINBOX, "", "150 kg");
      this.Anmeldungen[0] = Anmeldung;
    }



  }

}
