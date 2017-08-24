/*
* @Author: dell
* @Date:   2017-07-17 23:27:43
* @Last Modified by:   dell
* @Last Modified time: 2017-07-19 11:01:17
*/

'use strict';
$(function(){
	var swiper = new Swiper('.swiper-container',{
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
        loop:true,
	});

	 let myScroll = new IScroll('.box',{
	 	// 滚动条
        mouseWheel: true,

        scrollbars: true,

        // 滚动显示 不滚动消失
        fadeScrollbars: true,


        resizeScrollbars:true,
        
        // 设置样式
        scrollbars: 'custom',

        // 弹性滚动
        shrinkScrollbars:'scale',
    })


})







	
 	
 