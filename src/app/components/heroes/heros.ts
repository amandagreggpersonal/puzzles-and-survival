export interface Heros {
  name: string;
  starRating: number;
  color: string;
  type: string;
  troopSkill1: string;
  troopSkill2: string;
  troopSkill3: string;
  ecoLevel: string;
  fighterLevel: string;
  shooterLevel: string;
  riderLevel: string;
}

export const HERO_DATA: Heros[] = [
  { name: "Agent X", starRating: 5, color: "Purple", type: "Economy", troopSkill1: "Gather March Speed", troopSkill2: "Healing Steel Cost", troopSkill3: "Rally Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Atropos", starRating: 5, color: "Purple", type: "Fighter", troopSkill1: "Raid HP", troopSkill2: "Raid DEF", troopSkill3: "Raid ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Chia-hao", starRating: 5, color: "Blue", type: "Economy", troopSkill1: "Infirmary Cap", troopSkill2: "Heal Steel Cost", troopSkill3: "Troop Defense (Passive)", ecoLevel: "", fighterLevel: "131", shooterLevel: "131", riderLevel: "131" },
  { name: "Ephriam", starRating: 5, color: "Blue", type: "Shooter", troopSkill1: "Shooter HP", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "131+", riderLevel: "" },
  { name: "Eve", starRating: 5, color: "Purple", type: "Economy", troopSkill1: "Gathering Speed", troopSkill2: "Healing Speed", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Fox", starRating: 5, color: "Blue", type: "Rider", troopSkill1: "Rider HP", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "131+" },
  { name: "Ironclaw", starRating: 5, color: "Yellow", type: "Economy", troopSkill1: "Research Speed", troopSkill2: "Training Speed", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Lady M", starRating: 5, color: "Yellow", type: "Economy", troopSkill1: "Gathering Speed", troopSkill2: "Rally ATK", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Leah", starRating: 5, color: "Red", type: "Economy", troopSkill1: "Healing Speed", troopSkill2: "Heal Gas Cost", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Lee", starRating: 5, color: "Yellow", type: "Economy", troopSkill1: "RSS Protection buff", troopSkill2: "Reinf March Speed", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Levina", starRating: 5, color: "Blue", type: "Rider", troopSkill1: "Fighter HP (Passive)", troopSkill2: "Rider ATK (Passive)", troopSkill3: "Shooter ATK (Passive)", ecoLevel: "", fighterLevel: "31", shooterLevel: "131", riderLevel: "71" },
  { name: "Mantis", starRating: 5, color: "Yellow", type: "Economy", troopSkill1: "Upkeep down", troopSkill2: "Healing Speed", troopSkill3: "Infirmary Cap", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Marlowe", starRating: 5, color: "Purple", type: "Rider", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Mars", starRating: 5, color: "Green", type: "Rider", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "McCarty", starRating: 5, color: "Red", type: "Economy", troopSkill1: "Training Speed", troopSkill2: "Stam Cost Reduction", troopSkill3: "Train Cost Reduction", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Meyers", starRating: 5, color: "Yellow", type: "Fighter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Nam Hayul", starRating: 5, color: "Green", type: "Shooter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Obsidian", starRating: 5, color: "Green", type: "Rider", troopSkill1: "Rider HP", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "131+" },
  { name: "Phoenix", starRating: 5, color: "Red", type: "Shooter", troopSkill1: "Shooter HP", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "131+", riderLevel: "" },
  { name: "Requiem", starRating: 5, color: "Red", type: "Shooter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Samuel", starRating: 5, color: "Green", type: "Fighter", troopSkill1: "Protected Resources", troopSkill2: "Gas Output", troopSkill3: "Troop HP (Passive)", ecoLevel: "", fighterLevel: "131", shooterLevel: "131", riderLevel: "131" },
  { name: "Scarlett", starRating: 5, color: "Red", type: "Economy", troopSkill1: "Free Speedup", troopSkill2: "Build Speed", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Tomoyo", starRating: 5, color: "Purple", type: "Fighter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Ulrik", starRating: 5, color: "Green", type: "Fighter", troopSkill1: "Fighter HP", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "", fighterLevel: "131+", shooterLevel: "", riderLevel: "" },
  { name: "Zephr", starRating: 5, color: "Blue", type: "Fighter", troopSkill1: "Fighter HP", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "", fighterLevel: "131+", shooterLevel: "", riderLevel: "" },
  { name: "Chae Seoyun", starRating: 4, color: "Blue", type: "Fighter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Devana", starRating: 4, color: "Red", type: "Fighter", troopSkill1: "Troop HP", troopSkill2: "Troop DEF", troopSkill3: "Troop ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Dom", starRating: 4, color: "Yellow", type: "Rider", troopSkill1: "Steel Output", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Dr J", starRating: 4, color: "Purple", type: "Economy", troopSkill1: "Build Speed", troopSkill2: "Gas Output", troopSkill3: "Rally Size", ecoLevel: "71", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Griffin", starRating: 4, color: "Yellow", type: "Shooter", troopSkill1: "Wood Output", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "31", fighterLevel: "", shooterLevel: "131", riderLevel: "" },
  { name: "Hartwell", starRating: 4, color: "Green", type: "Shooter", troopSkill1: "Shooter HP", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Otto", starRating: 4, color: "Blue", type: "Economy", troopSkill1: "Commander XP Gain", troopSkill2: "Healing Speed", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Reyn", starRating: 4, color: "Red", type: "Fighter", troopSkill1: "Rider HP", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "131" },
  { name: "Sanguine", starRating: 4, color: "Blue", type: "Fighter", troopSkill1: "Food output", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "1", fighterLevel: "131", shooterLevel: "", riderLevel: "" },
  { name: "Seo-yun", starRating: 4, color: "Green", type: "Fighter", troopSkill1: "Fighter HP", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "", fighterLevel: "131", shooterLevel: "", riderLevel: "" },
  { name: "Varvara", starRating: 4, color: "Purple", type: "Economy", troopSkill1: "Research Speed", troopSkill2: "Antiserum Output", troopSkill3: "Troop Size", ecoLevel: "131", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Anahita", starRating: 3, color: "Purple", type: "Economy", troopSkill1: "Free Speedup", troopSkill2: "Build Steel Cost", troopSkill3: "Build Gas Cost", ecoLevel: "71", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Barbie", starRating: 3, color: "Green", type: "Fighter", troopSkill1: "Food Gather Speed", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "1", fighterLevel: "71", shooterLevel: "", riderLevel: "" },
  { name: "Bard", starRating: 3, color: "Green", type: "Shooter", troopSkill1: "Wood Gather Speed", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Chester", starRating: 3, color: "Red", type: "Economy", troopSkill1: "Training Cap", troopSkill2: "Research Steel Cost", troopSkill3: "Research Gas Cost", ecoLevel: "71", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Doc Grey", starRating: 3, color: "Purple", type: "Rider", troopSkill1: "Steel Gathering Speed", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "71" },
  { name: "Flint", starRating: 3, color: "Blue", type: "Economy", troopSkill1: "Gathering March Speed", troopSkill2: "Gathering Speed", troopSkill3: "Troop Load", ecoLevel: "71", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Malcolm", starRating: 3, color: "Yellow", type: "Shooter", troopSkill1: "Shooter HP", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "71", riderLevel: "" },
  { name: "Marshall", starRating: 3, color: "Red", type: "Economy", troopSkill1: "Gas Gathering Speed", troopSkill2: "Hunt March Speed", troopSkill3: "Hunt ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Noct", starRating: 3, color: "Blue", type: "Fighter", troopSkill1: "Fighter HP", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "", fighterLevel: "71", shooterLevel: "", riderLevel: "" },
  { name: "Percival", starRating: 3, color: "Yellow", type: "Rider", troopSkill1: "Rider HP", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "71" },
  { name: "Amber", starRating: 2, color: "Red", type: "Shooter", troopSkill1: "Wood Output", troopSkill2: "Shooter DEF", troopSkill3: "Shooter ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Kento", starRating: 2, color: "Yellow", type: "Economy", troopSkill1: "Hunt March Speed", troopSkill2: "Research Food Cost", troopSkill3: "Research Wood Cost", ecoLevel: "31", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Maverick", starRating: 2, color: "Blue", type: "Rider", troopSkill1: "Steel Output", troopSkill2: "Rider DEF", troopSkill3: "Rider ATK", ecoLevel: "1", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Queenie", starRating: 2, color: "Green", type: "Fighter", troopSkill1: "Food Output", troopSkill2: "Fighter DEF", troopSkill3: "Fighter ATK", ecoLevel: "", fighterLevel: "", shooterLevel: "", riderLevel: "" },
  { name: "Xavis", starRating: 2, color: "Purple", type: "Economy", troopSkill1: "Gas Output", troopSkill2: "Lower Build Food Cost", troopSkill3: "Lower Build Wood Cost", ecoLevel: "31", fighterLevel: "", shooterLevel: "", riderLevel: "" },
];
