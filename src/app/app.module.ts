import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (cs: ConfigService) => () => cs.load(), deps: [ConfigService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
