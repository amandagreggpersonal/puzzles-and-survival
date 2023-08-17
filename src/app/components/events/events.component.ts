import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Events } from './events';
import moment from 'moment-timezone';
import { WeekOneService } from './tip-data/week-one.service';
import { WeekTwoService } from './tip-data/week-two.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class EventsComponent {
    public displayedColumns: string[] = ['startDate', 'name', 'heroReward'];
    public expandedElement: Events | null = null;

    private get _week1EventData() {
        return this._weekOneService.week1EventData;
    }
    public week1EventData: MatTableDataSource<any> = new MatTableDataSource(this._week1EventData);

    private get _week2EventData() {
        return this._weekTwoService.week2EventData;
    }
    public week2EventData: MatTableDataSource<any> = new MatTableDataSource(this._week2EventData);

    @ViewChild(MatSort) public sort: MatSort = new MatSort;

    constructor(
        private _weekOneService: WeekOneService,
        private _weekTwoService: WeekTwoService,

    ) {
        this._createTipData();
    }

    public applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.week1EventData.filter = filterValue.trim().toLowerCase();
        this.week2EventData.filter = filterValue.trim().toLowerCase();
    }

    public getDisplayName(column: string): string {
        switch (column) {
            case 'name':
                return 'Event Name';
            case 'heroReward':
                return 'Hero Reward';
            case 'startDate':
                return 'Day Event Starts';
            default:
                return '';
        }
    }

    public getDate(date: Date): string {
        const personalDate = moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[personalDate.weekday()];
    }

    private _createTipData(): void {
        this.week1EventData = new MatTableDataSource(this._week1EventData);
        this.week2EventData = new MatTableDataSource(this._week2EventData);

    }


}
