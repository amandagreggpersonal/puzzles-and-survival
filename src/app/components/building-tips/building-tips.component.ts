import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MiscTips, MISC_TIP_DATA } from './misc-tip-data';

@Component({
    selector: 'app-building-tips',
    templateUrl: './building-tips.component.html',
    styleUrls: ['./building-tips.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class BuildingTipsComponent {
    public displayedColumns: string[] = ['name'];
    public tipData: MatTableDataSource<any> = new MatTableDataSource(MISC_TIP_DATA);
    public expandedElement: MiscTips | null = null;

    constructor() { }


}
