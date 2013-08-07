var browserFactory = require('./browserFactory.js')
  , listenerFactory = require('./listenerFactory.js')
  , defaultConfig = require('./defaultConfig.js')

function Plugin(cucumber, config) {
    var initPromise = browserFactory(config || defaultConfig)
    initPromise.then(onBrowserInit)
    return initPromise

    function onBrowserInit(browser) {
        var listener = listenerFactory(browser)
        cucumber.attachListener(listener)
    }
}

module.exports = Plugin