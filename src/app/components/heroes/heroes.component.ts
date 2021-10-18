import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Heroes, HERO_DATA } from './heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HeroesComponent implements AfterViewInit {
  public displayedColumns: string[] = ['name', 'type', 'ecoLevel', 'fighterLevel', 'shooterLevel', 'riderLevel'];
  public heroData: MatTableDataSource<any> = new MatTableDataSource(HERO_DATA);
  public expandedElement: Heroes | null = null;

  @ViewChild(MatSort) public sort: MatSort = new MatSort;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.heroData.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.heroData.filter = filterValue.trim().toLowerCase();

  }

}
