var rank_tab = document.querySelector('.rank-tab');
var tab_li = document.querySelectorAll('.rank-tab>ul li');
var tab_div = document.querySelectorAll('.rank-tab-box>div');
for(var i = 0; i < tab_li.length; i++) {
    tab_li[i].setAttribute('index', i);
    tab_li[i].onclick = function() {
        for(var j = 0; j < tab_li.length; j++) {
            tab_li[j].className = '';
            tab_div[j].style.display = 'none';
        }
        this.className = 'areatrue';
        tab_div[this.getAttribute('index')].style.display = 'block';
    }
}