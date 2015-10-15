
# ngClipboard
AngularJS module to copy HTML tags on click, and send custom values to clipboard.

##Installation
Include **ngClipboard.js** in your HTML.
```html
<script src="ngClipboard.js"></script>
```

##Usage:

###```ng-copyable``` directive
Add a "ng-copyable" attribute to any html tag to make it copyable on click.
```html
<div ng-copyable>Click to copy this text!</div>
```

###```ngcopyable.toClipboard()``` factory
Inject ngClipboard in your controller. Then send values to clipboard using
```javascript
ngcopyable.toClipboard(value);
```
