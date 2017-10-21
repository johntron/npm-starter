// Notify of updates
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

// Track errors
const Raven = require('raven');

Raven.config('https://792f6beabcc74554a22c207113dd2126@sentry.io/1200860').install();

module.exports = () => true;
