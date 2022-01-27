import { EntityMetadataMap } from '@ngrx/data';
import { Hero } from './Hero.model';

const entityMetadata: EntityMetadataMap = {
  Hero: {
    selectId: (Heroes: Hero) => Heroes.id,
  },
  Villain: {},
};

const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
