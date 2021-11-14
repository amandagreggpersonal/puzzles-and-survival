import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';

export interface TimezoneChaos {
  name: string;
  preferredTime: Date;
  utcTime: string;
  location: string;
}

const PLAYER_DATA = [
  // enter preferredTime in 24-hour format
  { name: 'eere', preferredTime: '2021-11-23 17:00:01', utcTime: '', location: 'America/Los_Angeles' },
  { name: 'Nas-zilla', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'Europe/Brussels' },
  { name: 'GusFring', preferredTime: '2021-11-23 22:00:01', utcTime: '', location: 'America/Chicago' },
  { name: 'Geek Slayer', preferredTime: '2021-11-23 05:00:01', utcTime: '', location: 'America/Chicago' },
  { name: 'GusFring', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'America/Chicago' },
  { name: 'Recycletron', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'America/Chicago' },
  { name: 'titlicker', preferredTime: '2021-11-23 19:00:01', utcTime: '', location: 'America/Chicago' },
  { name: 'Micheal', preferredTime: '', utcTime: '', location: 'America/Chicago' },
  { name: 'Judly', preferredTime: '', utcTime: '', location: 'America/Chicago' },
  { name: 'Pete 50', preferredTime: '', utcTime: '', location: 'America/Chicago' },
  { name: 'Theatrics', preferredTime: '', utcTime: '', location: 'America/Chicago' },
  { name: 'Reach4theSkyler', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'theAlmightyJ5', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'KewlDude', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'Demonic_Robot', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'Azz kicker', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'Huffman7', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'zombie fker', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'babs of babylon', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'stomp08', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'Gohan', preferredTime: '2021-11-23 19:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'andrw_44', preferredTime: '2021-11-23 17:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'cw73', preferredTime: '2021-11-23 08:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Dae\'/s', preferredTime: '2021-11-23 17:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Sammieb420', preferredTime: '', utcTime: '', location: 'America/Detroit' },
  { name: 'testdriver4264', preferredTime: '2021-11-23 16:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'pizzyp', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'gimpPAC', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'ssjb snipergoku', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'r1dd3r', preferredTime: '2021-11-23 19:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'chachaslide', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Spadowskis Clubhouse', preferredTime: '2021-11-23 20:10:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Anjelbae95', preferredTime: '2021-11-23 20:30:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Redwing88', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'testdriver4264', preferredTime: '2021-11-23 21:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Taraleigh', preferredTime: '', utcTime: '', location: 'Canada/Eastern' },
  { name: 'Kento', preferredTime: '', utcTime: '', location: 'Europe/Berlin' },
  { name: 'gimpsalot', preferredTime: '2021-11-23 08:00:01', utcTime: '', location: 'US/Mountain' },
  { name: 'gimpsalot', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'US/Mountain' },
  { name: 'meakerz', preferredTime: '', utcTime: '', location: 'US/Mountain' },
  { name: 'redginger489', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'US/Mountain' },
  { name: 'Sombra Nomada', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'America/Argentina/Buenos_Aires' },
  { name: 'Wildwarm', preferredTime: '2021-11-24 01:00:01', utcTime: '', location: 'Europe/Lisbon' },
  { name: 'Wildwarm', preferredTime: '2021-11-23 18:00:01', utcTime: '', location: 'Europe/Lisbon' },
  { name: 'aMonkeyStoleMyMoney', preferredTime: '2021-11-23 10:00:01', utcTime: '', location: 'America/Los_Angeles' },
  { name: 'aMonkeyStoleMyMoney', preferredTime: '2021-11-23 16:00:01', utcTime: '', location: 'America/Los_Angeles' },
  { name: 'Bva', preferredTime: '2021-11-23 21:00:01', utcTime: '', location: 'Africa/Johannesburg' },
  { name: 'I am Groot!!', preferredTime: '2021-11-23 19:00:01', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'kittypaige', preferredTime: '', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'kc32', preferredTime: '', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'jaxonxxx', preferredTime: '', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'NoClueJustClick', preferredTime: '2021-11-23 16:00:01', utcTime: '', location: 'America/Detroit' },
  { name: 'Ramnusia', preferredTime: '2021-11-23 22:00:01', utcTime: '', location: '' },
  { name: 'slo) captain pappys', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'BigS (miracle)', preferredTime: '2021-11-23 20:00:01', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'Caths', preferredTime: '', utcTime: '', location: 'Etc/Greenwich' },
  { name: 'tazenian', preferredTime: '', utcTime: '', location: 'Etc/Greenwich' },
];


@Component({
  selector: 'app-time-zone-chaos',
  templateUrl: './time-zone-chaos.component.html',
  styleUrls: ['./time-zone-chaos.component.scss']
})


export class TimeZoneChaosComponent implements AfterViewInit {
  public displayedColumns: string[] = ['name', 'preferredTime', 'utcTime', 'location'];

  public playerData: MatTableDataSource<any> = new MatTableDataSource(this.populateUTCTime(PLAYER_DATA));

  @ViewChild(MatSort) public sort: MatSort = new MatSort;

  constructor() { }

  public ngAfterViewInit(): void {
    this.playerData.sort = this.sort;
  }

  public populateUTCTime(dataSource: any[]): any[] {
    return dataSource.map((row: any) => ({
      ...row,
      utcTime: this.getUTCTime(row.preferredTime, row.location)
    }));
  }

  public getUTCTime(date: string, userTimezone: string): string {
    if (date && userTimezone) {
      return moment.tz(date, "YYYY-MM-DD HH:mm", userTimezone).utc().format('ddd hh:00A');
    }
    else {
      return 'Anytime or unknown';
    }
  }

  public getPersonalTime(date: string, userTimezone: string): string {
    if (date && userTimezone) {
      return moment.tz(date, "YYYY-MM-DD HH:mm", userTimezone).format('ddd hh:00A');
    } else {
      return 'Anytime or unknown';
    }
  }
}
