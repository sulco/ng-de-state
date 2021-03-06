export const skills = [
  'Arcanology',
  'Acrobatics',
  'Acting',
  'Agriculture',
  'Animal Husbandry',
  'Anthropology',
  'Aquiculture',
  'Archaeology',
  'Architecture',
  'Armorer',
  'Astrology',
  'Astronomy',
  'Beekeeping',
  'Begging',
  'Birdkeeping',
  'Blacksmithing',
  'Blind Fighting',
  'Body Building',
  'Botany',
  'Boxing',
  'Brawling',
  'Brewing',
  'Busking',
  'Calligraphy',
  'Candlemaking',
  'Camouflage',
  'Carpentry',
  'Cartography',
  'Carving',
  'Climbing',
  'Cobbling',
  'Composition',
  'Construction',
  'Cooking',
  'Copying',
  'Cosmetology',
  'Cryptography',
  'Dance',
  'Dentistry',
  'Dual Wield',
  'Disguise',
  'Drawing',
  'Driving',
  'Embalming',
  'Endurance',
  'Escape Artist',
  'Etching',
  'Falconry',
  'Farming',
  'Fishing',
  'Fletching/Bowing',
  'Flint Knapping',
  'Floristry',
  'Food Preservation',
  'Foraging',
  'Forgery',
  'Fortune Telling',
  'Gadgeteering',
  'Gambling',
  'Gardening',
  'Geology',
  'Glassworking',
  'Grooming',
  'Herbalism',
  'History',
  'Horsemanship',
  'Hunting',
  'Impersonation',
  'Intelligence',
  'Interrogation',
  'Intimidation',
  'Investigation',
  'Juggling',
  'Jewelcrafting',
  'Land Navigation',
  'Larceny',
  'Law',
  'Leadership',
  'Leatherworking',
  'Locksmithing',
  'Masonry',
  'Massage',
  'Mathematics',
  'Medicine',
  'Meditation',
  'Metalsmithing',
  'Mining',
  'Mountaineering',
  'Music Composition',
  'Negotiation',
  'Observation',
  'Organization',
  'Painting',
  'Papermaking',
  'Perfumery',
  'Persuasion',
  'Philosophy',
  'Philtering',
  'Physics',
  'Play Musical Instrument',
  'Poison',
  'Politics',
  'Pottery',
  'Rhetoric',
  'Riding',
  'Running',
  'Sailing',
  'Salvage',
  'Scavenge',
  'Scouting',
  'Sculpting',
  'Seduction',
  'Sewing',
  'Shipbuilding',
  'Singing',
  'Socialization',
  'Spelunking',
  'Stealth',
  'Storytelling',
  'Subterfuge',
  'Swimming',
  'Tactics',
  'Tattooing',
  'Teaching',
  'Tracking',
  'Trapping',
  'Unarmed Combat',
  'Undertaking',
  'Vinting',
  'Weaponsmithing',
  'Weapon Skills',
  'Weaving',
  'Wilderness Survival',
  'Wrestling',
  'Writing'
]
  .sort(() => Math.random() - 0.5)
  .slice(0, 10)
  .map(skill => ({
    name: skill,
    id: skill
      .toLowerCase()
      .split(' ')
      .join('_')
  }));
