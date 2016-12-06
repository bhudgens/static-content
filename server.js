"use strict";

/********************************************************************
 * Logging
 ********************************************************************/

const config = require('./config/config.js');
const log = require('iphb-logs');

/** Respect Logging Configs */
log.enable.logging = config.logging;
log.enable.debug = config.debug;
log.enable.verbose = config.verbose;

/********************************************************************
 * Libraries
 ********************************************************************/

/** Hookup Express */
const express = require('express');
const app = express();

/********************************************************************
 * Route Handlers
 ********************************************************************/

if (!config.staticContentDirectory) {
  log.error("Static Content Directory Not Defined");
  process.exit(1);
}

// Add paths for the docs to be served via HTML
app.use('/', express.static(`${config.staticContentDirectory}`));

/********************************************************************
 * Start the Express Server
 ********************************************************************/
app.listen(config.serverPort, () =>
  log.info(`Beta Purger listening on ${config.serverPort}`));