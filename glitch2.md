---
layout: gallery
title: Glitch Gallery 2
---

<div id="nestedslider_container" class="slider_container">
	<div data-u="loading" class="loading">
		<div class="load-back"></div>
		<div class="load-fore"></div>
	</div>
	<div data-u="slides" class="slides">
		<div>
			<div id="slider1_container" class="slider_container">
				<div data-u="slides" class="slides">
					<div><img data-u="image" src="/images/glitch/roots/roots.jpg"></div>
					<div><img data-u="image" src="/images/glitch/roots/set1.jpg"></div>
					<div><img data-u="image" src="/images/glitch/roots/set4.jpg"></div>
					<div><img data-u="image" src="/images/glitch/roots/set3.jpg"></div>
				</div>
				<div data-u="navigator" class="jssorb03 navi"> <!-- bullet navigator item prototype -->
			    	<div data-u="prototype"><div data-u="numbertemplate"></div></div>
			    </div>
			    <span u="arrowleft" class="jssora12l"></span>
			    <!-- Arrow Right -->
			    <span u="arrowright" class="jssora12r"></span>
				<a style="display: none" href="http://www.jssor.com">Bootstrap Slider</a>
			</div>
			<div data-u="thumb">
				<img class="thumbnail" src="/images/glitch/roots/thumb.jpg" />
				<!--<div class="title_back"></div>
				<div class="title">
				    
				</div>-->
			</div>
		</div>
		<div>
			<div id="slider2_container" class="slider_container">
				<div data-u="slides" class="slides">
					<div><img data-u="image" src="/images/abstract/5.png"></div>
					<div><img data-u="image" src="/images/abstract/6.png"></div>
					<div><img data-u="image" src="/images/abstract/7.png"></div>
					<div><img data-u="image" src="/images/abstract/thing.png"></div>
					<div><img data-u="image" src="/images/abstract/dunes.png"></div>
					<div><img data-u="image" src="/images/abstract/star.png"></div>
				</div>
				<div data-u="navigator" class="jssorb03 navi"> <!-- bullet navigator item prototype -->
			    	<div data-u="prototype"><div data-u="numbertemplate"></div></div>
			    </div>
			    <span u="arrowleft" class="jssora12l"></span>
			    <!-- Arrow Right -->
			    <span u="arrowright" class="jssora12r"></span>
				<a style="display: none" href="http://www.jssor.com">Bootstrap Slider</a>
			</div>
			<div data-u="thumb">
				<img class="thumbnail" src="/images/abstract/thumb.png" />
				<!--<div class="title_back"></div>
				<div class="title">
				    
				</div>-->
			</div>
		</div>
	</div>
	<div data-u="thumbnavigator" class="jssort16" style="left: 0px; bottom: 0px;">
	    <!-- Thumbnail Item Skin Begin -->
	    <div data-u="slides" style="cursor: default;">
        	<!--<div class=p>-->
        	<div data-u="prototype" class="p">
	            <div data-u="thumbnailtemplate" class="t"></div>
	        </div>
	    </div>
	    <!-- Thumbnail Item Skin End -->
	</div>
	<a style="display: none" href="http://www.jssor.com">Bootstrap Slider</a>
</div>
<!--<div data-u="thumb">
	<img src="/images/glitch/roots/roots.jpg" />
	<div class="title_back"></div>
	<div class="title">
	    Landscape
	</div>
</div>	-->


<script type="text/javascript" src="/js/jquery-1.9.1.min.js"></script>
<!-- use jssor.slider.mini.js (40KB) instead for release -->
<!-- jssor.slider.mini.js = (jssor.js + jssor.slider.js) -->
<script type="text/javascript" src="/js/jssor.js"></script>
<script type="text/javascript" src="/js/jssor.slider.js"></script>

<script>
jQuery(document).ready(function ($) {

    var _SlideshowTransitions = [
    //Fade
    { $Duration: 1200, $Opacity: 2 }
    ];
    var nestedSliders = [];
    $.each(["slider1_container", "slider2_container"], function(index, containerId){
    	var nestedOptions = {
	    	$FillMode: 5, // Way to fill image, 0: stretch, 1:contain, 2:cover, 4: actual size, 5: contain|actualsize

	        $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
	        $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
	        $AutoPlayInterval: 3000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
	        $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

	        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
	        $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
	        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
	        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
	        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
	        $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
	        $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
	        $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
	        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
	        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
	        $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

	        $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
	            $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
	            $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
	            $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
	            $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
	        },

	        $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
	            $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
	            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
	            $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
	            $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
	            $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
	            $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
	            $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
	            $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
	        },

	        $ArrowNavigatorOptions: {
	            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
	            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
	            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
	        }
	    };
	    nestedSliders.push(new $JssorSlider$(containerId, nestedOptions));
    });
	var options = {
        $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 2000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 300,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 80,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 3, 					                //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 2,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 0,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0),
        
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $AutoCenter: 3,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
            $Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
            $SpacingX: 0,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $SpacingY: 10,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
            $DisplayPieces: 3,                              //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 0,                          //[Optional] The offset position to park thumbnail
            $Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
            $DisableDrag: true,                            //[Optional] Disable drag or not, default value is false
            $Scale: true,
            $AutoCenter: 3
        }
    };
    var jssor_slider1 = new $JssorSlider$("nestedslider_container", options);

    function OnMainSliderPark(currentIndex, fromIndex) {
    	$.each(nestedSliders, function (index, nestedSlider){
    		nestedSlider.$Pause();
    	});

    	setTimeout(function (){
    		nestedSlider[currentIndex].$Play();
    	}, 2000);
    }

    jssor_slider1.$On($JssorSlider$.$EVT_PARK, OnMainSliderPark);
    OnMainSliderPark(0, 0);
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        /*var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;*/
        var parentWidth = document.body.clientWidth;
        if (parentWidth)
            jssor_slider1.$ScaleWidth(Math.min(parentWidth, 600));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
</script>