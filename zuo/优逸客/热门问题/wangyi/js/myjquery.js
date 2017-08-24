/*
* @Author: dell
* @Date:   2017-07-16 12:52:17
* @Last Modified by:   dell
* @Last Modified time: 2017-07-17 22:28:08
*/

'use strict';

$(document).ready(function(){

    $('#fullpage').fullpage({

        anchors: ['section1', 'section2', 'section3', 'section4','section5'],
        // menu: '#fullpage',
        'navigation': true,
        afterLoad:function (anchorLink, index) {
            if(index==1){
                $('.section1').find('.wanyi').delay(500).removeClass('wangyin wangyiout').addClass('wangyiout');
                $('.section1').find('.logo').delay(500).removeClass('logoin logoout').addClass('logoout');
                $('.section1').find('.zi').delay(500).removeClass('ziin ziout').addClass('ziout');
                $('.section1').find('.di').delay(500).removeClass('diin diout').addClass('diout');
             
            }

            if(index==2){
              $('.section2').find('.logo1').delay(500).removeClass('logo1in logo1out').addClass('logo1in');
              $('.section2').find('.zi1').delay(500).removeClass('zi1in zi1out').addClass('zi1in');
              $('.section2').find('.di1').delay(500).removeClass('di1in di1out').addClass('di1in');
              $('.section2').find('.di2').delay(500).removeClass('di2in di2out').addClass('di2in');
              $('.section2').find('.di3').delay(500).removeClass('di3in di3out').addClass('di3in');


            }


            if(index==3){
              $('.section3').find('.logo2').delay(500).removeClass('logo2in logo2out').addClass('logo2in');
              $('.section3').find('.zi2').delay(500).removeClass('zi2in zi2out').addClass('zi2in');
              $('.section3').find('.tu1').delay(500).removeClass('tu1in tu1out').addClass('tu1in');
              $('.section3').find('.tu2').delay(500).removeClass('tu2in tu2out').addClass('tu2in');
              $('.section3').find('.tu3').delay(500).removeClass('tu3in tu3out').addClass('tu3in');

            }

            if(index==4){
              $('.section4').find('.logo3').delay(500).removeClass('logo3in logo3out').addClass('logo3in');
              $('.section4').find('.zi3').delay(500).removeClass('zi3in zi3out').addClass('zi3in');
              $('.section4').find('.avabox').delay(500).removeClass('avaboxinin avaboxinout').addClass('avaboxinin');
              $('.section4').find('.t1').delay(500).removeClass('t1in t1out').addClass('t1in');
              $('.section4').find('.t2').delay(500).removeClass('t2in t2out').addClass('t2in');
              $('.section4').find('.t3').delay(500).removeClass('t3in t3out').addClass('t3in');
              $('.section4').find('.t4').delay(500).removeClass('t4in t4out').addClass('t4in');
              $('.section4').find('.t5').delay(500).removeClass('t5in t5out').addClass('t5in');

            }

            if(index==5){
              $('.section5').find('.wy').delay(500).removeClass('wyin wyout').addClass('wyin');
              $('.section5').find('.qin').delay(500).removeClass('qinin qinout').addClass('qinin');
              $('.section5').find('.tiao').delay(500).removeClass('tiaoin tiaoout').addClass('tiaoin');
              $('.section5').find('.liji').delay(500).removeClass('lijiin lijiout').addClass('lijiin');

            }




    
        },

       onLeave:function(index, direction){
           if(index==1){
              $('.section1').find('.wanyi').delay(500).removeClass('wangyin wangyiout').addClass('wangyin'); 
              $('.section1').find('.logo').delay(500).removeClass('logoin logoout').addClass('logoin'); 
              $('.section1').find('.zi').delay(500).removeClass('ziin ziout').addClass('ziin'); 
              $('.section1').find('.di').delay(500).removeClass('diin diout').addClass('diin'); 
               
           }

           if(index==2){
              $('.section2').find('.logo1').delay(500).removeClass('logo1in logo1out').addClass('logo1out');
              $('.section2').find('.zi1').delay(500).removeClass('zi1in zi1out').addClass('zi1out'); 
              $('.section2').find('.di1').delay(500).removeClass('di1in di1out').addClass('di1out'); 
              $('.section2').find('.di2').delay(500).removeClass('di2in di2out').addClass('di2out'); 
              $('.section3').find('.di3').delay(500).removeClass('di3in di3out').addClass('di3out'); 

           }


           if(index==3){
              $('.section3').find('.logo2').delay(500).removeClass('logo2in logo2out').addClass('logo2out');
              $('.section3').find('.zi2').delay(500).removeClass('zi2in zi2out').addClass('zi2out'); 
              $('.section3').find('.tu1').delay(500).removeClass('tu1in di1out').addClass('tu1out'); 
              $('.section3').find('.tu2').delay(500).removeClass('tu2in di2out').addClass('tu2out'); 
              $('.section3').find('.tu3').delay(500).removeClass('tu3in di3out').addClass('tu3out'); 
           }

           if(index==4){
              $('.section4').find('.logo3').delay(500).removeClass('logo3in logo3out').addClass('logo3out');
              $('.section4').find('.zi3').delay(500).removeClass('zi3in zi3out').addClass('zi3out'); 
              $('.section4').find('.avabo').delay(500).removeClass('avaboxinin avaboxinout').addClass('avaboxinout'); 
              $('.section4').find('.t1').delay(500).removeClass('t1in t1out').addClass('t1out');
              $('.section4').find('.t2').delay(500).removeClass('t2in t2out').addClass('t2out');
              $('.section4').find('.t3').delay(500).removeClass('t3in t3out').addClass('t3out');
              $('.section4').find('.t4').delay(500).removeClass('t4in t4out').addClass('t4out');
              $('.section4').find('.t5').delay(500).removeClass('t5in t5out').addClass('t5out');
           }


          
           if(index==5){
              $('.section5').find('.wy').delay(500).removeClass('wyin wyout').addClass('wyout');
              $('.section5').find('.qin').delay(500).removeClass('qinin qinout').addClass('qinout'); 
              $('.section5').find('.tiao').delay(500).removeClass('tiaoin tiaoout').addClass('tiaoout'); 
              $('.section5').find('.liji').delay(500).removeClass('lijiin lijiout').addClass('lijiout'); 
             
           }








       }

    })
   
})