import { Injectable } from '@angular/core';
import moment from 'moment';
import { Events } from '../events';

@Injectable({
  providedIn: 'root'
})
export class WeekOneService {
  public week1EventData: Events[] = [
    {
      name: 'Ace: Resource Gatherer',
      startDate: new Date(moment.utc('2021-10-18 00:00:01').format()),
      heroReward: '',
      tips: 'Send Troops to Mill before reset so they arrive back at base just after reset. ' +
        'Pit Farm should end right after reset or recall at reset if under 2 hours, prevents being stolen.',
      calculateThings: false
    },
    {
      name: 'Nanoweapon',
      startDate: new Date(moment.utc('2021-10-18 00:00:01').format()),
      heroReward: '',
      tips: 'Save your crafting materials if you have a bunch of weapon instant completes for this day. ' +
        'If you have a large surplus of crafting materials you can craft throughout the week. ' +
        'Need appox 75 x Nanoboxes and ability to instant complete 5 weapons to get low rank.',
      calculateThings: true
    },
    {
      name: 'Lucky Draw',
      startDate: new Date(moment.utc('2021-10-18 00:00:01').format()),
      heroReward: '',
      tips: 'Coins do not carry over to next event, use them!',
      calculateThings: false
    },

    {
      name: 'Ace: Build and Research',
      startDate: new Date(moment.utc('2021-10-19 00:00:01').format()),
      heroReward: '',
      tips: 'Use your speed ups',
      calculateThings: false
    },
    {
      name: 'Lucky Draw',
      startDate: new Date(moment.utc('2021-10-19 00:00:00').format()),
      heroReward: '',
      tips: 'Coins do not carry over to next event, use them!',
      calculateThings: false
    },

    {
      name: 'Ace: Zombies and Lairs',
      startDate: new Date(moment.utc('2021-10-20 00:00:01').format()),
      heroReward: '',
      tips: 'Let Stam/AP cap before reset. REQ approx: 2x Stam Cans +3 AP replenish to max event. If VIP 10 stay in Balance for fast Stam Replenish',
      calculateThings: false
    },
    {
      name: 'Lucky Draw',
      startDate: new Date(moment.utc('2021-10-20 00:00:00').format()),
      heroReward: '',
      tips: 'Coins do not carry over to next event, use them!',
      calculateThings: false
    },

    {
      name: 'Ace: Solder Trainer',
      startDate: new Date(moment.utc('2021-10-21 00:00:01').format()),
      heroReward: '',
      tips: '',
      calculateThings: false
    },
    {
      name: 'Cube Upgrade',
      startDate: new Date(moment.utc('2021-10-21 00:00:01').format()),
      heroReward: 'Hero choice IV',
      tips: 'Get cube material by purchasing or opening cube boxes',
      calculateThings: false
    },
    {
      name: 'Ace: Supreme Power',
      startDate: new Date(moment.utc('2021-10-22 00:00:01').format()),
      heroReward: '',
      tips: 'Improve might, get enhancement materials, get gear refiner. ' +
        'Improve might: by improving gear, chip, modules or cube might (enhance and promote all). Can purchase 1* gear, module and chip from Diamond Shop. ' +
        'Get enhancement materials: Get 3, 4 or 5 star Enhance materials. Get promoter I or II. Enhancement materials doesn/\'t give points for promoting cubes (but improve might above does). ' +
        'Get gear refiner from Diamond Shop.',
      calculateThings: false
    },
    {
      name: 'Ace: Ultimate Trial 1',
      startDate: new Date(moment.utc('2021-10-23 00:00:01').format()),
      heroReward: '',
      tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.',
      calculateThings: false
    },
    {
      name: 'Strike First',
      startDate: new Date(moment.utc('2021-10-23 00:00:01').format()),
      heroReward: 'Ephraim',
      tips: 'If VIP 10 stay in Balance for fast Stamina Replenish. Rewards diamonds and speed-ups.',
      calculateThings: false
    },

    {
      name: 'Ace: Ultimate Trial 2',
      startDate: new Date(moment.utc('2021-10-24 00:00:01').format()),
      heroReward: '',
      tips: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.',
      calculateThings: false
    },
    {
      name: 'Strike First',
      startDate: new Date(moment.utc('2021-10-24 00:00:01').format()),
      heroReward: 'Ephraim',
      tips: 'If VIP 10 stay in Balance for fast Stamina Replenish. Rewards diamonds and speed-ups.',
      calculateThings: false
    },
  ];

  constructor() { }
}
