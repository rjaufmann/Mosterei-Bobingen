import {Component, OnInit} from '@angular/core';
import {AnmeldungService} from "./anmeldung.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss'],
  providers: [AnmeldungService]
})

export class AnmeldungenComponent implements OnInit {

  public message: string;
  public values: any[];

  constructor(private _anmeldungeService: AnmeldungService) {
    this.message = 'Hello from HomeComponent constructor';
  }

  ngOnInit() {
    this._anmeldungeService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.values = data,
        error => () => {
          console.error(error);
        },
        () => {
          console.log('done loading anmeldungen')
        });
  }

}
