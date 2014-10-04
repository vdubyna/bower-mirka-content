(function (window, angular) {
  'use strict';

  /**
   * Mirka content module
   */
  angular.module('mirkaContent', ['ng'])
    .provider('$mkContent', $mkContentProvider);

  /**
   * Content provider which allows to get a quick access to content object values
   * by path
   * example:
   * $mkProvider.setContent({info: {description: "Description say Hi!"}});
   * $mkContent.get('info.description');
   */
  function $mkContentProvider() {
    var contentContainer;

    this.setContent = function (content) {
      contentContainer = content;
    };

    this.$get = function () {
      return {
        get: function (path) {
          if (angular.isUndefined(contentContainer)) {
            throw "Content should be defined before usage";
          }
          if (angular.isUndefined(path)) {
            return contentContainer;
          } else {
            return [contentContainer || self]
              .concat(path.split('.'))
              .reduce(function (prev, curr) {
                return prev[curr];
              });
          }
        }
      };
    };
  }

})(window, window.angular);