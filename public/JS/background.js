$(document).mousemove(function(event){
	var item = $("#follow_bg");
	var startValueX = event.pageX;
	var endValueX = event.pageX +200;
	var startValueY = event.pageY;
	var endValueY = event.pageY +200;
	var duration = 16.67;
	
	item.animate({
		startValueX:endValueX,
		startValueY:endValueY
	},{
		duration:duration,
		easing:'linear',
		step:function(){
			item.css("left",-(startValueX / 3)+ "px");
			item.css("top",-(startValueY / 3)+ "px");
		}
	})
})