import { theShire, buckland, HobbitSettlement } from './another-module.js';

const statement = () => `${theShire.name} was founded ${
    buckland.founding - theShire.founding
  } years before ${buckland.name}.`;

export { theShire, statement };
