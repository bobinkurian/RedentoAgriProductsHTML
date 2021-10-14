jQuery(document).ready(function ($) {
	$(".dnngo_slide_menu").each(function(index, element) {
		$(this).parent().addClass("slide")
	});
})

jQuery(document).ready(function ($) {
	animationShow({"#user-icon":"#Loginandlanguage","#search-icon":"#search"});
	animationShow({"#RightMenu-icon":"#main_right","#rightClose":"#main_right"});
	animationShow({"#rightClose":"#main_right"});
	animationShow({"#ico_search":"#mobile_search","#ico_user":"#mobile_user","#ico_menu":"#mobile_menu"});
})

$(document).ready(function() {
	if($("#pagepiling").length!=0){
		$("body,html").css("overflow","hidden");
	}
})

jQuery(document).ready(function ($) {
	if ($(".Login").find(".buttonGroup").find("li").length > 2) {
		$(".Login").addClass("info");
	}
})

jQuery(document).ready(function($) {
    jQuery(function() {
      jQuery("#header4 #dnngo_megamenu .primary_structure").lavaLamp({fx: 'easeOutExpo', speed: 600});
      jQuery("#header5 #dnngo_megamenu .primary_structure").lavaLamp({fx: 'easeOutExpo', speed: 600});
    });
});

jQuery(document).ready(function ($) {
	jQuery('#to_top,#go_up').click(function () {
		jQuery('body,html').stop().animate({
			scrollTop: 0
		}, 800);
	});
	jQuery('.timeline_End').click(function () {
		jQuery('body,html').stop().animate({
			scrollTop: jQuery('.timeline_start').offset().top
		}, 800);
	});
	var backtop = function () {
		Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop) > 245 ? jQuery('#to_top').fadeIn(300) : jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function () {
		backtop();
	})
	$(window).scroll(function () {
		backtop();
	})

});

jQuery(document).ready(function ($) {
    $("#header_slide").on("click", function () {
        var e = $(this), box = $("#box-container"), ri = $(".rightmain");
        if (box.length != 0) {
            if (box.hasClass("delay")) return false;
            if (!box.hasClass("active")) {
                box.addClass("active");
                e.removeClass("active");
                $(this).delay(500).queue(function () {
                    ri.one("click", function () {
                        box.removeClass("active").addClass("delay").delay(500).queue(function () { $(this).removeClass("delay").dequeue() });
                        e.addClass("active");
                    })
                    $(window).one("scroll", function () {
                        box.removeClass("active").addClass("delay").delay(500).queue(function () { $(this).removeClass("delay").dequeue() });
                        e.addClass("active");
                    })
                    $(this).dequeue();
                })
            } else {
                box.removeClass("active").addClass("delay").delay(500).queue(function () { $(this).removeClass("delay").dequeue() });;
                e.addClass("active");
            }
        } else {
            e.toggleClass("active");
            $(".left-menu").toggleClass("active");
        }

    })
});

jQuery(document).ready(function ($) {
	if($("#dnn_content").offset().top<$(".header_bg").height()){
		$("#dnn_content").css("paddingTop",$(".header_bg").height())
	}
}) 

jQuery(document).ready(function ($) {
	if (!$(".HeaderPane").hasClass("DNNEmptyPane")) {
		$(".HeaderPane_mobile").html($(".HeaderPane .Normal").html())
	}
	if (!$(".HeaderPaneB").hasClass("DNNEmptyPane")) {
		$(".HeaderPaneB_mobile").html($(".HeaderPaneB .Normal").html()).css("marginTop","15px")
	}
	if (!$(".LogoPane").hasClass("DNNEmptyPane")) {
		$(".mobileLogoPane").html($(".LogoPane .Normal").html())
	}
	
}) 

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement("style");
	msViewportStyle.appendChild(
	document.createTextNode("@-ms-viewport{width:auto!important}"));
	document.getElementsByTagName("head")[0].
	appendChild(msViewportStyle);
}

jQuery(document).ready(function ($) {
		var e=$(".roll_menu");
		e.roll_menu({ MTop:e.offset().top+e.height()+100 }); 
});

jQuery(document).ready(function ($) {
	$(window).load(function() {
		$(".sector").sectorload();
	});
	$(window).scroll(function() {
		$(".sector").sectorload();
	})
});

jQuery(document).ready(function($) { 
	$(".modal").each(function() {$(this).insertAfter("body")}); 
});

jQuery(document).ready(function ($) {
	var e =$(".LeftPage_Box");
	e.each(function() {
		var e=$(this)
		var l=e.find(".leftMain"),offset=0;
			
		l.css("max-height",$(window).height() - offset);
		$(this).css("min-height",Math.min(l.height(),$(window).height() - offset));
		var t =e.offset().top - offset,
			th=e.height();
			h=l.height(),
			b =t+th-h,
			lt=th-h,
			r=true;
			
		function maxw(){
			l.css("max-height",$(window).height()-offset);
			e.css("min-height",Math.min(l.height(),$(window).height() - offset));
		}	
		function newb(){
			t =e.offset().top - offset;
			h=l.height() - offset;
			th=e.height() - offset;
			b =t+th-h;
			lt=th-h;
		}	
		$(window).resize(function(){
			maxw()
		})
		l.resize(function(){
			newb();
			maxw();
		})
		e.resize(function(){
			newb();
			if( l.css("position")=="fixed" ){
				l.css({"position":"static","width":"auto"})
				l.width(l.width())
				l.css("position","fixed")
			}
			if(l.css("position")=="absolute" ){
				l.css({"position":"static","width":"auto"})
				l.width(l.width())
				l.css("position","absolute")
			}
			maxw()
		})
		l.perfectScrollbar({wheelSpeed: 0.5});
		$(window).scroll(function(){
			if($(".roll_menu.roll_activated").length!=0){
				offset=$(".roll_menu.roll_activated").height();
				if(r){
					newb();
					maxw();
					r=false;
				}
			}else{
				offset=0
			}
			if($(window).scrollTop()>=t){
				l.width(l.width())
				l.css({"position":"fixed","top":offset})
			}
			if($(window).scrollTop()<t){
				l.width("auto")
				l.css({"position":"relative","top":0})
			}
			if($(window).scrollTop()>=b){
				l.css({"position":"absolute","top":lt})
			}
		})		
		
	});
})
