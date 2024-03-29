    var video = document.querySelector('video');

    if (navigator.mediaDevices) 
    {
        navigator.mediaDevices.getUserMedia({video: { width: 640, height: 480 }})
        .then(function(stream) 
        {
            video.srcObject = stream;
            video.addEventListener('click', getElements);
        })
        .catch(function(error) {

        });
    }

    function getElements()
    {
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');

        if(document.querySelector('video').hidden)
        {
            var image = document.getElementById('uploadedimg');
            ctx.drawImage(image, 0, 0,video.videoWidth,  video.videoHeight);
        }
        else
            ctx.drawImage(video, 0, 0);
        document.savemontage.url.value = canvas.toDataURL();
        document.savemontage.width.value =  video.videoWidth;
        document.savemontage.height.value = video.videoHeight;

        var x = document.getElementById("filtres").querySelectorAll("img");
        var i;
        for (i = 0; i < x.length; i++) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "filtre" + (i));
            input.setAttribute("value", x[i].src);
            document.getElementById("creation").prepend(input);
        }
    }

    function preview(image)
    {
        var x = document.getElementById("filtres").querySelectorAll("img");
        var already = -1;
        var i;
        for (i = 0; i < x.length; i++) {
            if (image.src === x[i].src)
                already = i;
        }
        if (already === -1)
        {
            var img = document.createElement('img');
            img.src = image.src;
            img.id = "preview";
            img.setAttribute('width', video.videoWidth);
            img.setAttribute('height', video.videoHeight);
            document.getElementById('filtres').append(img);
        }
        else
            x[already].remove();
        x = document.getElementById("filtres").querySelectorAll("img");
        document.getElementById("submitcreation").disabled = x.length === 0 ? true : false;
    }

    function loadFile(event) {
        var uploadedimg = document.getElementById('uploadedimg');
        uploadedimg.hidden = false;
        uploadedimg.src = URL.createObjectURL(event.target.files[0]);
        document.querySelector('video').hidden = true;
        document.getElementById("loadcam").hidden = false;
        document.getElementById("files").value = null;
      };
    
      function loadcam()
      {
        var uploadedimg = document.getElementById('uploadedimg');
        uploadedimg.hidden = true;
        uploadedimg.removeAttribute('src');
        document.querySelector('video').hidden = false;
        document.getElementById("loadcam").hidden = true;
      }