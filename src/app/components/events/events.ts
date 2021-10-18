export interface Events {
    name: string;
    daysRepeated: number; // repeats how many days in a row
    repeatsEveryXWeeks: number; // repeats ever 1 or every 2 weeks
    repeats: string; // daily, weekly
    dateStart: string; // this probably needs changing currently using MY timezone, starting is at 5pm at reset
    heroReward: string;
    tips: string;
    calculateThings: boolean;
    dailyTip: boolean;
}

export const EVENT_DATA: Events[] = [
    // week 1
    { name: 'Ace: Resource Gatherer', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-17', heroReward: '', tips: 'Send Troops to Mill before reset so they arrive back at base just after reset. Pit Farm should end right after reset or recall at reset if under 2 hours, prevents being stolen', calculateThings: false, dailyTip: false },
    { name: 'Nanoweapon', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 1, dateStart: '2021-10-17', heroReward: '', tips: 'Need appox 75 x Nanoboxes and ability to Insta complete 5 weapons to get low rank.', calculateThings: true, dailyTip: false },
    { name: 'Lucky Draw', daysRepeated: 3, repeats: 'daily', repeatsEveryXWeeks: 2, dateStart: '2021-10-17', heroReward: '', tips: 'Coins do not carry over to next event, use them!', calculateThings: false, dailyTip: false },
    { name: 'Ace: Build and Research', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-18', heroReward: '', tips: 'Use your speed ups', calculateThings: false, dailyTip: false },
    { name: 'Ace: Zombies and Lairs', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-19', heroReward: '', tips: 'Let Stam/AP cap before reset. REQ approx: 2x Stam Cans +3 AP replenish to max event. If VIP 10 stay in Balance for fast Stam Replenish', calculateThings: false, dailyTip: false },
    { name: 'Ace: Solder Trainer', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-20', heroReward: '', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Ace: Supreme Power', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-21', heroReward: '', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Cube Upgrade', daysRepeated: 15, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-20', heroReward: 'Hero choice IV', tips: 'Get cube material by purchasing or opening cube boxes', calculateThings: false, dailyTip: false },
    { name: 'Break Loose: Might', daysRepeated: 15, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-20', heroReward: 'Leah', tips: 'Improve your might, today is your day to upgrade gear, chips, modules and cubes. If going for Global Ace high Rank open ZL boxes. (Just enough to stay in current Total Rank). If completing only, save ZL boxes for next event.', calculateThings: false, dailyTip: false },
    { name: 'Break Loose: Speed Up', daysRepeated: 15, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-21', heroReward: 'Leah', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Break Loose: Consume Diamonds', daysRepeated: 15, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-21', heroReward: '', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Ace: Ultimate Trial', daysRepeated: 2, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-22', heroReward: '', tips: '', calculateThings: false, dailyTip: true },
    { name: 'Break Loose: Improve Might/Speed Ups', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-22', heroReward: 'Leah', tips: '', calculateThings: false, dailyTip: true },
    { name: 'Break Loose: Improve Build', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-22', heroReward: 'Leah', tips: '', calculateThings: false, dailyTip: true },

    // week 2
    { name: 'Personal Activity', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-24', heroReward: '', tips: 'Do daily quests. If you normally complete most of the daily quests then this is a good source of extra rewards. You will need to buy a box though to get all of the phases.', calculateThings: false, dailyTip: false },
    { name: 'Hero Upgrade', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-24', heroReward: 'Hero choice II', tips: 'You need to gain hero frags to get points and earn rewards in this event. If you have saved Recruit coins for Noah\'/s Tavern or Hero Choice cards then you can use them to complete the phases.Opening any ARENA boxes now will help too. To rank top 100: Approx 200, 200, 100 in Noahs plus 60 x5* cards (mixes work) (Best to skip one week and do it the following time.)', calculateThings: true, dailyTip: false },
    { name: 'New Development', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-25', heroReward: 'Hero choice II', tips: 'Building, research, training Speedup or Marks of Glory only. RSS spots/Camps best - need 834hrs of speed ups to complete - NOT LOOKING FOR MIGHT UPGRADE', calculateThings: false, dailyTip: false },
    { name: 'Gather Supplies', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-25', heroReward: '', tips: 'use your gather speed up (can buy from alliance shop), send max gatherers out and then hit Swift Gather for a big boost. If VIP 10 stay in gathering speed up spec.', calculateThings: false, dailyTip: false },
    { name: 'Gear Refiner', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-25', heroReward: '', tips: 'Not worth spending Diamonds on this event unless you have ALOT... 42k diamonds to complete. Must purchase Gear Refiner from Diamond Shop.', calculateThings: false, dailyTip: false },
    { name: 'Gear Upgrade', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-26', heroReward: '', tips: 'Get Gear Enhance/Promote or Refiners. Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes - If 50 Joy coins roll on this day. Reward is Refiners', calculateThings: false, dailyTip: false },
    { name: 'Joy 777', daysRepeated: 3, repeats: 'daily', repeatsEveryXWeeks: 2, dateStart: '2021-10-26', heroReward: '', tips: 'Roll if you have 50 on this day. If you don\'/t have 50, save them.', calculateThings: false, dailyTip: false },
    { name: 'Nova & Module', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-26', heroReward: 'Hero choice II', tips: 'Save ZL boxes for this day if you are going for choice upgrade.', calculateThings: false, dailyTip: false },
    { name: 'Army Expansion', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-27', heroReward: '', tips: 'Set highest tier troops to finish before reset. Then Promote or Train max tier.', calculateThings: false, dailyTip: false },
    { name: 'Break Loose: Chip and Cube', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-28', heroReward: 'Leah', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Chip Upgrade', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-29', heroReward: '', tips: 'Do Ultimate Challenge/Open Enhcance/Promote Choice Boxes', calculateThings: false, dailyTip: false },
    { name: 'Break Loose: Improve Might', daysRepeated: 1, repeats: 'weekly', repeatsEveryXWeeks: 2, dateStart: '2021-10-31', heroReward: '', tips: '', calculateThings: false, dailyTip: false },
    { name: 'Diamond Expert', daysRepeated: 2, repeats: 'daily', repeatsEveryXWeeks: 2, dateStart: '2021-10-31', heroReward: 'Hero choice II', tips: '', calculateThings: false, dailyTip: false },

    // both weeks, fri/sat
    { name: 'Strike First', daysRepeated: 2, repeats: 'weekly', repeatsEveryXWeeks: 1, dateStart: '2021-10-22', heroReward: 'Ephraim', tips: 'If VIP 10 stay in Balance for fast Stamina Replenish', calculateThings: false, dailyTip: true },

]


export interface TipOfTheDay {
    dayOfWeek: string; // based off MY day, starting at 5pm at reset
    repeatsInHowManyDays: number;
    startDate: string;
    tip: string;
}

export const EVENT_TIP_DATA: TipOfTheDay[] = [
    { dayOfWeek: 'Friday', repeatsInHowManyDays: 14, startDate: '2021-10-22', tip: 'Set Max lvl troops to finish before reset, same with buildings and research. Upgrading from T1> Current gives more points per hour then lvling max tier.' }
]