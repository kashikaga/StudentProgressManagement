const cron = require('node-cron');

// Example: Import your sync function
// const syncStudentProgress = require('../services/syncStudentProgress');

console.log('Sync job scheduler started.');

// Schedule the job to run every day at 2:00 AM
cron.schedule('0 2 * * *', async () => {
    try {
        console.log(`[${new Date().toISOString()}] Sync job started.`);
        // await syncStudentProgress();
        console.log(`[${new Date().toISOString()}] Sync job completed successfully.`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Sync job failed:`, error);
    }
});