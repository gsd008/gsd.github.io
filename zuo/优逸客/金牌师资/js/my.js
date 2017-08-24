/*
* @Author: dell
* @Date:   2017-07-17 23:27:43
* @Last Modified by:   dell
* @Last Modified time: 2017-07-18 23:07:55
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
	})

	  var myScroll=new IScroll('.box',{
        mouseWheel: true,
        scrollbars: true,
        fadeScrollbars: true,
        resizeScrollbars:true,
        scrollbars: 'custom',
        shrinkScrollbars:'scale',
    })

})


 	
 