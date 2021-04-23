/* 轮播图 */
var focus = document.querySelector('.focus');
var ul = document.querySelector('.focus ul');
var w = focus.offsetHeight;
var ulSite = 0;
var move = 0;
focus.addEventListener('touchstart', function (e) {
    ulSite = e.targetTouches[0].pageY;
})
focus.addEventListener('touchmove', function (e) {
    move = e.targetTouches[0].pageY - ulSite;
    ul.style.transform = 'translateY(' + move + 'px)';
})
focus.addEventListener('touchend', function (e) {
    if (Math.abs(move) > 50) {
        if (move > 0) {
            ul.style.transition = 'all 1s';
            ul.style.transform = 'translateY(0)';
        } else {
            ul.style.transition = 'all 1s';
            ul.style.transform = 'translateY(-100vh)';
        }
    } 
})