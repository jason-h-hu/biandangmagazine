$(document).ready(function(){
	updateCounters()
	setInterval(updateCounters, 100)
});

var updateCounters = function(){
	var ms = new Date().getTime();
	var hours = new Date().getHours();
	var money = ms/1000;
	money = Math.round(money)/100
	money = money - 10000000
	money = Math.round(money*100)/100
	$(".counters #money").html("$" +money);
	$(".counters #arbitrageurs").html(1012 + hours);

}