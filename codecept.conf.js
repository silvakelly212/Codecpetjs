exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://swapi.co/api/people/1/',
      browser: 'chrome'
    }
  },
  include: {
    I: 'yes'
  },
  bootstrap: null,
  mocha: {},
  name: 'cmder',
  translation: 'pt-BR'
}

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://swapi.co/api/planets/1/',
      browser: 'chrome'
    }
  },
  include: {
    I: 'yes'
  },
  bootstrap: null,
  mocha: {},
  name: 'cmder',
  translation: 'pt-BR'
}
