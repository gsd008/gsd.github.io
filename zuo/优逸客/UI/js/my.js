/*
* @Author: dell
* @Date:   2017-07-17 23:27:43
* @Last Modified by:   dell
* @Last Modified time: 2017-07-17 23:59:29
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
})
 	
 