import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { EventsAndTipsComponent } from './components/events-and-tips/events-and-tips.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: '', component: EventsAndTipsComponent, children: [
    { path: 'event-schedule', component: EventScheduleComponent},
    { path: 'heroes', component: HeroesComponent}
  ]},
  { path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
