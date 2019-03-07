export const stageStats = [
{ stage: 'Pokémon Stadium 2',
  shortName: 'PS2',
  gamesPlayed: 428,
  setsPlayed: 360,
  gamesBanned: 29,
  setsBanned: 27,
  starter: true },
{ stage: 'Smashville',
  shortName: 'SV',
  gamesPlayed: 124,
  setsPlayed: 114,
  gamesBanned: 92,
  setsBanned: 90,
  starter: true },
{ stage: 'Battlefield',
  shortName: 'BF',
  gamesPlayed: 161,
  setsPlayed: 149,
  gamesBanned: 117,
  setsBanned: 116,
  starter: true },
{ stage: 'Final Destination',
  shortName: 'FD',
  gamesPlayed: 79,
  setsPlayed: 75,
  gamesBanned: 201,
  setsBanned: 187,
  starter: true },
{ stage: 'Lylat Cruise',
  shortName: 'Lylat',
  gamesPlayed: 37,
  setsPlayed: 37,
  gamesBanned: 172,
  setsBanned: 170,
  starter: false },
{ stage: 'Town And City',
  shortName: 'T&C',
  gamesPlayed: 139,
  setsPlayed: 135,
  gamesBanned: 44,
  setsBanned: 44,
  starter: true },
{ stage: "Yoshi's Island (Brawl)",
  shortName: 'Y.Island',
  gamesPlayed: 20,
  setsPlayed: 20,
  gamesBanned: 218,
  setsBanned: 210,
  starter: false },
{ stage: 'Kalos Pokémon League',
  shortName: 'Kalos',
  gamesPlayed: 64,
  setsPlayed: 62,
  gamesBanned: 140,
  setsBanned: 140,
  starter: false },
{ stage: "Yoshi's Story",
  shortName: 'Y.Story',
  gamesPlayed: 31,
  setsPlayed: 31,
  gamesBanned: 141,
  setsBanned: 135,
  starter: false },

];

export const banPairs = [
{ stageA: 'Pokémon Stadium 2',
  'Pokémon Stadium 2': 0,
  Smashville: 33,
  Battlefield: 55,
  'Final Destination': 77,
  'Lylat Cruise': 22,
  'Town And City': 55,
  "Yoshi's Island (Brawl)": 44,
  'Kalos Pokémon League': 11,
  "Yoshi's Story": 22 },
{ stageA: 'Smashville',
  'Pokémon Stadium 2': 33,
  Smashville: 0,
  Battlefield: 55,
  'Final Destination': 242,
  'Lylat Cruise': 110,
  'Town And City': 66,
  "Yoshi's Island (Brawl)": 341,
  'Kalos Pokémon League': 66,
  "Yoshi's Story": 99 },
{ stageA: 'Battlefield',
  'Pokémon Stadium 2': 55,
  Smashville: 55,
  Battlefield: 0,
  'Final Destination': 121,
  'Lylat Cruise': 209,
  'Town And City': 44,
  "Yoshi's Island (Brawl)": 198,
  'Kalos Pokémon League': 33,
  "Yoshi's Story": 572 },
{ stageA: 'Final Destination',
  'Pokémon Stadium 2': 77,
  Smashville: 242,
  Battlefield: 121,
  'Final Destination': 0,
  'Lylat Cruise': 286,
  'Town And City': 143,
  "Yoshi's Island (Brawl)": 429,
  'Kalos Pokémon League': 814,
  "Yoshi's Story": 99 },
{ stageA: 'Lylat Cruise',
  'Pokémon Stadium 2': 22,
  Smashville: 110,
  Battlefield: 209,
  'Final Destination': 286,
  'Lylat Cruise': 0,
  'Town And City': 66,
  "Yoshi's Island (Brawl)": 704,
  'Kalos Pokémon League': 220,
  "Yoshi's Story": 275 },
{ stageA: 'Town And City',
  'Pokémon Stadium 2': 55,
  Smashville: 66,
  Battlefield: 44,
  'Final Destination': 143,
  'Lylat Cruise': 66,
  'Town And City': 0,
  "Yoshi's Island (Brawl)": 33,
  'Kalos Pokémon League': 77,
  "Yoshi's Story": 0 },
{ stageA: "Yoshi's Island (Brawl)",
  'Pokémon Stadium 2': 44,
  Smashville: 341,
  Battlefield: 198,
  'Final Destination': 429,
  'Lylat Cruise': 704,
  'Town And City': 33,
  "Yoshi's Island (Brawl)": 0,
  'Kalos Pokémon League': 242,
  "Yoshi's Story": 407 },
{ stageA: 'Kalos Pokémon League',
  'Pokémon Stadium 2': 11,
  Smashville: 66,
  Battlefield: 33,
  'Final Destination': 814,
  'Lylat Cruise': 220,
  'Town And City': 77,
  "Yoshi's Island (Brawl)": 242,
  'Kalos Pokémon League': 0,
  "Yoshi's Story": 77 },
{ stageA: "Yoshi's Story",
  'Pokémon Stadium 2': 22,
  Smashville: 99,
  Battlefield: 572,
  'Final Destination': 99,
  'Lylat Cruise': 275,
  'Town And City': 0,
  "Yoshi's Island (Brawl)": 407,
  'Kalos Pokémon League': 77,
  "Yoshi's Story": 0 },

];

export const globalStats = 
{ totalGames: 1083,
  totalSets: 535,
  totalBans: 1154,
  setsWithBanRecorded: 466 };

export const stages = 
[ 'Pokémon Stadium 2',
  'Smashville',
  'Battlefield',
  'Final Destination',
  'Lylat Cruise',
  'Town And City',
  "Yoshi's Island (Brawl)",
  'Kalos Pokémon League',
  "Yoshi's Story" ];

export const shortNames = 
[ 'PS2',
  'SV',
  'BF',
  'FD',
  'Lylat',
  'T&C',
  'Y.Island',
  'Kalos',
  'Y.Story' ];