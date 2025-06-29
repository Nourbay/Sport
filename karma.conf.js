module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {
        // options Jasmine ici
      },
      clearContext: false, // laisse la sortie visible dans le navigateur
    },
    jasmineHtmlReporter: {
      suppressAll: true, // supprime les traces dupliquées
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-tailwind'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,          // false en CI pour ne pas rester à l’écoute
    browsers: ['ChromeHeadlessCI'],  // utiliser le launcher custom (headless)
    singleRun: true,           // true en CI pour lancer une seule fois
    restartOnFileChange: false,

    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ],
      },
    },
  });
}
