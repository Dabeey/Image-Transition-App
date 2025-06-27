var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');

imgBox.onmousemove = function(e) {
    var rect = imgBox.getBoundingClientRect();
    var x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    imgWrap.style.width = x + 'px';
}