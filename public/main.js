$(document).ready(function(){
	var Root_Url = window.location.href;
	var naturalLink = Root_Url + "November 28th, 2017";
	var unixLink = Root_Url + "1450137600";
	$("#natural-link").text(naturalLink);
	$("#unix-link").text(unixLink);
	var links = '<a target="_blank" href="'+naturalLink+'">Try First link</a><a target="_blank" href="'+unixLink+'">Try Second link</a>'
	$("#try-it").append(links);
});
