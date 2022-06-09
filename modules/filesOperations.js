import path from 'path';
import fs from 'fs';
import { config } from '../config.js';
import { checkPath } from '../functions/checkPath.js';
import { checkIsFile } from '../functions/checkIsFile.js';

export const cat = (value) => {
  checkPath(value.trim())
    .then((currentPath) => {
      if (checkIsFile(currentPath)) {
        let data = [];
        const readStream = fs.createReadStream(path.join(currentPath));
        readStream.on('data', (chunk) => {
          data.push(chunk.toString());
        });
        readStream.on('end', () => {
          console.log(data.join(''));
          console.log(`You are currently in ${config.currentPath}`);
        });
      }
    })
    .catch(() => console.log('Operation failed'));
};

export const add = async (value) => {
  const filePath = path.join(config.currentPath, value.trim());
  const wStream = fs.createWriteStream(filePath);
  wStream.on('error', () => {
    console.log('Operation failed');
  });
  wStream.on('close', () => {
    console.log(`Created: ${value}`);
    console.log(`You are currently in ${config.currentPath}`);
  });
  wStream.close();
};

export const rn = (value) => {
  try {
    checkPath(value.split(' ')[0]).then((currentPath) => {
      const newFileName = path.join(config.currentPath, value.split(' ')[1]);
      fs.promises.rename(currentPath, newFileName).then(() => {
        console.log(
          `Renamed: ${value.split(' ')[0]} to ${value.split(' ')[1]}`
        );
        console.log(`You are currently in ${config.currentPath}`);
      });
    });
  } catch (e) {
    console.log('Operation failed');
  }
};
export const rm = (value) => {
  try {
    checkPath(value.trim()).then((currentPath) => {
      fs.promises.unlink(currentPath).then(() => {
        console.log(`Deleted: ${value}`);
        console.log(`You are currently in ${config.currentPath}`);
      });
    });
  } catch (e) {
    console.log('Operation failed');
  }
};
export const filesOperations = (command, value) => {
  switch (command) {
    case 'cat':
      cat(value);
      break;
    case 'add':
      add(value);
      break;
    case 'rn':
      rn(value);
      break;
    case 'rm':
      rm(value);
      break;
    default:
      console.error('Invalid input');
  }
};
