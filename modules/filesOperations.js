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

export const cp = (value) => {
  try {
    const arrayPath = [];
    const fileName = path.basename(value.split(' ')[0]);

    arrayPath.push(checkPath(value.split(' ')[0]));
    arrayPath.push(checkPath(value.split(' ')[1]));

    Promise.all(arrayPath)
      .then((allPath) => {
        const correctPath = path.join(allPath[1], fileName);
        fs.promises.cp(allPath[0], correctPath).then(() => {
          console.log(`Copied: ${fileName} to ${value.split(' ')[1]}`);
          console.log(`You are currently in ${config.currentPath}`);
        });
      })
      .catch(() => console.log('Operation failed'));
  } catch (e) {
    console.log('Operation failed');
  }
};

export const mv = (value) => {
  try {
    const arrayPath = [];
    const fileName = path.basename(value.split(' ')[0]);

    arrayPath.push(checkPath(value.split(' ')[0]));
    arrayPath.push(checkPath(value.split(' ')[1]));

    Promise.all(arrayPath)
      .then((allPath) => {
        const correctPath = path.join(allPath[1], fileName);
        fs.promises.rename(allPath[0], correctPath).then(() => {
          console.log(`Moved: ${fileName} to ${value.split(' ')[1]}`);
          console.log(`You are currently in ${config.currentPath}`);
        });
      })
      .catch(() => console.log('Operation failed'));
  } catch (e) {
    console.log('Operation failed');
  }
};
