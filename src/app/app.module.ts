import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {AnmeldungenComponent} from './anmeldungen/anmeldungen.component';
import {MessageService} from "./message.service";
import {RouterModule, Routes} from "@angular/router";
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AnmeldungDetailComponent} from './anmeldung-detail/anmeldung-detail.component';
import {MostenComponent} from './mosten/mosten.component';
import {DataProviderService} from "./share/data-provider.service";


const appRoutes: Routes = [
  {
    path: 'anmeldung',
    component: AnmeldungenComponent,
    data: {title: 'Anmeldungen Mosterei Bobingen'}
  },
  {
    path: 'anmeldung/:id',
    component: AnmeldungDetailComponent,
    data: {title: 'Anmeldung f&uuml;r Kunde:'},
  },
  {
    path: 'mosten',
    component: MostenComponent,
    data: {title: 'Abrechnung Kunde:'}
  },
  {
    path: '',
    redirectTo: '/anmeldung',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    redirectTo: '/anmeldung',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AnmeldungenComponent,
    AnmeldungDetailComponent,
    MostenComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    // other imports here
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [MessageService, DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _dataProviderService: DataProviderService) {
  }
}

