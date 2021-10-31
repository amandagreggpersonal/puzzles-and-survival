import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from './material/material.module';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { EventsComponent } from './components/events/events.component';
import { DoaComponent } from './components/events/doa/doa.component';
import { ReservoirWarComponent } from './components/events/reservoir-war/reservoir-war.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventScheduleComponent,
    HeroesComponent,
    EventsComponent,
    DoaComponent,
    ReservoirWarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
