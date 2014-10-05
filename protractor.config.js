// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/spec.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  baseUrl: "http://localhost:8000/demo.html"
};