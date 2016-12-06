"use strict";

/********************************************************************
 * Configuration
 ********************************************************************/

/*eslint no-process-env: "off"*/
module.exports = {
  logging: typeof process.env.ENABLE_LOGGING !== "undefined",
  debug: typeof process.env.ENABLE_DEBUG !== "undefined",
  verbose: typeof process.env.ENABLE_VERBOSE !== "undefined",
  staticContentDirectory: process.env.STATIC_CONTENT_DIRECTORY,
  serverPort: process.env.PORT || 3000
};
