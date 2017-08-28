var one = "#10e88a",
		two = "#7f3995",
		three = "#0d78e7",
		four = "#f88f18",
		five = "#bb6774";

$(window).on("scroll touchmove", function() {
  var positionTwo = $("#two").position().top - ($("#two").position().top/2);
		if ($(document).scrollTop() >= $("#one").position().top) {
				$('.img-cover').css('background', $("#one").attr("data-color"));
        $('.subpage .image-background .motto .subtitle, .subpage .image-background .motto .title-1, .subpage .image-background .motto p, .subpage .advice-points > .row.narrow .text *').css('color', '#fff');
        $('.full-page .wrapper .text *, .advice-points .text *').css({color : '#fff', transition: 'color .5s'});

		};
		if ($(document).scrollTop() > positionTwo) {
				$('.img-cover').css('background', $("#two").attr("data-color"));
        $('.subpage .image-background .motto .subtitle, .subpage .image-background .motto .title-1, .subpage .image-background .motto p, .subpage .advice-points > .row.narrow .text *').css({color : '#000', transition: 'color .5s'});
        $('.full-page .wrapper .text h2').css({color : '#292929'});
        $('.full-page p, .full-page ul li, .advice-points .text *').css({color : '#414141'});
		};
});
