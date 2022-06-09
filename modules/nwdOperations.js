import { config } from '../config.js';
import fs from 'fs/promises';
import path from 'path';
import { checkPath } from '../functions/checkPath.js';
import { checkIsFile } from '../functions/checkIsFile.js';

export const ls = () => {
  fs.readdir(config.currentPath)
    .then((files) => {
      console.log(files);
    })
    .catch(() => console.log('Operation failed'));
  console.log(`You are currently in ${config.currentPath}`);
};

export const cd = (value) => {
  checkPath(value)
    .then((currentPath) => {
      if (!checkIsFile(currentPath)) {
        config.currentPath = currentPath;
      }
      console.log(`You are currently in ${config.currentPath}`);
    })
    .catch(() => console.log('Operation failed'));
};

export const up = () => {
  const newPath = config.currentPath.split(path.sep).slice(0, -1);
  if (newPath.length >= 1) {
    config.currentPath = newPath.join(path.sep);
  }
  console.log(`You are currently in ${config.currentPath}`);
};

export const nwdOperations = (value) => {
  switch (true) {
    case 'ls' === value.substring(0, 2):
      ls();
      break;
    case 'cd' === value.substring(0, 2):
      cd(value.substring(3));
      break;
    case 'up' === value.substring(0, 2):
      up();
      break;
    default:
      console.error('Invalid input');
  }
};
