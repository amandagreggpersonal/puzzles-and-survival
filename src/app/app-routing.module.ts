import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventScheduleComponent } from './components/event-data/event-schedule/event-schedule.component';
import { EventsComponent } from './components/event-data/events/events.component';
import { EventsAndTipsComponent } from './components/events-and-tips/events-and-tips.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {
    path: '', component: EventsAndTipsComponent,
    children: [
      { path: '', component: EventScheduleComponent },
      { path: 'event-schedule', component: EventScheduleComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'events', component: EventsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
