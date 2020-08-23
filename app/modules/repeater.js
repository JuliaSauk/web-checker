import {CronJob} from 'cron';
import {takeSnapshot} from './snapshot';
import {notify} from './emailNotifier';

export const setupRepeater = () => {
  try {
    let previousSnapshot = null;

    const job = new CronJob('* * * * *', async () => {
      if (!previousSnapshot) {
        previousSnapshot = await takeSnapshot();
      } else {
        const updatedSnapshot = await takeSnapshot();
        if (Buffer.compare(previousSnapshot, updatedSnapshot) !== 0) await notify(updatedSnapshot);
        previousSnapshot = updatedSnapshot;
      }
    }, null, true, 'America/New_York');

    job.start();
  } catch (e) {
    console.log('Error[setupRepeater]: ', e);
  }
};