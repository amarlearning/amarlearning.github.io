(function(){
  var video = document.getElementById('video'),
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      photoone = document.getElementById('photoone'),
      phototwo = document.getElementById('phototwo'),
      photothree = document.getElementById('photothree'),
      photofour = document.getElementById('photofour'),
      photofive = document.getElementById('photofive'),
      vendorUrl = window.URL || window.webkitURL;

  navigator.getMedia = navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia;

  navigator.getMedia({
    video:true,
    audio:false
  }, function(stream){
      video.src = vendorUrl.createObjectURL(stream);
  }, function(error){
    // error code
  });

  document.getElementById('capture').addEventListener('click', function()
  {
      var data, image, i, r, g, b, brightness;
      context.drawImage(video, 0 ,0, 400, 300);
      image = context.getImageData(0, 0, 400, 300);
      data = image.data;
      for(i=0;i<data.length;i=i+4)
      {
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        brightness = (r * 4 + g * 5 + b)/3;
        data[i] = data[i+1] = data[i+2] = brightness;
      }
      image.data = data;
      context.putImageData(image,0,0);
      photoone.setAttribute('src', canvas.toDataURL('image/png'));
  }, false);
  document.getElementById('capture').addEventListener('click', function()
  {
      var data, image, i, r, g, b, brightness;
      context.drawImage(video, 0 ,0, 400, 300);
      image = context.getImageData(0, 0, 400, 300);
      data = image.data;
      for(i=0;i<data.length;i=i+5)
      {
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        brightness = (r * 3 + g * 9 + b * 0)/4;

        data[i] = data[i+1] = data[i+2] = brightness;
      }
      image.data = data;
      context.putImageData(image,0,0);
      phototwo.setAttribute('src', canvas.toDataURL('image/png'));
  }, false);
  document.getElementById('capture').addEventListener('click', function()
  {
      var data, image, i, r, g, b, brightness;
      context.drawImage(video, 0 ,0, 400, 300);
      image = context.getImageData(0, 0, 400, 300);
      data = image.data;
      for(i=0;i<data.length;i=i+9)
      {
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        brightness = (r + g + b)/2;
        data[i] = data[i+1] = data[i+2] = brightness;
      }
      image.data = data;
      context.putImageData(image,0,0);
      photothree.setAttribute('src', canvas.toDataURL('image/png'));
  }, false);
  document.getElementById('capture').addEventListener('click', function()
  {
      var data, image, i, r, g, b, brightness;
      context.drawImage(video, 0 ,0, 400, 300);
      image = context.getImageData(0, 0, 400, 300);
      data = image.data;
      for(i=0;i<data.length;i=i+9)
      {
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        brightness = (r + g + b)/2;
        data[i] = data[i+1] = data[i+2] = brightness;
      }
      image.data = data;
      context.putImageData(image,0,0);
      photofour.setAttribute('src', canvas.toDataURL('image/png'));
  }, false);
  document.getElementById('capture').addEventListener('click', function()
  {
      var data, image, i, r, g, b, brightness;
      context.drawImage(video, 0 ,0, 400, 300);
      image = context.getImageData(0, 0, 400, 300);
      data = image.data;
      for(i=0;i<data.length;i=i+9)
      {
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        brightness = (r + g + b)/2;
        data[i] = data[i+1] = data[i+2] = brightness;
      }
      image.data = data;
      context.putImageData(image,0,0);
      photofive.setAttribute('src', canvas.toDataURL('image/png'));
  }, false);
})();
