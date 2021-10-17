import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HERO_DATA } from './heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements AfterViewInit {
  public displayedColumns: string[] = ['name', 'starRating', 'color', 'type', 'troopSkill1', 'troopSkill2', 'troopSkill3', 'ecoLevel', 'fighterLevel', 'shooterLevel', 'riderLevel'];
  public heroData: MatTableDataSource<any> = new MatTableDataSource(HERO_DATA);

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
