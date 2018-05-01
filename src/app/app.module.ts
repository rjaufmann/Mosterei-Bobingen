import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CardAnmeldungenHeaderComponent } from './card-anmeldungen-header/card-anmeldungen-header.component';
import { AnmeldungenComponent } from './anmeldungen/anmeldungen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CardAnmeldungenHeaderComponent,
    AnmeldungenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent, CardAnmeldungenHeaderComponent]
})
export class AppModule { }
