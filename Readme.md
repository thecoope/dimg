# dimg

Dynamically get the rendered size of an image no matter what the css says about screen size and layout, then use those dimensions for your image request.

## Usage

First, replace your images' `src` attribute with these special attributes:

```html
<img
  data-dimg="http://i.imgur.com/r3CbX4f.jpg"
  data-dimg-w="1920"
  data-dimg-h="1072"
 >
```

The `dimg-width` and `dimg-height` attributes should indicate the width and
height of the _full sized_ image.

After including the contents of `dimg.js`, simply call the `dimg` function
with a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
and a resizing function:

```javascript
function myResizingService(source, width, height) {
  return 'http://firesize.com/' + width + 'x' + height + '/g_center/' + source;
}

window.addEventListener('load',function(){
  var myDynamicImages = document.querySelectorAll('[data-dimg]');
  dimg(myDynamicImages, myResizingService);
});
```

That's it! dimg will load your images using the exact dimensions required.

## Coming soon

 * Demo
 * More browser support
 * JQuery plugin
 * React Component
 * NPM package
