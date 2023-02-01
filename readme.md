# js notifications

## example

```html
<link rel="stylesheet" href="js_notification.css">
<script src="js_notification.js"></script>
```
```js
<script>
	document.addEventListener('DOMContentLoaded', init);
	var notifs = null;
	function init() {
		// creating notificator
		notifs = new JS_Notificator();
		// redirecting default alert
		alert = (e) => {notifs.add(e)};

		// simple pop-up
		notifs.add('hello');
	}
</script>

```

## connecting script to page
```html
<link rel="stylesheet" href="js_notification.css">
<script src="js_notification.js"></script>
```

## creating notifications object
```js
var notifs = new JS_Notificator();
```

## simple notification
```js
notifs.add('hello');
```

## user buttons
```js
function func1() {alert(1)}

notifs.add('some text',{
	'buttons': [
		{'value': 'button1', 'action': func1},
		{'value': 'button2', 'action': () => {alert(2)}},
		// . . .
	],
});
```

## autohide
```js
notifs.add('autohide 5 sec', {'autohide': 5000});
```

## default button with action
buttons without values getting `'ok'` value
```js
notifs.add('some text', {'buttons': [{'action': () => {alert(1)}}]});
```

## default button with user value
all buttons hiding notifications
```js
notifs.add('some text', {'buttons': [{'value': 'close'}]});
```

## prompt autohide example
```js
notifs.add('do you realy need this?', {
	'buttons': [
		{'value': 'yes', 'action': () => {alert('ok') }},
		{'value': 'no',  'action': () => {alert('bye')}},
	],
	'autohide': 7000,
});
```