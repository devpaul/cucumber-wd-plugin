var Cucumber = require('cucumber')


function listenerFactory(browser) {
    var listener = Cucumber.Listener()
      , setHandlerForEvent = listener.setHandlerForEvent || polyfillSetHandlerForEvent

    setHandlerForEvent.call(listener, 'AfterFeatures', onAfterFeatures)

    function onAfterFeatures(event, callback) {
        browser.quit(callback)
    }

    return listener
}

function polyfillSetHandlerForEvent(shortName, handler) {
    var eventName =  'handle' + shortName + 'Event';
    this[eventName] = handler;
}

module.exports = listenerFactory