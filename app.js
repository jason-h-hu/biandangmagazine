$(document).ready(function() {

	$(".gallery .thumbnails a").click(function() {
		setImage($(this))
	});

	$(".icon").hover(
		function(){
			var path = $(this).attr("src");
			path = path.split("/")
			var fileName = path[path.length - 1]
			fileName = "img/icons/hover/" + fileName
			$(this).attr("src", fileName)
		},
		function(){
			var path = $(this).attr("src");
			path = path.split("/")
			var fileName = path[path.length - 1]
			fileName = "img/icons/normal/" + fileName
			$(this).attr("src", fileName)
		}
	);

	$(".icon").click(function(){ console.log("HIII"); });

});

function setImage(thumbnail){
	var path = thumbnail.attr("rel");
	$(".gallery .image").fadeOut('fast');
	window.setTimeout(function(){ 
		$(".gallery .image").attr("src", path);
	},200)
	$(".gallery .image").fadeIn('fast');

}