export interface Character {
  race: Race;
  background: Background;
  attributes: Attributes;
  skills: Skills;
}

export type Race = 'human' | 'elf' | 'dwarf' | 'halfling';

export type Background = 'military' | 'bourgeois' | 'wanderer' | 'urban';

export type Attributes = Record<string, number>;

export type Skills = string[];
