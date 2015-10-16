
# ngClipboard
AngularJS module to copy HTML tags on click, and send custom values to clipboard. No need for any Flash complements. It works on mobile devices.

##Installation
1. Download the latest release from [here](https://github.com/nico-val/ngClipboard/releases/latest).

2. Include **ngClipboard.js** in your HTML. 

    ```html
    <script src="ngClipboard.js"></script>
    ```
3. Inject the module in your app.

    ```javascript
    angular.module('myApp',['ngClipboard']);
    ```

##Demo
[http://plnkr.co/edit/TMGDUH5IG4GazpBvT2rQ](http://plnkr.co/edit/TMGDUH5IG4GazpBvT2rQ)

##Usage

###```ng-copyable``` directive
Add a "ng-copyable" attribute to any html tag to make it copyable on click.
```html
<div ng-copyable>Click to copy this text!</div>
```

###```ngClipboard.toClipboard()``` factory
1. Inject ngClipboard in your controller
    ```javascript
    angular.controller('myController',['ngClipboard',function(ngClipboard){
      /* ... */
    }]);
    ```

2. Then send values to clipboard using
```javascript
ngClipboard.toClipboard(value);
```
