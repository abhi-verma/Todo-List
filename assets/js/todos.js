//Check off specific todos by clicking
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click X to delete todo item
$('ul').on("click", 'span', function(e) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//Add entered todo in the ul
$("input[type = 'text']").keypress(function(e) {
	if(e.which == '13' && $(this).val() != "") {	
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
		$(this).val('');
	}
});

$('.fa-plus').on("click", function() {
	$("input[type = 'text']").fadeToggle();
});