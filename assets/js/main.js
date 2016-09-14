(function() {
	var popup = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.hashHandler();
		},
		cacheDom: function() {
			this.$el = $('#popup');
			this.$content = this.$el.find('#popup__content');
			this.$close = this.$el.find('#popup__close');
			this.$links = $('.misc-article a');
			this.$window = $(window);
		},
		bindEvents: function() {
			this.$window.on('hashchange', this.hashHandler.bind(this));
		},
		open: function(source) {
			this.$content.load('popups/' + source + '.html', null, function() {
				$('#popup').fadeIn('slow');
			});
		},
		close: function() {
			this.$el.fadeOut('', (function() {this.$content.html('')}).bind(this));
		},
		hashHandler: function() {
			if(location.hash == '' || location.hash == '#close') {
				this.close();
			} else {
				this.open(location.hash.substr(1));
			}
		}

	}

	popup.init();
})()


// Page: Index
$(window).on('load', function() {
	if($('body#index').length > 0) {

		// Profil Image
		$('#hero .show-profil-image').hover(
			function() {
				$('#hero .profil-image').fadeIn(200);
			},
			function() {
				$('#hero .profil-image').fadeOut(200);
			}
		);

		// Misc Articles Masonry
		if($(document).width() > 700) {
			$('.masonry-grid').masonry({
				itemSelector: '.masonry-grid__item'
			})
			$('.misc-articles__load_more_link').hide();	

		} else {
			$(".misc-article").slice(2).hide();
			$('a.misc-articles__load_more_link').click(function() {
				$(".misc-article").show();
				$('.misc-articles__load_more_link').hide();	
			})
		};
	}
});

// Page: Article
$(document).ready(function() {

	if($('body#article').length > 0) {
		// Header Font Color
		if($('.article__hero').first().hasClass('article__hero--white-font')) {
			var $article__hero = $('.article__hero').first();
			var $header = $('header').first();

			$(document).on('scroll', function() {
				if($(document).scrollTop() > ($article__hero.height() - $header.height())) {
					$header.removeClass('header--white-font');
				} else{
					$header.addClass('header--white-font');
				}
			})
			$(document).scroll();
		}
	}
})