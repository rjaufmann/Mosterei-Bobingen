import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from "rxjs/operators";

import {Abfuellung_Enum, Anmeldung, SaftArt_Enum} from "../anmeldungen/anmeldung";
import {DataProviderService} from "../share/data-provider.service";

@Component({
  selector: 'app-anmeldung-detail',
  templateUrl: './anmeldung-detail.component.html',
  styleUrls: ['./anmeldung-detail.component.scss'],
  providers: [DataProviderService]
})
export class AnmeldungDetailComponent implements OnInit {

  private _anmeldung: Anmeldung;
  private _loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataProviderService: DataProviderService
  ) {
  }

  ngOnInit() {
    console.log("AnmeldungDetailComponent.ngOnInit() entered.")
    let anmeldung$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._dataProviderService.selectAnmeldungDetail(parseInt(params.get('id'))))
    );
    console.log("Observable: " + anmeldung$);
    anmeldung$.subscribe(
      (data: Anmeldung) => {
        this._loading = true;

        this._anmeldung = data;

        if (this._anmeldung != null) {
          console.log('laden Anmeldung erfolgreich');
          console.log("Anmeldung-ID: " + this._anmeldung);
          this._loading = false;
          if (this._anmeldung.saftart.includes(SaftArt_Enum.SM)) {
            this._anmeldung.suessmost = true;
          }
          if (this._anmeldung.saftart.includes(SaftArt_Enum.P)) {
            this._anmeldung.pressen = true;
          }
          if (this._anmeldung.saftart.includes(SaftArt_Enum.PS)) {
            this._anmeldung.pressen_separiern = true;
          }
          if (this._anmeldung.abfuellung.includes(Abfuellung_Enum.BAGINBOX)) {
            this._anmeldung.bagInBox = true;
          }
          if (this._anmeldung.abfuellung.includes(Abfuellung_Enum.FLASCHEN)) {
            this._anmeldung.flaschen = true;
          }
        }
      },
      error => () => {
        console.log('keine Daten');
        console.error(error);
      },
      () => {
        if (this._anmeldung != null) {
          console.log('laden Anmeldung erfolgreich');
          if (this._anmeldung.saftart.includes(SaftArt_Enum.SM)) {
            this._anmeldung.suessmost = true;
          }
          if (this._anmeldung.saftart.includes(SaftArt_Enum.P)) {
            this._anmeldung.pressen = true;
          }
          if (this._anmeldung.saftart.includes(SaftArt_Enum.PS)) {
            this._anmeldung.pressen_separiern = true;
          }
          console.log("Anmeldung-ID: " + this._anmeldung);
        }
        console.log('done loading anmeldungen');
      });
  }


}
