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
   *
   * It returns promise object and can be used before the content loaded
   *
   * example:
   * in the angular.run()
   * you can set content loaded async from the server
   *
   * AngularApp.run(["$mkContent", function ($mkContent) {
   *   angular.element.get('data.json', function (data) {
   *     $mkContent.setContent(data);
   *   });
   *
   *   $rootScope.$content = $mkContent;
   * }]);
   *
   * And in the template just use
   * <h1>{{ $content.get('messages.hello') }}</h1>
   *
   */
  function $mkContentProvider() {
    var deferred, storage;

    function setContent(content) {
      deferred.resolve(content);
    }

    function getContentManager() {
      return function (path) {
        if (angular.isUndefined(storage)) {
          // Return promise if storage is not filled with content yet
          return deferred.promise;
        }
        if (angular.isUndefined(path)) {
          // Return Full Content if path not defined
          return storage;
        } else {
          // Return value
          return [storage || self]
            .concat(path.split('.'))
            .reduce(function(prev, curr) {
              return prev[curr];
            });
        }
      }
    }

    this.$get = function($q) {
      deferred = $q.defer();
      deferred.promise.then(function (content) {
        storage = content;
      });

      return {
        setContent: setContent,
        get: getContentManager
      }
    };

    this.setContent = setContent;
  }

})(window, window.angular);