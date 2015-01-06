var selenium = require('selenium-webdriver');
var chai = require('chai');
chai.use(require('chai-as-promised'))
var expect = chai.expect;


before(function() {
  this.driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build();

  this.driver.getWindowHandle();

});

after(function(done) {
  this.driver.quit().then(done);
});

describe('use selenium', function() {
  this.timeout(20000);
  beforeEach(function() {

    this.driver.get('http://npm.taobao.org');
  });

  it('should ok', function(done) {
    expect(this.driver.getTitle()).to
      .eventually.contain('NPM')
      .notify(done);
  });

});