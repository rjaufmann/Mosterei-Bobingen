import {Component, OnInit} from '@angular/core';
import {Anmeldung} from "./anmeldung";
import {DataProviderService} from "../share/data-provider.service";


@Component({
  selector: 'app-anmeldungen',
  templateUrl: './anmeldungen.component.html',
  styleUrls: ['./anmeldungen.component.scss'],
  providers: [DataProviderService]
})

export class AnmeldungenComponent implements OnInit {

  public message: string;
  public anmeldungenGeladen: boolean;
  public anmeldungen: Anmeldung[];
  selectedDate: Date = new Date();

  constructor(private _dataProviderService: DataProviderService) {
    this.message = 'Hello from AnmeldungenComponent constructor';
    this.anmeldungenGeladen = false;
  }

  ngOnInit(): void {
  }

  getAllAnmeldungen() {
    this.selectedDate.setFullYear(2017,7,26);

    this._dataProviderService
      .getAllAnmeldungen(this.selectedDate)
      .subscribe((data: Anmeldung[]) => {
          this.anmeldungen = data;
          },
        error => () => {
          console.log('keine Daten');
          console.error(error);
        },
        () => {
          console.log('AnmeldungenComponent.ngOnInit() - laden Anmeldungen erfolgreich');
          if (this.anmeldungen.length > 0) {
            console.log('AnmeldungenComponent.ngOnInit() - anmeldungen.length > 0');
            this.anmeldungenGeladen = true;
          }
          console.log('done loading anmeldungen');
        });
  }


}
