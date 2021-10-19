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
  public show24HourFormat: boolean = true;

  private _week1Schedule: EventScheduleItems[] = [];
  public week1Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week1Schedule);

  private _week2Schedule: EventScheduleItems[] = [];
  public week2Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week2Schedule);

  private _week3Schedule: EventScheduleItems[] = [];
  public week3Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week3Schedule);

  @ViewChild(MatSort) public sort: MatSort = new MatSort;

  constructor() {
    this._createTipData();
  }

  public getDate(date: Date): string {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const personalDate = moment(date).tz(userTimezone);

    if (userTimezone.includes('America')) {
      return personalDate.format('MMM DD hh:00A');
    } else {
      return personalDate.format('ddd DD MMM HH:00');
    }
  }

  private _createTipData() {
    const week1StartDate = '2021-10-12';

    this._week1Schedule = [
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 23:00:01').subtract(1, "days").format()) },
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').format()) },
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 18:00:01').add(2, "days").format()) },
      { name: 'Reservoir War', startDate: new Date(moment.utc(week1StartDate + ' 15:00:01').add(3, "days").format()) },
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 18:00:01').add(3, "days").format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 18:00:01').add(3, "days").format()) }
    ]
    this.week1Schedule = new MatTableDataSource(this._week1Schedule);

    this._week2Schedule = [
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 23:00:01').add(7, "days").format()) },
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').add(7, "days").format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').add(7, "days").format()) },
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 13:00:01').add(9, "days").format()) },
      { name: 'Reservoir War', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(10, "days").format()) },
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 13:00:01').add(10, "days").format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 13:00:01').add(10, "days").format()) }
    ]
    this.week2Schedule = new MatTableDataSource(this._week2Schedule);

    this._week3Schedule = [
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').add(13, "days").format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 00:00:01').add(13, "days").format()) },
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 18:00:01').add(14, "days").format()) },
      { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 13:00:00').add(16, "days").format()) },
      { name: 'Reservoir War', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(17, "days").format()) },
      { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 13:00:01').add(17, "days").format()) },
      { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 13:00:01').add(17, "days").format()) }
    ]
    this.week3Schedule = new MatTableDataSource(this._week3Schedule);
  }

}
