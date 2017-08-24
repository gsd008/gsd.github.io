/**
 * Created by dell on 2017/7/25.
 */

window.onload=function () {
    let dianji = $('.toggle');
    // console.log(dianji);
    let xia = $('.xia>ul');
    dianji.on('click',function () {
        xia.slideToggle();
    });

/*--------------------------------------*/
    let floors=document.querySelectorAll('.floors');
    let foo = document.querySelectorAll('.foo');
    console.log(foo)
    let lou = document.querySelectorAll('.lou');
    let now = 0;
    // console.log(lou);
    window.onscroll=function() {
        let scrollobj = document.body.scrollTop ? document.body : document.documentElement;
        let top = scrollobj.scrollTop;
        lou.forEach(function (value,index) {
            if(top>=value.offsetTop-500){
                for ( let i=0;i<floors.length;i++){
                    floors[i].classList.remove('active');
                }
                floors[index].classList.add('active');
                now = index;
            }
        })
    }


    floors.forEach(function (value,index) {
        value.onclick=function () {
            animate(document.body,{scrollTop:lou[index].offsetTop},600);
        }

    });

    foo.forEach(function (value,index) {
        value.onclick=function () {
            animate(document.body,{scrollTop:lou[index].offsetTop},600);
        }

    });











}
















// $(document).ready(function () {
//
//
// })

