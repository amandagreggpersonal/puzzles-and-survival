import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { EventsComponent } from './components/events/events.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: '', component: EventScheduleComponent },
  { path: 'event-schedule', component: EventScheduleComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
