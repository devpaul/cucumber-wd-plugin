var browserFactory = require('./browserFactory.js')
  , defaultConfig = require('./defaultConfig.js')
  , listenerFactory = require('./listenerFactory.js')

module.exports = wdPlugin


/**
 * Instantiates a listener that ensures a selenium browser is available on listener.browser
 * before scenarios start and ensures the selenium connection is terminated after scenarios
 * have completed.
 *
 * @param config (optional) parameter allowing configuration
 * @returns listener that may be passed to registerListener() to provide plugin functionality
 */
function wdPlugin(config) {
    var initPromise = browserFactory(config || defaultConfig)
    return listenerFactory(initPromise)
}