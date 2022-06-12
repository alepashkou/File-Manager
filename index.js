import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { config } from './config.js';
import { controller } from './controller.js';

const rl = readline.createInterface({ input, output });

console.log(`👋 Welcome to the File Manager, ${config.user}!`);
console.log(`📁 You are currently in ${config.currentPath}`);

rl.on('line', (input) => {
  if (input.trim() === '.exit') {
    console.log(`💪 Thank you for using File Manager, ${config.user}!`);
    rl.close();
  } else {
    try {
      controller(input);
    } catch (e) {
      console.log('❌ Operation failed');
    }
  }
});

rl.on('SIGINT', () => {
  console.log(`💪 Thank you for using File Manager, ${config.user}!`);
  rl.close();
});
