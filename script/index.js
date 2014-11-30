
var pathName = "img/stock/"
var images = ["club", "drink1", "music_festival", "drink2", "football", "drink3", "wedding"];

$(document).ready(function(){
	generateNavigator(images);
	setInterval(cycleImage, 3000);

});

var generateNavigator = function(imageNames){
	for (var i = 0; i < imageNames.length; i++){
		var imageName = imageNames[i];
		makeNavigatorButton(imageName);
	}
	$(".navigatorButton").click(function(){
		var imageName = $(this).attr("id");
		setImage(imageName);
	})
	var imageName = $(".navigatorButton").eq(0).attr("id");
	setImage(imageName);
}

var makeNavigatorButton = function(imageName){
	var liHref = "javascript:void(0)";
	var liID = imageName;
	var liElement = "<a href='" + liHref + "'><div id='" + liID + "'class='navigatorButton'></div></a>";
	$(liElement).appendTo(".navigator");
}

var setImage = function(imageName){
	var imgName = pathName + imageName + ".jpg";
	$(".header .myGallery").css("background-image", "url('" + imgName + "')");
	$(".myNavbar a img").css("z-index", "999999");
	$(".header .myGallery img").css("z-index", "1");
	$(".header .myGallery .main").fadeOut(500, function(){
		$(this).attr("src", imgName);
		$(this).fadeIn(0);
	})
	$(".navigatorButton").each(function(){
		if ($(this).attr("id") == imageName){
			$(this).addClass("selected");
		}
		else{
			$(this).removeClass("selected");
		}
	});	
}

var cycleImage = function(){
	var index = 0;
	$(".navigatorButton").each(function(i){
		if ($(this).hasClass("selected")){
			index = i
		}
	});	
	index = (index + 1) % $(".navigatorButton").length;
	var imageName = $(".navigatorButton").eq(index).attr("id");
	setImage(imageName);
}