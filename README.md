
# ngClipboard
AngularJS module to copy HTML tags on click, and send custom values to clipboard.

##Installation
Download the latest release from [here](https://github.com/nico-val/ngClipboard/releases/lastest).

Include **ngClipboard.js** in your HTML.
```html
<script src="ngClipboard.js"></script>
```

##Demo
[http://plnkr.co/edit/TMGDUH5IG4GazpBvT2rQ](http://plnkr.co/edit/TMGDUH5IG4GazpBvT2rQ)

##Usage

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
