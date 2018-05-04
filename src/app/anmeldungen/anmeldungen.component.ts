import {Component, OnInit} from '@angular/core';
import * as data from 'resources/anmeldungen.json';
import {Abfuellung_Enum, Mitglied_Enum, SaftArt_Enum, Anmeldung} from "./anmeldung";


@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss']
})

export class AnmeldungenComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    let Anmeldungen = getAnmeldungen();
    console.log(Anmeldungen);
  }
}

interface AnmeldungJSON {
  Mitglied : string;
  Beginn : string;
  Vollstaendiger_Name : string;
  Telefonnummer : string;
  Saftart : string;
  Abfuellung : string;
  Bemerkung : string;
  Mostmenge : string;

}

function decodeAnmeldung(json: AnmeldungJSON): Anmeldung {
  return {
    mitglied : Mitglied_Enum.J,
    beginn : json.Beginn ? new Date(json.Beginn) : null,
    vollstaendiger_Name : json.Vollstaendiger_Name,
    telefonnummer : json.Telefonnummer,
    saftart : SaftArt_Enum.SM,
    abfuellung : Abfuellung_Enum.BAGINBOX,
    bemerkung : json.Bemerkung,
    mostmenge : json.Mostmenge
  };
}

function getAnmeldungen(): Promise<Anmeldung[]> {
  return loadData().then(data => {
    return data.map(decodeAnmeldung);
  });
}

function loadData(): Promise<AnmeldungJSON[]> {
  return (<any>data);
}
