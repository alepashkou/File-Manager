import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import { config } from '../config.js';
import { checkPath } from '../functions/checkPath.js';

export const hash = async (path) => {
  const buf = await fs.readFile(path);
  const hash = crypto.createHash('sha256');
  hash.update(buf);
  const hex = hash.digest('hex');
  console.log(hex);
  console.log(`You are currently in ${config.currentPath}`);
};

export const hashOperations = (value) => {
  checkPath(value)
    .then((currentPath) => {
      hash(path.join(currentPath));
      console.log('You are currently in ' + config.currentPath);
    })
    .catch((err) => console.log('Invalid input'));
};
