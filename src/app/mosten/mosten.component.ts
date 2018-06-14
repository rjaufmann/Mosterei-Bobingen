import {Component, OnInit} from '@angular/core';
import {Anmeldung} from "../anmeldungen/anmeldung";
import {AnmeldungDetailComponent} from "../anmeldung-detail/anmeldung-detail.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DataProviderService} from "../share/data-provider.service";

@Component({
  selector: 'app-mosten',
  templateUrl: './mosten.component.html',
  styleUrls: ['./mosten.component.scss'],
  providers: [AnmeldungDetailComponent, DataProviderService]
})
export class MostenComponent implements OnInit {

  private anmeldung: Anmeldung;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataProviderService: DataProviderService) {

  }

  ngOnInit() {
    this._dataProviderService.getSelectedAnmeldung().subscribe(
      (data: Anmeldung) => {
      this.anmeldung = data;
    },
    error => () => {
      console.log('MostenComponent.ngOnInit() keine Daten');
      console.error(error);
    },
      () => {
        console.log('MostenComponent.ngOnInit() complete');
      }
    )
  }

  getKundeName() : String {
    return this.anmeldung.fullName;
  }



}
