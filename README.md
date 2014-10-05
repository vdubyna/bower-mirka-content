# bower-mirka-content

Content provider which allows to get a quick access to content object values by path

example:

```javascript
 $mkProvider.setContent({info: {description: "Description say Hi!"}});
 $mkContent.get('info.description');
```

It returns promise object and can be used before the content loaded
example in the `angular.run()` you can set content loaded async from the server

```javascript
 AngularApp.run(["$mkContent", function ($mkContent) {
   angular.element.get('data.json', function (data) {
     $mkContent.setContent(data);
   });

   $rootScope.$content = $mkContent;
 }]);
```

And in the template just use

```html
 <h1>{{ $content.get('messages.hello') }}</h1>
```

### Install

Install with `bower`:

```shell
bower install mirka-content
```