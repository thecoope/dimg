function dimg (imgEls, service) {
  var imgs = [];
  for (var img in imgEls) {
    if (imgEls[img].tagName) {
      imgs.push(imgEls[img]);
    }
  }

  var pxDensity = window.devicePixelRatio;
  
  function createDynImg (img) {
    var imgWidth = img.dataset.dimgWidth || img.dataset.dimgW;
    var imgHeight = img.dataset.dimgHeight || img.dataset.dimgH;
    var svgString = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='" + imgWidth + "' height='" + imgHeight + "'></svg>");
    img.src = "data:image/svg+xml," + svgString;

    var renderedWidth  = Math.floor(img.clientWidth * pxDensity);
    var renderedHeight = Math.floor(img.clientHeight * pxDensity);
    var imageSource = img.dataset.dimg;

    img.src = service(imageSource,renderedWidth,renderedHeight);
  }
  
  for (var i in imgs) {
    createDynImg(imgs[i]);
  }
}
