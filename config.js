import { getName } from './modules/getName.js';

export const config = {
  user: getName(),
  currentPath: process.env['HOME'],
};
