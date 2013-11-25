var Cucumber = require('cucumber')
  , Event = Cucumber.Listener.Event
  , BEFORE_FEATURES = Event && Event.BeforeFeatures || 'BeforeFeatures'
  , AFTER_FEATURES = Event && Event.AfterFeatures || 'AfterFeatures'

module.exports = listenerFactory

/**
 * Factory for creating the Cucumber listener
 * @param browserPromise a promise from the browser factory to supply the browser
 * @returns listener to be supplied to Cucumber
 */
function listenerFactory(browserPromise) {
    var listener = createPolyfilledListener()

    listener.browser = null
    listener.setHandlerForEvent(BEFORE_FEATURES, onBeforeFeatures)
    listener.setHandlerForEvent(AFTER_FEATURES, onAfterFeatures)

    function onAfterFeatures(event, callback) {
        listener.browser.quit(callback)
    }

    function onBeforeFeatures(event, callback) {
        browserPromise.then(onBrowserInitialized).fail(onBrowserFailed)

        function onBrowserInitialized(browser) {
            listener.browser = browser
            callback()
        }

        function onBrowserFailed(err) {
            callback(err)
        }
    }

    return listener
}

/**
 * Provides some support for Cucumber before registerListener() added to the support code helper
 * @returns a polyfilled Listener instance
 */
function createPolyfilledListener() {
    var listener = Cucumber.Listener()

    if(!listener.hasOwnProperty('setHandlerForEvent'))
        polyfillListener(listener)

    return listener
}

function polyfillListener(listener) {
    listener.setHandlerForEvent = setHandlerForEvent

    function setHandlerForEvent(shortname, handler) {
        var eventName = 'handle' + shortname + 'Event';
        listener[eventName] = handler;
    }
}