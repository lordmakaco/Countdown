fvar count = new Date("dec 1,2019 00:01:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
		var d = count - now;

	var days = Math.floor(d/(1000*60*60*24));
	var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((d%(1000*60*60))/(1000*60));
	if(seconds < 10) {
		seconds = "0"+seconds
	}
	var seconds = Math.floor((d%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(d <= 0){
	clearInterval(x);
}
},1000);
