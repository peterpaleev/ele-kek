﻿$('body').append("<style type='text/css'> #wmkc {position:fixed;right:10px;top:50%;transform:translateY(-50%);font-family:Arial,Helvetica,sans-serif;padding-bottom:50px;z-index:99999;} #wmkc * {box-sizing:border-box} .wmkc-list {padding:0;border-radius:4px;margin:0;background-color:#FFF;} .wmkc-icon {display:inline-block;background:url(/images/FloatWindow/wmkc-ico24.png) no-repeat;width:32px;height:32px} .wmkc-list>li {width:100%;list-style:none;text-align:center;padding:6px;transition:all .2s ease-in-out;border-bottom:1px solid #FFF;} .wmkc-list>li a {text-decoration:none;display:flex} .wmkc-email .wmkc-icon {background-position:-6px -6px} .wmkc-email:hover .wmkc-icon {background-position:-50px -6px;} .wmkc-whatsapp .wmkc-icon {background-position:-94px -94px;} .wmkc-whatsapp:hover .wmkc-icon {background-position:-138px -6px} .wmkc-skype .wmkc-icon {background-position:-94px -6px} .wmkc-skype:hover .wmkc-icon {background-position:-94px -50px;} .wmkc-qq .wmkc-icon {background-position:-6px -50px} .wmkc-qq:hover .wmkc-icon {background-position:-50px -50px} .wmkc-wechat .wmkc-icon {background-position:-138px -50px} .wmkc-wechat:hover .wmkc-icon {background-position:-138px -94px} .wmkc-email {background-color:#F90} .wmkc-whatsapp {background-color:#2CB740} .wmkc-skype {background-color:#0091DF} .wmkc-qq {background-color:#00B7F7} .wmkc-wechat {background-color:#00CE12} .wmkc-list>li:hover {background:#F9F9F9;} .wmkc-list>li:first-child {border-radius:4px 4px 0 0} .wmkc-list>li:last-child {border-radius:0 0 4px 4px;} .wmkc-top {text-align:center;cursor:pointer;user-select:none;border:1px solid #EEE;padding:4px 4px;border-radius:4px;transition:all .2s ease-in-out;display:none;position:absolute;bottom:0;left:0;width:100%;background-color:#FFF} .wmkc-top .wmkc-icon {background-position:-50px -94px} .wmkc-top:hover {background-color:#BBB;} .wmkc-top:hover .wmkc-icon {background-position:-6px -94px;} @media(max-width:768px){#wmkc{display:none}}.wmkc-wechat .wmkc-icon {background-position:-138px -50px} .wmkc-wechat:hover .wmkc-icon {background-position:-138px -94px} .wmkc-wechat {background-color:#00CE12}</style> <div id='wmkc'> <ul class='wmkc-list'> <li class='wmkc-email'><a href='mailto:sale@elemix.cn' target='_blank' title='E-Mail:sale@elemix.cn' id='A_9'><i class='wmkc-icon'></i></a></li>   <li class='wmkc-whatsapp'><a href='https://api.whatsapp.com/send?l=en&phone=8613661542553' target='_blank' id='A_8' title='WhatsApp:8613661542553'><i class='wmkc-icon'></i></a></li> </ul> 	 </div> ");
var n = $(".wmkc-top");
function e() {
    $("html,body").animate({ scrollTop: 0 }, 600)
}
$(window).scroll(function () {
    $(window).scrollTop() > $(window).height() / 2 ? n.fadeIn() : n.fadeOut()
});
n.on("click", e);