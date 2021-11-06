import { Injectable } from '@angular/core';
import moment from 'moment';
import { Events } from '../events';

@Injectable({
  providedIn: 'root'
})
export class WeekTwoService {
  public week2EventData: Events[] = [
    {
      name: 'Personal Activity',
      startDate: new Date(moment.utc('2021-10-25 00:00:01').format()),
      heroReward: '',
      tips: 'Do daily quests. If you normally complete most of the daily quests then this is a good source of extra rewards. You will need to buy a box though to get all of the phases.',
      calculateThings: false
    },
    {
      name: 'Hero Upgrade',
      startDate: new Date(moment.utc('2021-10-25 00:00:01').format()),
      heroReward: 'Hero choice II',
      tips: 'You need to gain hero frags to get points and earn rewards in this event. If you have saved Recruit coins for Noah\'/s Tavern or Hero Choice cards then you can use them to complete the phases. Opening any ARENA boxes now will help too. To rank top 100: Approx 200, 200, 100 in Noahs plus 60 x5* cards (mixes work) (Best to skip one week and do it the following time.)',
      calculateThings: true
    },

    {
      name: 'New Development',
      startDate: new Date(moment.utc('2021-10-26 00:00:01').format()),
      heroReward: 'Hero choice II',
      tips: 'Building, research, training Speedup or Marks of Glory only. RSS spots/Camps best - need 834hrs of speed ups to complete - NOT LOOKING FOR MIGHT UPGRADE',
      calculateThings: false
    },
    {
      name: 'Gather Supplies',
      startDate: new Date(moment.utc('2021-10-26 00:00:01').format()),
      heroReward: '',
      tips: 'use your gather speed up (can buy from alliance shop), send max gatherers out and then hit Swift Gather for a big boost. If VIP 10 stay in gathering speed up spec.',
      calculateThings: false
    },
    {
      name: 'Gear Refiner',
      startDate: new Date(moment.utc('2021-10-26 00:00:01').format()),
      heroReward: '',
      tips: 'Not worth spending Diamonds on this event unless you have ALOT... 42k diamonds to complete. Must purchase Gear Refiner from Diamond Shop.',
      calculateThings: false
    },

    {
      name: 'Gear Upgrade',
      startDate: new Date(moment.utc('2021-10-27 00:00:01').format()),
      heroReward: '',
      tips: 'Get Gear Enhance/Promote or Refiners. Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes - If 50 Joy coins roll on this day. Reward is Refiners',
      calculateThings: false
    },
    {
      name: 'Joy 777',
      startDate: new Date(moment.utc('2021-10-27 00:00:01').format()),
      heroReward: '',
      tips: 'Roll if you have 50 on this day otherwise save them.',
      calculateThings: false
    },
    {
      name: 'Nova & Module',
      startDate: new Date(moment.utc('2021-10-28 00:00:01').format()),
      heroReward: 'Hero choice II',
      tips: 'Save Zombie Lair boxes for this day if you are going for hero choice II. ' +
        'Use Nova exp as soon as you get it, there is no event to use it. ' +
        'Use your nova econ and mil points from your bag or you can buy them in the Ruins or Pit exchang shop.',
      calculateThings: false
    },
    {
      name: 'Joy 777',
      startDate: new Date(moment.utc('2021-10-28 00:00:01').format()),
      heroReward: '',
      tips: 'Save on this day.',
      calculateThings: false
    },
    {
      name: 'Army Expansion',
      startDate: new Date(moment.utc('2021-10-28 00:00:01').format()),
      heroReward: '',
      tips: 'Set highest tier troops to finish before reset. Then Promote or Train max tier.',
      calculateThings: false
    },
    {
      name: 'Chip Upgrade',
      startDate: new Date(moment.utc('2021-10-29 00:00:01').format()),
      heroReward: '',
      tips: 'Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes',
      calculateThings: false
    },
    {
      name: 'Joy 777',
      startDate: new Date(moment.utc('2021-10-29 00:00:01').format()),
      heroReward: '',
      tips: 'Save on this day.',
      calculateThings: false
    },
    {
      name: 'Strike First',
      startDate: new Date(moment.utc('2021-10-30 00:00:01').format()),
      heroReward: 'Ephraim',
      tips: 'If VIP 10 stay in Balance for fast Stamina Replenish. Rewards diamonds and speed-ups.',
      calculateThings: false
    },
    {
      name: 'Strike First',
      startDate: new Date(moment.utc('2021-10-31 00:00:01').format()),
      heroReward: 'Ephraim',
      tips: 'If VIP 10 stay in Balance for fast Stamina Replenish. Rewards diamonds and speed-ups.',
      calculateThings: false
    },
  ];

  constructor() { }
}
