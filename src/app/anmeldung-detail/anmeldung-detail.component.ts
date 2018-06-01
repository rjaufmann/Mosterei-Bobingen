import {Component, HostBinding, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from "rxjs/Observable";
import {switchMap} from "rxjs/operators";

import {Anmeldung, SaftArt_Enum} from "../anmeldungen/anmeldung";

import { slideInDownAnimation } from '../animations';
import {AnmeldungService} from "../anmeldungen/anmeldung.service";

@Component({
  selector: 'app-anmeldung-detail',
  templateUrl: './anmeldung-detail.component.html',
  styleUrls: ['./anmeldung-detail.component.scss'],
  providers: [AnmeldungService]
})
export class AnmeldungDetailComponent implements OnInit {

  public anmeldung: Anmeldung;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AnmeldungService
  ) {}

  ngOnInit() {
    let anmeldung$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getAnmeldung(parseInt(params.get('id'))))
    );
    console.log("Observable: " + anmeldung$);
    anmeldung$.subscribe((data: Anmeldung) => this.anmeldung = data,
      error => () => {
        console.log('keine Daten');
        console.error(error);
      },
      () => {
        if (this.anmeldung != null) {
          console.log('laden Anmeldung erfolgreich');
          if (this.anmeldung.saftart.includes(SaftArt_Enum.SM)) {
            this.anmeldung.suessmost = true;
          }
          if (this.anmeldung.saftart.includes(SaftArt_Enum.P)) {
            this.anmeldung.pressen = true;
          }
          if (this.anmeldung.saftart.includes(SaftArt_Enum.PS)) {
            this.anmeldung.pressen_separiern = true;
          }
          console.log("Anmeldung-ID: " + this.anmeldung);
        }
        console.log('done loading anmeldungen');
      });
  }

}
