import { osOperations } from './modules/osOperations.js';
import { nwdOperations } from './modules/nwdOperations.js';
import { hashOperations } from './modules/hashOperations.js';

export const controller = (value) => {
  switch (true) {
    case 'os' === value.substring(0, 2):
      osOperations(value.substring(2).trim());
      break;
    case 'up' === value.substring(0, 2):
    case 'cd ' === value.substring(0, 3):
    case 'ls' === value.substring(0, 2):
      nwdOperations(value);
      break;
    case 'hash ' === value.substring(0, 5):
      hashOperations(value.substring(5));
      break;
    default:
      console.error('Invalid input');
  }
};
