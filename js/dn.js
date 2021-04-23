// 禁止页面拖拽
document.addEventListener("touchmove", function (e) {
    e.preventDefault();
}, {
    passive: false
});


var loading = document.querySelector('.loading');
var index = document.querySelector('.index');
setTimeout(function() {
    loading.style.transition = 'all 2s';
    loading.style.display = 'none';
    index.style.display = 'block';
},2000);

var lbt = document.querySelector('.lbt');
var sy = document.querySelector('.sy');
var sybtn = document.querySelector('.sybtn');

sybtn.addEventListener('click',function() {
    sy.style.display = 'none';
    lbt.style.display = 'block';
})


var answer = document.querySelector('.answer');
var sure_btn = document.querySelector('.sure-btn');
sure_btn.addEventListener('click',function() {
    focus.style.display = 'none';
    answer.style.display = 'block';
})

var rank_btn_box = document.querySelector('.rank-btn-box');
var rank_btn_l = document.querySelector('.rank-btn-l');
var rank_btn_r = document.querySelector('.rank-btn-r');
var share_box = document.querySelector('.share-box');
var again_btn = document.querySelector('.again_btn');
var rank = document.querySelector('.rank');
var placard = document.querySelector('.placard');

again_btn.onclick = function() {
    rank.style.display = 'none';
    index.style.display = 'block';
    getData(0);
}

rank_btn_l.onclick = function() {
    share_box.style.display = 'block';
}
rank_btn_r.onclick = function() {
    placard.style.display = 'block';
    rank.style.display = 'none';
}
share_box.onclick = function() {
    share_box.style.display = 'none';
}

var gaofen = document.querySelector('.gaofen');
var rank_btn = document.querySelector('.rank-btn');
rank_btn.onclick = function() {
    gaofen.style.display = 'none';
    rank.style.display = 'block';
}

var placard = document.querySelector('.placard');
var create_back = document.querySelector('.create-back');
create_back.onclick = function() {
    placard.style.display = 'none';
    rank.style.display = 'block';
}