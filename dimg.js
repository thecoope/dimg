function dimg (imgs, service) {

  var pxDensity = window.devicePixelRatio || 1;
  
  function createDynImg (img) {
    if (img.tagName !== 'IMG'){
      throw new Error('Dimg.js - ' + img.tagName + ' - not an <img>');
      return;
    }
    var imgWidth = img.dataset.dimgWidth || img.dataset.dimgW;
    var imgHeight = img.dataset.dimgHeight || img.dataset.dimgH;
    var svgString = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='" + imgWidth + "' height='" + imgHeight + "'></svg>");
    img.src = "data:image/svg+xml," + svgString;
    
    setTimeout(function(){

      var renderedWidth  = img.clientWidth * pxDensity;
      var renderedHeight = img.clientHeight * pxDensity;
      
      if (!(renderedWidth > 0) || !(renderedHeight > 0)) {
        if (imgWidth >= imgHeight) {
          renderedWidth  = imgWidth/imgHeight;
          renderedHeight = 1;
        } else {
          renderedWidth  = 1;
          renderedHeight = imgWidth/imgHeight;
        }
        renderedWidth  *= 250;
        renderedHeight *= 250;
      }
      
      renderedWidth  = Math.floor(renderedWidth);
      renderedHeight = Math.floor(renderedHeight);
      
      var imageSource = img.dataset.dimg;
      img.src = service(imageSource,renderedWidth,renderedHeight);
    
    }, 50);
  }
  
  for (var i in imgs) {
    createDynImg(imgs[i]);
  }
}
