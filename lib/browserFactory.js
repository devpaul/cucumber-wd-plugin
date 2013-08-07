var wd = require('wd')
  , Q = require('q')

module.exports = browserFactory

function browserFactory(config) {
    var deferred = Q.defer()
      , browser = wd.remote(config.remote)

    if(config.verbose || config.verboseBrowser)
        verboseBrowserStatus(browser)
    browser.init(config.desired, onBrowserInit)

    function onBrowserInit(err) {
        if(err)
            deferred.reject(err)
        else
            deferred.resolve(browser)
    }

    return deferred.promise
}

function verboseBrowserStatus(browser) {
    browser.on('status', function(info){
        console.log('\x1b[36m%s\x1b[0m', info)
    })

    browser.on('command', function(method, path) {
        console.log(' > \x1b[33m%s\x1b[0m: %s', method, path)
    })
}