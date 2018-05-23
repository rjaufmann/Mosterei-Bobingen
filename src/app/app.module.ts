import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CardAnmeldungenHeaderComponent } from './card-anmeldungen-header/card-anmeldungen-header.component';
import { AnmeldungenComponent } from './anmeldungen/anmeldungen.component';
import {MessageService} from "./message.service";


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
  providers: [MessageService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent, CardAnmeldungenHeaderComponent]
})
export class AppModule { }
