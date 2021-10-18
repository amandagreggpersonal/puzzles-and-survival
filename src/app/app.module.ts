import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsAndTipsComponent } from './components/events-and-tips/events-and-tips.component';
import { NavComponent } from './components/nav/nav.component';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from './material/material.module';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsAndTipsComponent,
    NavComponent,
    EventScheduleComponent,
    HeroesComponent,
    EventsComponent
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
