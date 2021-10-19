import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Events } from './events';
import moment from 'moment-timezone';

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

  private _week1EventData: Events[] = [];
  public week1EventData: MatTableDataSource<any> = new MatTableDataSource(this._week1EventData);

  private _week2EventData: Events[] = [];
  public week2EventData: MatTableDataSource<any> = new MatTableDataSource(this._week2EventData);

  @ViewChild(MatSort) public sort: MatSort = new MatSort;

  constructor() {
    this.createTipData();
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

  getDate(date: Date): string {
    const personalDate = moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    return personalDate.format("dddd");
  }

  createTipData(): void {
    this._week1EventData = [
      // week 1
      { name: 'Ace: Resource Gatherer', week: 1, startDate: new Date(moment.utc('2021-10-17 00:00:00').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Send Troops to Mill before reset so they arrive back at base just after reset. Pit Farm should end right after reset or recall at reset if under 2 hours, prevents being stolen', calculateThings: false },
      { name: 'Nanoweapon', week: 1, startDate: new Date(moment.utc('2021-10-17 00:00:00').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Need appox 75 x Nanoboxes and ability to Insta complete 5 weapons to get low rank.', calculateThings: true },
      { name: 'Lucky Draw', week: 1, startDate: new Date(moment.utc('2021-10-17 00:00:00').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Coins do not carry over to next event, use them!', calculateThings: false },
      { name: 'Ace: Build and Research', week: 1, startDate: new Date(moment.utc('2021-10-18 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Use your speed ups', calculateThings: false },
      { name: 'Ace: Zombies and Lairs', week: 1, startDate: new Date(moment.utc('2021-10-19 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Let Stam/AP cap before reset. REQ approx: 2x Stam Cans +3 AP replenish to max event. If VIP 10 stay in Balance for fast Stam Replenish', calculateThings: false },
      { name: 'Ace: Solder Trainer', week: 1, startDate: new Date(moment.utc('2021-10-20 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: '', calculateThings: false },
      { name: 'Ace: Supreme Power', week: 1, startDate: new Date(moment.utc('2021-10-21 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: '', calculateThings: false },
      { name: 'Cube Upgrade', week: 1, startDate: new Date(moment.utc('2021-10-20 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Hero choice IV', tips: 'Get cube material by purchasing or opening cube boxes', calculateThings: false },
      { name: 'Break Loose: Might', week: 1, startDate: new Date(moment.utc('2021-10-20 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Leah', tips: 'Improve your might, today is your day to upgrade gear, chips, modules and cubes. If going for Global Ace high Rank open Zombie Lair boxes. (Just enough to stay in current Total Rank). If completing day only, save Zombie Lair boxes for next event.', calculateThings: false },
      { name: 'Break Loose: Speed Up', week: 1, startDate: new Date(moment.utc('2021-10-21 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Leah', tips: '', calculateThings: false },
      { name: 'Break Loose: Consume Diamonds', week: 1, startDate: new Date(moment.utc('2021-10-21 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: '', calculateThings: false },
      { name: 'Ace: Ultimate Trial 1', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.', calculateThings: false },
      { name: 'Ace: Ultimate Trial 2', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.', calculateThings: false },
      { name: 'Break Loose: Improve Might/Speed Ups', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Leah', tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.', calculateThings: false },
      { name: 'Break Loose: Improve Build', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Leah', tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.', calculateThings: false },
      { name: 'Strike First', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Ephraim', tips: 'If VIP 10 stay in Balance for fast Stamina Replenish', calculateThings: false },
      { name: 'Strike First', week: 1, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Ephraim', tips: 'If VIP 10 stay in Balance for fast Stamina Replenish', calculateThings: false },
    ]
    this.week1EventData = new MatTableDataSource(this._week1EventData);

    this._week2EventData = [
      // week 2
      { name: 'Personal Activity', week: 2, startDate: new Date(moment.utc('2021-10-24 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Do daily quests. If you normally complete most of the daily quests then this is a good source of extra rewards. You will need to buy a box though to get all of the phases.', calculateThings: false },
      { name: 'Hero Upgrade', week: 2, startDate: new Date(moment.utc('2021-10-24 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Hero choice II', tips: 'You need to gain hero frags to get points and earn rewards in this event. If you have saved Recruit coins for Noah\'/s Tavern or Hero Choice cards then you can use them to complete the phases. Opening any ARENA boxes now will help too. To rank top 100: Approx 200, 200, 100 in Noahs plus 60 x5* cards (mixes work) (Best to skip one week and do it the following time.)', calculateThings: true },
      { name: 'New Development', week: 2, startDate: new Date(moment.utc('2021-10-25 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Hero choice II', tips: 'Building, research, training Speedup or Marks of Glory only. RSS spots/Camps best - need 834hrs of speed ups to complete - NOT LOOKING FOR MIGHT UPGRADE', calculateThings: false },
      { name: 'Gather Supplies', week: 2, startDate: new Date(moment.utc('2021-10-25 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'use your gather speed up (can buy from alliance shop), send max gatherers out and then hit Swift Gather for a big boost. If VIP 10 stay in gathering speed up spec.', calculateThings: false },
      { name: 'Gear Refiner', week: 2, startDate: new Date(moment.utc('2021-10-25 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Not worth spending Diamonds on this event unless you have ALOT... 42k diamonds to complete. Must purchase Gear Refiner from Diamond Shop.', calculateThings: false },
      { name: 'Gear Upgrade', week: 2, startDate: new Date(moment.utc('2021-10-26 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Get Gear Enhance/Promote or Refiners. Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes - If 50 Joy coins roll on this day. Reward is Refiners', calculateThings: false },
      { name: 'Joy 777', week: 2, startDate: new Date(moment.utc('2021-10-26 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Roll if you have 50 on this day. If you don\'/t have 50, save them.', calculateThings: false },
      { name: 'Nova & Module', week: 2, startDate: new Date(moment.utc('2021-10-26 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Hero choice II', tips: 'Save Zombie Lair boxes for this day if you are going for choice upgrade.', calculateThings: false },
      { name: 'Army Expansion', week: 2, startDate: new Date(moment.utc('2021-10-27 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Set highest tier troops to finish before reset. Then Promote or Train max tier.', calculateThings: false },
      { name: 'Break Loose: Chip and Cube', week: 2, startDate: new Date(moment.utc('2021-10-28 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Leah', tips: '', calculateThings: false },
      { name: 'Chip Upgrade', week: 2, startDate: new Date(moment.utc('2021-10-29 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: 'Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes', calculateThings: false },
      { name: 'Break Loose: Improve Might', week: 2, startDate: new Date(moment.utc('2021-10-31 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: '', tips: '', calculateThings: false },
      { name: 'Diamond Expert', week: 2, startDate: new Date(moment.utc('2021-10-31 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Hero choice II', tips: '', calculateThings: false },
      { name: 'Strike First', week: 2, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Ephraim', tips: 'If VIP 10 stay in Balance for fast Stamina Replenish', calculateThings: false },
      { name: 'Strike First', week: 2, startDate: new Date(moment.utc('2021-10-22 00:00:01').format('YYYY-MM-DD HH:mm:ss')), heroReward: 'Ephraim', tips: 'If VIP 10 stay in Balance for fast Stamina Replenish', calculateThings: false },

    ]
    this.week2EventData = new MatTableDataSource(this._week2EventData);

  }


}
