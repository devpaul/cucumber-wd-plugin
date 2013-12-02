cucumber-wd-plugin
==================
Provide this plugin with a reference to the cucumber runtime and it will initialize a selenium session given
a set of configuration data and automatically close your session after cucumber completes

## Configuration
see lib/defaultConfig.js for an example config

If you are using SauceLabs be sure to set your SAUCE_USERNAME and SAUCE_ACCESS_KEY in your environment variables
or pass them in your config.  See [wd's readme](https://github.com/admc/wd#named-parameters) for details.

## Usage
As always, you'll need to install [cucumber-wd-plugin] as a dependency
```
  npm install cucumber-wd-plugin --save
```

Then in a step definition (e.g. step_definitions/worldDefinition.js) register the plugin as a listener and before each
scenerio make sure the World has access to the browser.
```
  var browserPlugin = require('cucumber-wd-plugin')(config)

  function worldDefinition() {
    this.registerListener(browserPlugin)

    this.Before(function(callback) {
      this.browser = browserPlugin.browser
      callback()
    })
  }
```

See [the node-bdd-example project][usage] for usage

## Support
[cucumber-js] 0.3.2 provides plugin support through the use of ```registerListener``` with the integration of this
[pull request][pull].

[usage]: https://github.com/devpaul/node-bdd-example/blob/f2629aba0957b40b92211db1cca56384ea464a26/test/features/step_definitions/worldDefinition.js#L9-L14
[cucumber-wd-plugin]: https://github.com/devpaul/cucumber-wd-plugin
[cucumber-js]: https://github.com/cucumber/cucumber-js
[pull]: https://github.com/cucumber/cucumber-js/pull/130