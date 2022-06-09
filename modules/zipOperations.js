// import fs from 'fs';
// import path from 'path';
// import { config } from '../config.js';
// import zlib from 'zlib';

// export const compressZip = (value) => {
//   console.log(value);
//   const filePath = value.split(' ')[0];
//   const zipPath = value.split(' ')[1];
//   const input = fs.createReadStream(path.join(config.currentPath, filePath));
//   const output = fs.createWriteStream(path.join(config.currentPath, zipPath));
//   input.pipe(zlib.brotliCompress()).pipe(output);
// };
