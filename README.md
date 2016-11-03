# Progres indicator widdget

## Description
A progress indicator made with pure HTML, CSS and JS (no frameworks).
It uses a progress widget that is a closure where you indicate the value for the `progress` indicator to load and also the `toggle` method to show and hide the widget.

## Usage

The js can be used this way.

```js
// create the progress indicator obj
const indicator = progress(75);

// open or close the progress indicator
// where event is the event that triggers the toggle
indicator.toggle(event);
```

In your HTML just do this for showing the indicator.

```html
<a onclick="indicator.toggle(event)" href="#">Show progress indicator</a>
```

## Browser support

I have only tested it in Chrome and Safari on a Mac computer, the widget should work in modern browser, so please use accordingly.

## License
(The MIT License)

Copyright (c) 2016 Jonathan Brumley <cayasso@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
