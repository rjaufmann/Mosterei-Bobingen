import {Component, OnInit} from '@angular/core';
import {AnmeldungService} from "./anmeldung.service";
import {Anmeldung} from "./anmeldung";


@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss'],
  providers: [AnmeldungService]
})

export class AnmeldungenComponent implements OnInit {

  public message: string;
  public anmeldungenGeladen: boolean;
  public anmeldungen: Anmeldung[];

  constructor(private _anmeldungeService: AnmeldungService) {
    this.message = 'Hello from HomeComponent constructor';
    this.anmeldungenGeladen = false;
  }

  ngOnInit() {
    this._anmeldungeService
      .getAllAnmeldungen()
      .subscribe((data: Anmeldung[]) => this.anmeldungen = data,
        error => () => {
          console.log('keine Daten');
          console.error(error);
        },
        () => {
          if (this.anmeldungen.length > 0) {
            console.log('laden Anmeldungen erfolgreich');
            this.anmeldungenGeladen = true;
          }
          console.log('done loading anmeldungen');
        });
  }

}
