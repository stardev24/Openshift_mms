'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9999',
  SESSION_SECRET:   'mms-secret',

  FACEBOOK_ID:      '1516262918663608',
  FACEBOOK_SECRET:  '0ea045fa11d77e3e439bae0bdc622946',

  TWITTER_ID:       'dcH4ezmjMMUvjt3T8NZhEaGaD',
  TWITTER_SECRET:   'U0WbLa3b3fF51WxWZB3wt6PN7hWyHOAtrRTQIN3e7lqDHaJbqv',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
