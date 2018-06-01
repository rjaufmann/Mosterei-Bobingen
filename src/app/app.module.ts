import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AnmeldungenComponent } from './anmeldungen/anmeldungen.component';
import {MessageService} from "./message.service";
import { RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnmeldungDetailComponent } from './anmeldung-detail/anmeldung-detail.component';

const appRoutes: Routes = [
  { path: 'anmeldung/:id',
    component: AnmeldungDetailComponent
  },
  {
    path: 'anmeldungen',
    component: AnmeldungenComponent,
    data: { title: 'Anmeldungen Mosterei Bobingen' }
  },
  { path: '',
    redirectTo: '/anmeldungen',
    pathMatch: 'full'
  },
  { path: 'index.html',
    redirectTo: '/anmeldungen',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AnmeldungenComponent,
    PageNotFoundComponent,
    AnmeldungDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }

