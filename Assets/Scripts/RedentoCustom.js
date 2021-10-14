jQuery(document).ready(function ($) 
{
	if("off" == "on")     
	{ 
	  jQuery.fn.randomize = function(selector)         
	  {             
		var elems = selector ? $(this).find(selector) : $(this).children(), parents = elems.parent();             
		parents.each(function()             
		{
		  $(this).children(selector).sort(function()                 
		  {  
			return Math.round(Math.random()) - 0.5;
		  }).detach().appendTo(this);
		});
		return this;
	  };
	  $('#LayerGallery4316 .tp-banner > ul').randomize('li');
	}
	if(typeof MobileDetect == "function") 
	{
	  var md = new MobileDetect(window.navigator.userAgent), phone = md.phone(), tablet = md.tablet();
	  if(phone)
	  {
		$("#LayerGallery4316 .tp-slides-item,#LayerGallery4316 .tp-caption").each(function() {
		  if($(this).data("displayphone")=="off")
		  {
			$(this).remove();
		  }
		})
	  }
	  else if(tablet)
	  {
		$("#LayerGallery4316 .tp-slides-item,#LayerGallery4316 .tp-caption").each(function()
		{
		  if($(this).data("displaytablet")=="off")
		  {
			$(this).remove();
		  }
		})
	  }
	  else
	  {
		$("#LayerGallery4316 .tp-slides-item,#LayerGallery4316 .tp-caption").each(function()
		{
		  if($(this).data("displaydesktop")=="off")
		  {
			$(this).remove();
		  }
		})
	  }
	}
	$('#LayerGallery4316 .tp-banner .tp-caption,#LayerGallery4316 .tp-banner .tp-caption > *').each(function()
	{
	  $(this).html($(this).html().trim())
	});
	$('#LayerGallery4316 .tp-banner').show().revolution({
	  delay: 6000,
	  startwidth:960,
	  startheight:560,
	  fullScreenAlignForce:"off",
	  autoHeight:"off",
	  hideTimerBar:"off",
	  hideThumbs:200,
	  hideNavDelayOnMobile:1500,
	  thumbWidth:100,
	  thumbHeight:50,
	  thumbAmount:3,
	  navigationType:"bullet",
	  navigationArrows: "solo",
	  navigationInGrid:"off",
	  hideThumbsOnMobile:"off",
	  hideBulletsOnMobile:"off",
	  hideArrowsOnMobile:"off",
	  hideThumbsUnderResoluition: 0,
	  navigationStyle:"preview1",
	  navigationHAlign:"center",
	  navigationVAlign:"bottom",
	  navigationHOffset:0,
	  navigationVOffset: 20,
	  soloArrowLeftHalign: "left",
	  soloArrowLeftValign: "center",
	  soloArrowLeftHOffset:20,
	  soloArrowLeftVOffset: 0,
	  soloArrowRightHalign: "right",
	  soloArrowRightValign: "center",
	  soloArrowRightHOffset: 20,
	  soloArrowRightVOffset: 0,
	  keyboardNavigation:"off",
	  touchenabled:"on",
	  onHoverStop:"on",
	  startWithSlide: 0,
	  stopAtSlide:-1,
	  stopAfterLoops:-1,
	  hideCaptionAtLimit:0,
	  hideAllCaptionAtLimit:0,
	  hideSliderAtLimit:0,
	  fullWidth:"off",
	  fullScreen:"off",
	  minFullScreenHeight:0,
	  fullScreenOffsetContainer:"",
	  fullScreenOffset: 0,
	  dottedOverlay: "none",
	  forceFullWidth: "off",
	  spinner: "spinner0",
	  swipe_treshold: 75,
	  swipe_min_touches: 1,
	  drag_block_vertical: true,
	  parallax: "mouse",
	  parallaxLevels: "[10,7,4,3,2,5,4,3,2,1]",
	  parallaxBgFreeze: "off",
	  parallaxOpacity: "on",
	  parallaxDisableOnMobile: "off",
	  panZoomDisableOnMobile: "off",
	  simplifyAll: "on",
	  minHeight: 0,
	  shadow:0 
	}); 

}); 