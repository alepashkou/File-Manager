import { osOperations } from './modules/osOperations.js';
import { nwdOperations } from './modules/nwdOperations.js';
import { hashOperations } from './modules/hashOperations.js';
// import { compressZip } from './modules/zipOperations.js';
import { filesOperations } from './modules/filesOperations.js';

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
    case 'cat' === value.substring(0, 3):
      filesOperations('cat', value.substring(3));
      break;
    case 'add' === value.substring(0, 3):
      filesOperations('add', value.substring(3));
      break;
    case 'rn' === value.substring(0, 2):
      filesOperations('rn', value.substring(2).trim());
      break;
    case 'rm' === value.substring(0, 2):
      filesOperations('rm', value.substring(2).trim());
      break;
    // case 'compress' === value.substring(0, 8):
    //   compressZip(value.substring(8).trim());
    //   break;
    default:
      console.error('Invalid input');
  }
};
