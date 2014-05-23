$(document).ready(function() {

	$.getJSON("../img/images.json", function(data){
		$.each(data, function(key, val){
  			renderThumbnail(val);
  		});
  		$(".gallery .thumbnails a").click(function() {
			setImage($(this))
		});
		setImage($(".gallery .thumbnails a"));
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
});

function setImage(thumbnail){
	var path = thumbnail.attr("rel");
	var caption = thumbnail.attr("caption")
	$(".gallery .image").fadeOut('fast');
	window.setTimeout(function(){ 
		$(".gallery .image").attr("src", path);
	},200)
	$(".gallery .image").fadeIn('fast');
	$(".caption").html(caption);
}

function renderThumbnail(metadata){
	var path = "../img/references/" + metadata.path;
	var caption = metadata.caption;
	var thumbnail = $(".thumbnails").append("<li><a href=\"#\" rel=\"" + path + "\" caption=\"" + caption + "\"onclick=\"return false;\"><div class=\"thumbnail\" style=\"background-image:url('" + path + "');\"></div></a></li>");
}

