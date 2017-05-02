var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],

    files: [
      'app/tests/**/*.js*',
    ],

    reporters: ['mocha'],
    preprocessors: {'app/tests/**/*.test.js*': ['webpack']},
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
  });
};