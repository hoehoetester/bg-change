(function () {

    var images = ['./images/image_001.jpg', './images/image_002.jpg', './images/image_003.jpg'];
    var index = 0;

    function updateImage() {
        console.log('test');

        document.body.style.backgroundImage = 'url(' + images[index] + ')';
        index++;
        if (index === images.length) {
            index = 0;
        }
    }

    setInterval(updateImage, 1500);

})();