import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import moment from 'moment-timezone';


export interface EventSchedule {
    name: string;
    startDate: Date;
}

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
    public expandedElement: EventSchedule | null = null;
    public showDoa: boolean = false;

    private _week1Schedule: EventSchedule[] = [];
    public week1Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week1Schedule);

    private _week2Schedule: EventSchedule[] = [];
    public week2Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week2Schedule);

    private _week3Schedule: EventSchedule[] = [];
    public week3Schedule: MatTableDataSource<any> = new MatTableDataSource(this._week3Schedule);

    @ViewChild(MatSort) public sort: MatSort = new MatSort;

    constructor() {
        this._createEventData();
    }

    public getDate(date: Date): string {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const personalDate = moment(date).tz(userTimezone);

        if (userTimezone.includes('America')) {
            return personalDate.format('ddd MMM DD h:00A');
        } else {
            return personalDate.format('ddd DD MMM HH:00');
        }
    }

    private _createEventData() {
        const week1StartDate = '2021-11-16';

        this._week1Schedule = [
            { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').format()) },
            { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').format()) },
            { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').format()) },
            { name: 'Reservoir War', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').add(2, "days").format()) },
            { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').add(3, "days").format()) },
            { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(3, "days").format()) },
            { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(3, "days").format()) }
        ];
        this.valdiateSpeakerTrap(this._week1Schedule);
        this.week1Schedule = new MatTableDataSource(this._week1Schedule);

        this._week2Schedule = [
            { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').add(7, "days").format()) },
            { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').add(7, "days").format()) },
            { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(7, "days").format()) },
            { name: 'Reservoir War', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(9, "days").format()) },
            { name: 'DR/DOA', startDate: new Date(moment.utc(week1StartDate + ' 01:00:01').add(10, "days").format()) },
            { name: 'Speaker Trap', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(10, "days").format()) },
            { name: 'Alliance Party', startDate: new Date(moment.utc(week1StartDate + ' 19:00:01').add(10, "days").format()) }
        ];
        this.valdiateSpeakerTrap(this._week2Schedule);

        this.week2Schedule = new MatTableDataSource(this._week2Schedule);
    }

    private valdiateSpeakerTrap(weekData: EventSchedule[]) {
        let firstTime: moment.Moment = moment(null);
        let secondTime: moment.Moment = moment(null);

        for (let index = 0; index < weekData.length; index++) {
            const event = weekData[index];

            if (event.name === 'Speaker Trap') {

                if (index > 1) {
                    secondTime = moment(event.startDate);
                }

                if (index === 0) {
                    firstTime = moment(event.startDate);
                }

                if (firstTime.isValid() && secondTime.isValid()) {
                    const timeDifference = moment.duration(secondTime.diff(firstTime)).asHours();
                    if (timeDifference < 72) {
                        console.log('ERROR');
                    }
                }
            }

        }
    }

    public openDoa(): void {
        this.showDoa = !this.showDoa;
    }

}
