cucumber-wd-plugin
==================
Provide this plugin with a reference to the cucumber runtime and it will initialize a selenium session given
a set of configuration data and automatically close your session after cucumber completes

## Configuration
see lib/defaultConfig.js for an example config

If you are using SauceLabs be sure to set your SAUCE_USERNAME and SAUCE_ACCESS_KEY in your environment variables
or pass them in your config.  See [wd's readme](https://github.com/admc/wd#named-parameters) for details.

## Example usage
In a step definitions file create a listener using
```
    var browserPlugin = wdPlugin(config)
```
which will provide a browser interface to the selenium browser and establish a connection.  Once the connection is
established the browser is available from the plugin, so you can do something like:
```
    this.Before(function(callback) {
        this.browser = browserPlugin.browser
        callback()
    }
```
and provide browser access on the world object

See [the node-bdd-example project](https://github.com/devpaul/node-bdd-example) for usage

## Support
If you're using [cucumber-js](https://github.com/cucumber/cucumber-js) with [grunt-cucumber](https://github.com/s9tpepper/grunt-cucumber-js)
like I am you'll want to take a look at [this pull request](https://github.com/cucumber/cucumber-js/pull/130)