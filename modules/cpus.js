import os from 'os';
export const cpus = () => {
  try {
    const cpusAll = os.cpus();
    const cpus = cpusAll.map((cpu) => {
      return {
        model: cpu.model,
        speed: cpu.speed / 1000 + ' GHz',
      };
    });
    console.log('Number of CPU: ' + os.cpus().length);
    console.log(cpus);
  } catch (e) {
    console.log('❌ Operation failed');
  }
};
