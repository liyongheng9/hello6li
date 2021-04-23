var data = data["data"];
var sum = 0;
var index3 = 0;
var project = document.querySelector('.project');
var span = document.querySelector('.bt span');
/* 题目内容功能 */
function getData(num) {
    var arr = [];
    var str = '';
    if (data[num]['correct'].length > 1) {
        str = '<input type="checkbox" name="chk" />';
    } else {
        str = '<input type="radio" name="ra" />';
    }
    span.innerText = (num + 1);
    console.log('正确答案是' + data[num]['correct']);
    arr.push('<h2><span style="display: none;">' + data[num]['correct'] + '</span>' + data[num]['topic'] + '</h2>');
    arr.push('<ul>');
    data[num]['options'].forEach(function (val) {
        arr.push('<li>' + str + '<span>' + val["letter"] + '</span>' + '  .  ' + val['content'] + '</li>');
    })
    arr.push('</ul>');
    project.innerHTML = arr.join('');
}
getData(index3);

var btn = document.querySelector('.next-btn');

var chuang_span = document.querySelector('.chuang span i');
var answer = document.querySelector('.answer');
var chuangs = document.querySelector('.chuangs');
var gaofen = document.querySelector('.gaofen');
var gaofen_span = document.querySelector('.gaofen-nr span');
var chuang = 0;

var result_font_img = document.querySelector('.result-font img');
var res_title_img = document.querySelector('.res-title img');


/* 下一题按钮功能 */
btn.onclick = function () {
    var inputs = document.querySelectorAll('.project li input');
    var spans = document.querySelectorAll('.project li span');
    var h2span = document.querySelector('.project h2 span');
    var placard_fe = document.querySelector('.placard-fe');
    var flag;
    var sumname = 0;

    var daan = h2span.innerText;
    inputs.forEach(function (val) {
        if (val.checked != '' && val.checked == true) {
            var num = val.parentNode.querySelector('span').innerText;
            console.log(daan.indexOf(num));
            if (daan.indexOf(num) != -1) {
                // sum++;
                sumname++;
                flag = true;
                val.parentNode.className = 'timetrue';
            } else {
                flag = false;
                val.parentNode.className = 'time';
                setTimeout(function () {
                    chuangs.style.display = 'block';
                    answer.style.display = 'none';
                    setTimeout(function() {
                        chuangs.style.display = 'none';
                        gaofen.style.display = 'block';
                    },2000);
                }, 1000);
            }

        }
    })
    if (flag) {
        sum = sum +sumname;
        gaofen_span.innerText = sum;
        placard_fe.innerText = sum + '分';
        console.log(sum);
        setTimeout(function () {
            if (index3 != data.length - 1) {
                chuang++;
                chuang_span.innerText = 'x' + chuang;
                index3++;
                getData(index3);
            }
        }, 1000);
    } else {
        chuang = 0;
        index3 = 0;
        sumname = 0;
    }
    if(sum <= 24) {
        result_font_img.src = 'img/result_font_qt.png';
        res_title_img .src = 'img/res_title_qt.png';
    } else if(sum >= 25 && sum <= 48) {
        result_font_img.src = 'img/result_font_by.png';
        res_title_img.src = 'img/res_title_by.png';
    } else if(sum >= 49 && sum <= 71) {
        result_font_img.src = 'img/result_font_hj.png';
        res_title_img.src = 'img/res_title_hj.png';
    } else if(sum >= 72 && sum <= 95) {
        result_font_img.src = 'img/result_font_bj.png';
        res_title_img.src = 'img/res_title_bj.png';
    } else if(sum >= 96 && sum <= 107) {
        result_font_img.src = 'img/result_font_zs.png';
        res_title_img.src = 'img/res_title_ry.png';
    } else if(sum >= 108) {
        result_font_img.src = 'img/result_font_wz.png';
        res_title_img.src = 'img/res_title_wz.png';
    }
}
