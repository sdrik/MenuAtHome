import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (cs: ConfigService) => () => cs.load(), deps: [ConfigService], multi: true },
    { provide: FirebaseOptionsToken, useFactory: (cs: ConfigService) => cs.firebase, deps: [ConfigService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
