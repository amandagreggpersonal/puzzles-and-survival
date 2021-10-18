import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Events, EVENT_DATA } from './events';

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
export class EventsComponent implements AfterViewInit {
  public displayedColumns: string[] = ['name', 'heroReward', 'dateStart'];
  public eventData: MatTableDataSource<any> = new MatTableDataSource(EVENT_DATA);
  public expandedElement: Events | null = null;

  @ViewChild(MatSort) public sort: MatSort = new MatSort;

  constructor() { }

  public ngAfterViewInit(): void {
    this.eventData.sort = this.sort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.eventData.filter = filterValue.trim().toLowerCase();
  }

  public getDisplayName(column: string): string {
    switch (column) {
      case 'name':
        return 'Event Name';
      case 'heroReward':
        return 'Hero Reward';
      case 'dateStart':
        return 'Date Event Starts';
      default:
        return '';
    }
  }

}
