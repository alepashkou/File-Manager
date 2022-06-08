import { getName } from './functions/getName.js';

export const config = {
  user: getName(),
  currentPath: process.env['HOME'],
};
