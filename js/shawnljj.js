$( document ).ready(function() {
	var $root = $('html, body');
	$('a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});

	$('.project-thumbnail').hover(
		function() { 
			$(this).find(".project-link").toggleClass("opaque"); 
			$(this).find(".project-image").toggleClass("translucent"); 
		},
		function() { 
			$(this).find(".project-link").toggleClass("opaque"); 
			$(this).find(".project-image").toggleClass("translucent"); 
		}
		);
	(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false || $("#exampleInputEmail1").val() == "") {
        event.preventDefault();
        event.stopPropagation();
      }else{
      	alert("EMAIL SENT!");
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

});