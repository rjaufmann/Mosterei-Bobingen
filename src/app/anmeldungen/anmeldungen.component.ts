import {Component, OnInit} from '@angular/core';
import {AnmeldungService} from "./anmeldung.service";
import {HttpClient} from "@angular/common/http";
import {Anmeldung} from "./anmeldung";


@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss'],
  providers: [AnmeldungService]
})

export class AnmeldungenComponent implements OnInit {

  public message: string;
  public anmeldungen: Anmeldung[];

  constructor(private _anmeldungeService: AnmeldungService) {
    this.message = 'Hello from HomeComponent constructor';
  }

  ngOnInit() {
    this._anmeldungeService
      .getAllAnmeldungen()
      .subscribe((data: Anmeldung[]) => this.anmeldungen = data,
        error => () => {
          console.error(error);
        },
        () => {
          console.log('done loading anmeldungen');
//          console.log('values: ' + this.anmeldungen.toString());
        });
  }

}
