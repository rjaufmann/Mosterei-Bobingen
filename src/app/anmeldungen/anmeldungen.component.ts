import {Component, OnInit} from '@angular/core';
import * as data from 'resources/anmeldungen-orig.json';
import {Abfuellung_Enum, Mitglied_Enum, SaftArt_Enum, Anmeldung} from "./anmeldung";
import {environment} from "../../environments/environment";


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
  id : number;
  beginn : string;
  finish : string;
  userid : number;
  statusMessage : string;
  mitglied : string;
  fullName : string;
  email : string;
  phone : string;
  mobil : string;
  saftart : string;
  abfuellung : string;
  bemerkung : string;
  angemeldeteMenge : string;

}

function decodeAnmeldung(json: AnmeldungJSON): Anmeldung {
  let anmeldung = Object.create(Anmeldung.prototype);
  return Object.assign(anmeldung, json, {
    beginn: new Date(json.beginn),
    finish: new Date(json.finish)
  });
}

function getAnmeldungen() {
  if (!environment.local) {

      return ajax.get<UserJSON[]>('/users').then(data => {
        return data.data.map(decodeUser);
      });
    }
  }
  if (environment.local) {
    let anmeldungJSONArray = loadDataFromLocal();
    console.log(anmeldungJSONArray);
/*
    return loadDataFromLocal().then(data => {
      return data.map(decodeAnmeldung);
    });
*/
  }
  else
}

function loadDataFromLocal(): Promise<AnmeldungJSON[]> {
  return JSON.parse(data, Anmeldung.reviver);
}


