// background change
(function () {

    var images = ['./images/image_001.jpg', './images/image_002.jpg', './images/image_003.jpg'],
        index = 0;

    function updateImage() {
        document.body.style.backgroundImage = 'url(' + images[index] + ')';
        index++;
        if (index === images.length) {
            index = 0;
        }
    }

    setInterval(updateImage, 4000);
})();


// debounce sample
(function () {
    function debounce(fn, wait) {
        var timeout;
        return function () {
            var _this = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                fn.apply(_this, args);
            }, wait || 0);
        };
    };

    function click() {
        console.log('clicked!');
    }

    document.querySelector('button').addEventListener('click',
        debounce(click, 500)
    );
})();