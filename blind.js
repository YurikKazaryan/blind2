jQuery(document).ready(function(){
    var CecutientMenuShow = 0;
    jQuery('#CecutientBtn').click(function(){
      if(CecutientMenuShow === 0){
        jQuery('#CecutientWrapper').animate({"height":"40px"}, 500);
        jQuery('#CecutientBtn').animate({"marginTop":"40px"}, 500);
        CecutientMenuShow = 1; 
      } else {
        jQuery('#CecutientWrapper').animate({"height":"0px"}, 500);
        jQuery('#CecutientBtn').animate({"marginTop":"0px"}, 500);
        CecutientMenuShow = 0; 
      }
      return false;
    });
    console.log(jQuery.cookie("CecutientCookie"));
    if (jQuery.cookie("CecutientCookie")=="on"){
        CecutientOn();
        if (jQuery.cookie("fonts")=="small"){SmallFonts();}
        if (jQuery.cookie("fonts")=="medium"){MediumFonts();}
        if (jQuery.cookie("fonts")=="big"){BigFonts();}
        if (jQuery.cookie("image")=="on"){ImageOn();}
        if (jQuery.cookie("image")=="off"){ImageOff();}
        if (jQuery.cookie("style")=="white"){WhiteStyle();}
        if (jQuery.cookie("style")=="black"){BlackStyle();}
        if (jQuery.cookie("style")=="blue"){BlueStyle();}
        if (jQuery.cookie("style")=="green"){GreenStyle();}
    }
    /*alert(jQuery.cookie("fonts")+'&'+jQuery.cookie("CecutientCookie"));*/
    /*Включение стилей для слабовидящих*/
    jQuery('#CecutientOn').click(function(){CecutientOn();});
    /*Включение выключение изображений*/
    jQuery('#ImageOn').click(function(){ImageOn();});
    jQuery('#ImageOff').click(function(){ImageOff();});
    /*Размер шрифта*/
    jQuery('#SmallFonts').click(function(){SmallFonts();});
    jQuery('#MediumFonts').click(function(){MediumFonts();});
    jQuery('#BigFonts').click(function(){BigFonts();});
    /*Цветовая схема*/
    jQuery('#WhiteStyle').click(function(){WhiteStyle();});
    jQuery('#BlackStyle').click(function(){BlackStyle();});
    jQuery('#BlueStyle').click(function(){BlueStyle();});
    jQuery('#GreenStyle').click(function(){GreenStyle();});
    /*Функция обработчик включения стилей*/
    function CecutientOn(){
        jQuery('#CecutientOn').css("display","none");
        jQuery('#CecutientOff').css("display","inline-block");
        jQuery('#CecutientTop').css("display","block");
        /*jQuery('#content').css({"width":"100%","padding":"0px"});*/
        jQuery('.ot-wrap *').css({"background":"#fff","color":"#000"});
        MediumFonts()
        /*jQuery('#bottom, #bottom *').css({"background":"#000","color":"#fff"});
        jQuery('#headerline').css({"color":"#fff","background":"#000","height":"30px"});
        jQuery('.TopMenu').css({"border":"1px solid #000","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
        jQuery('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#000"});
        jQuery('.appointments').html("Записаться");*/
        jQuery.cookie("CecutientCookie", "on", {
            expires: 365,
            domain: 'chita.ranepa.ru'
        });
        /*return false;*/
    }
    /*Функции изменения размера шрифта*/
    function SmallFonts(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('.ot-wrap a, .ot-rightcolumn a span, .anonsDate, .ot-content span').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
            jQuery('.moduleItemImageNews').css('height','24px');
            jQuery('.module h3 span.title-module').css('line-height','66px');
            jQuery('.ot-mainmenu').css('width','700px');
            jQuery.cookie("fonts", "small", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function MediumFonts(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('.ot-wrap a, .ot-rightcolumn a span, .anonsDate, .ot-content span').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
            jQuery('.moduleItemImageNews').css('height','24px');
            jQuery('.module h3 span.title-module').css('line-height','66px');
            jQuery('.ot-mainmenu').css('width','700px');
            jQuery.cookie("fonts", "medium", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function BigFonts(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('.ot-wrap a, .ot-rightcolumn a span, .anonsDate, .ot-content span').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
            jQuery('.moduleItemImageNews').css('height','24px');
            jQuery('.module h3 span.title-module').css('line-height','66px');
            jQuery('.ot-mainmenu').css('width','700px');
            jQuery.cookie("fonts", "big", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    /*Функции обработчик отображения изображений*/
    function ImageOn(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('img').css("display","inline-block");
            jQuery('#ImageOff').css("display","inline-block");
            jQuery('.ot-top-extend').css("display","inline-block");
            jQuery('#ImageOn').css("display","none");
            jQuery.cookie("image", "on", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function ImageOff(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('img').css("display","none");
            jQuery('#ImageOff').css("display","none");
            jQuery('#ImageOn').css("display","inline-block");
            jQuery('#CecutientBtn img').css("display","inline-block");
            jQuery('.ot-top-extend').css("display","none");
            jQuery.cookie("image", "off", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    /*Функции изменения цветовой схема*/
    function WhiteStyle(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('body, html').css("background","#fff");
            jQuery('#content').css({"width":"100%","padding":"0px"});
            jQuery('.ot-wrap *').css({"background":"#fff","color":"#000"});
            jQuery('#CecutientTop').css("color","#000");
            jQuery('.SubMenu').css("background","#fff");
            jQuery('.SubMenu *').css("color","#000");
            jQuery('#bottom, #bottom *').css({"background":"#000","color":"#fff"});
            jQuery('#headerline').css({"color":"#fff","background":"#000"});
            jQuery('.TopMenu').css({"border":"1px solid #000","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            jQuery('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#000"});
            jQuery('.PriceTable tr td').css("border","1px solid #000");
            jQuery.cookie("style", "white", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function BlackStyle(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('body, html').css("background","#000");
            jQuery('#content').css({"width":"100%","padding":"0px"});
            jQuery('.ot-wrap *').css({"background":"#000","color":"#fff"});
            jQuery('#CecutientTop').css("color","#fff");
            jQuery('.SubMenu').css("background","#000");
            jQuery('.SubMenu *').css("color","#fff");
            jQuery('#bottom, #bottom *').css({"background":"#fff","color":"#000"});
            jQuery('#headerline').css({"color":"#000","background":"#fff"});
            jQuery('.TopMenu').css({"border":"1px solid #fff","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            jQuery('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#fff"});
            jQuery('.PriceTable tr td').css("border","1px solid #fff");
            jQuery.cookie("style", "black", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function BlueStyle(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('body, html').css("background","#9DD1FF");
            jQuery('#content').css({"width":"100%","padding":"0px"});
            jQuery('.ot-wrap *').css({"background":"#9DD1FF","color":"#063462"});
            jQuery('#CecutientTop').css("color","#063462");
            jQuery('.SubMenu').css("background","#9DD1FF");
            jQuery('.SubMenu *').css("color","#063462");
            jQuery('#bottom, #bottom *').css({"background":"#063462","color":"#9DD1FF"});
            jQuery('#headerline').css({"color":"#9DD1FF","background":"#063462"});
            jQuery('.TopMenu').css({"border":"1px solid #063462","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            jQuery('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#063462"});
            jQuery('.PriceTable tr td').css("border","1px solid #063462");
            jQuery.cookie("style", "blue", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    function GreenStyle(){
        if (jQuery.cookie("CecutientCookie")=="on"){
            jQuery('body, html').css("background","#3B2716");
            jQuery('#content').css({"width":"100%","padding":"0px"});
            jQuery('.ot-wrap *').css({"background":"#3B2716","color":"#A9E44D"});
            jQuery('#CecutientTop').css("color","#A9E44D");
            jQuery('.SubMenu').css("background","#3B2716");
            jQuery('.SubMenu *').css("color","#A9E44D");
            jQuery('#bottom, #bottom *').css({"background":"#A9E44D","color":"#3B2716"});
            jQuery('#headerline').css({"color":"#3B2716","background":"#A9E44D"});
            jQuery('.TopMenu').css({"border":"1px solid #A9E44D","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            jQuery('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#A9E44D"});
            jQuery('.PriceTable tr td').css("border","1px solid #A9E44D");
            jQuery.cookie("style", "green", {
                expires: 365,
                domain: 'chita.ranepa.ru'
            });
            return false;
        }
    }
    /*Отключение версии для слабовидящих*/
    jQuery('#CecutientOff').click(function(){
        jQuery.cookie("CecutientCookie", null);
        jQuery.cookie("style", null);
        jQuery.cookie("image", null);
        jQuery.cookie("fonts", null);
        window.location.reload();
        return false;
    });
});