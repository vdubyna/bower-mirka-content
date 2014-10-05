describe('content', function() {
  it('should be loaded and title should be valid"', function() {
    browser.get('#/');
    expect(browser.getTitle()).toEqual('mkContentDemo');
  });
  it('should be loaded and content should be valid"', function() {
    browser.get('#/');
    expect(element(by.css('h1:first-child')).getText()).toEqual('Hello world!');
  });
});