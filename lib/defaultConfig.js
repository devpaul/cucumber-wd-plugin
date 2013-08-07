// For the super lazy among us...
exports.remote = { host: process.env.WDHOSTNAME || 'ondemand.saucelabs.com'
                 , port: process.env.WDPORT || 80
                 }

exports.desired = { browserName: 'Chrome'
                  , tags: ['cucumber-wd-plugin']
                  , name: 'ran with configurationless cucumber-wd-plugin'
                  }