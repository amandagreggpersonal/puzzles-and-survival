import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

    public applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.heroData.filter = filterValue.trim().toLowerCase();
    }

    public getDisplayName(column: string): string {
        switch (column) {
            case 'name':
                return 'Name';
            case 'type':
                return 'Type';
            case 'ecoLevel':
                return 'Recommended Eco Level';
            case 'fighterLevel':
                return 'Level for Fighter Type'
            case 'shooterLevel':
                return 'Level for Shooter Type';
            case 'riderLevel':
                return 'Level for Rider Type';
            default:
                return '';
        }
    }

    public getClass(elementColor: string): void {
        console.log(elementColor);
        switch (elementColor) {
            case 'Blue':
                console.log(document.getElementById('elementDetail')?.classList);
                const elementToAddClassTo = document.getElementById('elementDetail');
                if (elementToAddClassTo) {
                    elementToAddClassTo.classList.add('blue-hero');
                }
                console.log(document.getElementById('elementDetail')?.classList);
                break;
            case 'Purple':
            // return 'purple-hero';
            case 'Yellow':
            // return 'yellow-hero';
            case 'Red':
            // return 'red-hero';
            case 'Green':
            // return 'green-hero';
            default:
                // return '';
                break;
        }
    }

}
