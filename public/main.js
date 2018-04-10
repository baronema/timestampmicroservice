$(document).ready(function(){
	var Root_Url = window.location.href;
	var naturalLink = Root_Url+"December 15, 2015";
	var unixLink = Root_Url + "1450137600";
	$("#natural-link").text(naturalLink);
	$("#unix-link").text(unixLink);
	var links = '<a target="_blank" href="'+naturalLink+'">Try First link</a><a target="_blank" href="'+unixLink+'">Try Second link</a>'
	$("#try-it").append(links);
});