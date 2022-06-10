import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { checkPath } from '../functions/checkPath.js';
import { config } from '../config.js';

export const compress = (value) => {
  try {
    const arrayPath = [];
    const fileName = path.basename(value.split(' ')[0]);

    arrayPath.push(checkPath(value.split(' ')[0]));
    arrayPath.push(checkPath(value.split(' ')[1]));

    Promise.all(arrayPath)
      .then((allPath) => {
        const correctPath = path.join(allPath[0]);
        const fileNameZip = fileName + '.br';
        const zipPath = path.join(allPath[1], fileNameZip);

        const readStream = fs.createReadStream(correctPath);
        const writeStream = fs.createWriteStream(zipPath);
        const brotli = zlib.createBrotliCompress();

        const stream = readStream.pipe(brotli).pipe(writeStream);

        stream.on('finish', () => {
          console.log('✅ Done compressing');
          console.log(`📁 You are currently in ${config.currentPath}`);
        });
      })
      .catch(() => console.log('❌ Operation failed'));
  } catch (e) {
    console.log('❌ Operation failed');
  }
};

export const decompress = (value) => {
  try {
    const arrayPath = [];
    const fileName = path.basename(value.split(' ')[0]);

    arrayPath.push(checkPath(value.split(' ')[0]));
    arrayPath.push(checkPath(value.split(' ')[1]));

    Promise.all(arrayPath)
      .then((allPath) => {
        const correctPath = path.join(allPath[0]);
        const fileNameZip = fileName.replace('.br', '');
        const zipPath = path.join(allPath[1], fileNameZip);

        const readStream = fs.createReadStream(correctPath);
        const writeStream = fs.createWriteStream(zipPath);
        const brotli = zlib.createBrotliDecompress();

        const stream = readStream.pipe(brotli).pipe(writeStream);

        stream.on('finish', () => {
          console.log('✅ Done decompressing');
          console.log(`📁 You are currently in ${config.currentPath}`);
        });
      })
      .catch(() => console.log('❌ Operation failed'));
  } catch (e) {
    console.log('❌ Operation failed');
  }
};
