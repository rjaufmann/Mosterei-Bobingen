import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CardAnmeldungenHeaderComponent } from './card-anmeldungen-header/card-anmeldungen-header.component';
import { AnmeldungenComponent } from './anmeldungen/anmeldungen.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CardAnmeldungenHeaderComponent,
    AnmeldungenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent, CardAnmeldungenHeaderComponent]
})
export class AppModule { }
