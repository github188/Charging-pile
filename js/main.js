$(".pay1").click(function(){
	$(".pay1").css({"background-color": '#44b549'});
	$(".pay2").css({"background-color": '#2e2e38'});
	$(".xs").animate({'margin-left': '60px'});
	$(".w180-3-2").removeClass('dn');
	$(".w180-3-1").addClass('dn');
})
$(".pay2").click(function(){
	$(".pay1").css({"background-color": '#2e2e38'});
	$(".pay2").css({"background-color": '#00a0e9'});
	$(".xs").animate({'margin-left': '60px'});
	$(".w180-3-1").removeClass('dn');
	$(".w180-3-2").addClass('dn');
})


var intDiff = parseInt(5);//倒计时总秒数量
function timer(intDiff){
    var ds = window.setInterval(function(){
	    var minute=0,
	        second=0;//时间默认值        
	    if(intDiff > 0){
	        minute = Math.floor(intDiff / 60);
	        second = Math.floor(intDiff)-(minute * 60);
	    }
	    if (minute <= 9) minute = '0' + minute;
	    if (second <= 9) second = '0' + second;
	    $('#minute_show').html(minute+':'+second);
	    intDiff--;
	    if (second <= 0 && second <= 0) {
	    	clearInterval(ds);
	    	$('.s4-r').addClass('dn');
	    	$('.s4-l').css({width: '100%'});
	    	$(".f24").html("谢谢您的使用,祝您一路顺风!");
	    	$(".f50").html("充电已完成");
	    	$(".f14").html("期待您的下次使用");
	    }
    }, 1000);
} 



