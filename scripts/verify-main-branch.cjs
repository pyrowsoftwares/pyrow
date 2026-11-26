const { execSync } = require('child_process');

try {
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  if (currentBranch !== 'main') {
    console.error(`\n❌ Deployment blocked: You are on branch "${currentBranch}".`);
    console.error('Only the "main" branch can be deployed to live Firebase Hosting.');
    console.error('Switch to "main" or merge your changes before deploying.\n');
    process.exit(1);
  }
} catch (err) {
  console.error('Failed to verify git branch:', err.message);
  process.exit(1);
}
