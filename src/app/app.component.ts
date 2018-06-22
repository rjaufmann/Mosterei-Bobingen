import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./share/data-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataProviderService]
})

export class AppComponent implements OnInit{

  constructor(private _dataServiceProvider: DataProviderService) {

  }
  ngOnInit(): void {
  }
}
