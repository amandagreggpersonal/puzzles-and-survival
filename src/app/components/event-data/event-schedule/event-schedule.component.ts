import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import moment from 'moment-timezone';
import { EventScheduleItems } from './event-schedule-items';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EventScheduleComponent {
  public displayedColumns: string[] = ['startDate', 'name'];
  public expandedElement: EventScheduleItems | null = null;

  private _week1Schedule: EventScheduleItems[] = [];
  public week1Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week1Schedule);

  private _week2Schedule: EventScheduleItems[] = [];
  public week2Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week2Schedule);

  @ViewChild(MatSort) public sort: MatSort = new MatSort;


  constructor() {
    this._createTipData();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.week1Schedule.filter = filterValue.trim().toLowerCase();
    this.week2Schedule.filter = filterValue.trim().toLowerCase();
  }

  public getDate(date: Date): string {
    console.log(date);
    const personalDate = moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log(personalDate.format('MMM DD hh:00A'))
    return personalDate.format('MMM DD hh:00A');
  }

  private _createTipData() {
    const week1StartDate = '2021-10-12';


    this._week1Schedule = [
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 00:00:00').format()) }
    ]
    this.week1Schedule = new MatTableDataSource(this._week1Schedule);

  }



}
