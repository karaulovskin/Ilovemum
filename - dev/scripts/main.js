$(document).ready(function(){

	// PANEL
	(function(){
		var
			burger   = $('.sidebar__link--burger'),
			basket   = $('.sidebar__link--basket'),
			login    = $('.sidebar__link--login'),
			search   = $('.sidebar__link--search'),
			address  = $('.sidebar__link--address'),
			language = $('.sidebar__link--language'),
			open     = $('.sidebar__link'),
			close    = $('.panel__close-link'),
			overlay  = $('.overlay'),
			body     = $('body');

		$(open).click(function(e){
			e.preventDefault();
			if(!body.hasClass('panel-blocking')) {
				body.addClass('panel-blocking');
			} else {
				body.removeClass('panel-blocking');
			};
		});

		$(close).click( function(e){
			e.preventDefault();
			body.removeClass('panel-blocking');
		});

		$(overlay).click(function(e){
			e.preventDefault();
			body.removeClass('panel-blocking');
		});

		$(burger).click(function(e){
			e.preventDefault();
			$('.panel-burger').addClass('open');
			$(overlay).fadeIn();
		});

		$(basket).click(function(e){
			e.preventDefault();
			$('.panel-basket').addClass('open');
			$(overlay).fadeIn();
		});

		$(login).click(function(e){
			e.preventDefault();
			$('.panel-login').addClass('open');
			$(overlay).fadeIn();
		});

		$(search).click(function(e){
			e.preventDefault();
			$('.panel-search').addClass('open');
			$(overlay).fadeIn();
		});

		$(address).click(function(e){
			e.preventDefault();
			$('.panel-address').addClass('open');
			$(overlay).fadeIn();
		});

		$(language).click(function(e){
			e.preventDefault();
			$('.panel-language').addClass('open');
			$(overlay).fadeIn();
		});

		$(open).click(function(e){
			e.preventDefault();
			$('.panel-open').addClass('open');
			$(overlay).fadeIn();
		});

		$(close).click( function(e){
			e.preventDefault();
			$('.panel').removeClass('open');
			$(overlay).fadeOut();
		});

		$(overlay).click( function(e){
			e.preventDefault();
			$('.panel').removeClass('open');
			$(overlay).fadeOut();
		});
	}());

	// ACCORDION
	(function(){
		$('.accordion__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.accordion__list'),
				item = $this.closest('.accordion__item'),
				currentContent = item.find('.accordion-sub__list'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('active')) {

				item
					.addClass('active')
					.siblings()
					.removeClass('active')
					.find('.accordion-sub__list')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());

	(function(){
		$('.accordion-sub__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.accordion-sub__list'),
				item = $this.closest('.accordion-sub__item'),
				currentContent = item.find('.accordion-sub-2__list'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('active')) {

				item
					.addClass('active')
					.siblings()
					.removeClass('active')
					.find('.accordion-sub-2__list')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());


	// FILTER
	(function(){
		var
			$this          = $(this),
			list           = $this.closest('.filtr'),
			otherDropdown  = list.find('.filtr__dropdown'),
			otherTitle     = list.find('.filtr__link'),
			color          = $('.filtr-color__link'),
			colorDropdown  = $('.filtr-color__dropdown'),
			size           = $('.filtr-size__link'),
			sizeDropdown   = $('.filtr-size__dropdown'),
			type           = $('.filtr-type__link'),
			typeDropdown   = $('.filtr-type__dropdown');

		$(color).click(function(e){
			e.preventDefault();
			if(!color.hasClass('active')) {
				otherTitle.removeClass('active'),
				otherDropdown.fadeOut(),
				color.addClass('active'),
				colorDropdown.fadeIn();
			} else {
				color.removeClass('active')
				colorDropdown.fadeOut();
			}
		});

		$(size).click(function(e){
			e.preventDefault();
			if(!size.hasClass('active')) {
				otherDropdown.fadeOut()
				size.addClass('active')
				sizeDropdown.fadeIn();
			} else {
				size.removeClass('active')
				sizeDropdown.fadeOut();
			}
		});

		$(type).click(function(e){
			e.preventDefault();
			if(!type.hasClass('active')) {
				otherDropdown.fadeOut()
				type.addClass('active')
				typeDropdown.fadeIn();
			} else {
				type.removeClass('active')
				typeDropdown.fadeOut();
			}
		});
	}());


	// CATALOG SIZE
	(function(){
		$('.size-box').on('click', function(e){
			e.preventDefault();

			var
				$this          = $(this),
				list           = $this.closest('.catalog-list'),
				otherContainer = list.find('.size-btns'),
				container      = $this.closest('.size-btns'),
				sizeBox        = $this.closest('.size-box'),
				otherContent   = list.find('.size-list'),
				choice         = $('.catalog__size-link'),
				title          = sizeBox.closest('.catalog__size-title'),
				titleIndicator = $('.catalog__size-title:after'),
				content        = sizeBox.find('.size-list');
				

			if(!container.hasClass('active')) {
				otherContainer.removeClass('active'),
				otherContent.fadeOut(),
				container.addClass('active'),
				content.fadeIn();
				titleIndicator.css();
			} else {
				container.removeClass('active'),
				content.fadeOut();
			};
		});

		// производим выбор размера
		$('.size-value').on('click', function(e){
			e.preventDefault();

			var
				$this   = $(this),
				size    = $this.closest('.size-value'),
				sizeBox = size.closest('.size-box'),
				title   = sizeBox.find('.size-choice');
			$(title).text('выбран размер ' + $(this).attr('rel'));
		});

		$('.catalog__buy').click(function(e){
			e.preventDefault();
			$('.catalog__img-bg').fadeIn()
		});

		$('.catalog__buy').click(function(e){
			e.preventDefault();
			$('.catalog__img-bg').fadeIn()
		});
	}());


	// CARD SIZE
	(function(){
		$('.card__size-title').on('click', function(e){
			e.preventDefault();

			$('.card__size-value-list').fadeToggle();
		});

		// производим выбор размера
		$('.card__size-value-link').on('click', function(e){
			e.preventDefault();

			var
				$this   = $(this),
				size    = $this.closest('.card__size-value-link'),
				sizeBox = size.closest('.card__size-wrapp'),
				title   = sizeBox.find('.card__size-title');
			$(title).text('выбран размер ' + $(this).attr('rel'));
			$('.card__size-value-list').fadeOut();
		});
	}());


	// CATALOG SLICK
	(function(){
		$('.catalog__img-list').slick();
	}());


	// CATALOG FILTR
	(function(){

		// начальная инициализация отображаемого текста при загрузке страницы
		$('.filtr-sort__select').each(function(){
		    $(this).parent().children('.filtr-sort__value').text( $(this).children('option:selected').text() );
		});

		// изменение текста при изменении select
		$('.filtr-sort__select').change(function(){
		    $(this).parent().children('.filtr-sort__value').text( $(this).children('option:selected').text() );
		});

	}());


	// TABS
	(function(){
		$('.card__tabs-item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.card__content-item');
				ndx = $this.index();

			console.log(ndx);

			$this
				.addClass('active')
				.siblings()
				.removeClass('active');

			member.eq(ndx)
				.addClass('active')
				.siblings()
				.removeClass('active');

		});
	}());


	// CARD SLICK
	(function(){

		if($(window).width() > '480'){

			$('.gallery-prev__list').slick({
				asNavFor: '.gallery__list',
				vertical: true,
				slidesToShow: 6,
				focusOnSelect: true
				// arrows: false
			});

			$('.gallery__list').slick({
				asNavFor: '.gallery-prev__list',
				fade: true,
				arrows: false
			});

		} else if($(window).width() < '480') {

			$('.gallery-prev__list').slick({
				asNavFor: '.gallery__list',
				vertical: true,
				slidesToShow: 4,
				focusOnSelect: true
				// arrows: false
			});

			$('.gallery__list').slick({
				asNavFor: '.gallery-prev__list',
				fade: true,
				arrows: false
			});
		};

	}());


	// CARD ZOOM
	(function(){

		$('.gallery__img').zoom();

	}());


	// CARD ZOOM
	(function(){




		$('.gallery__img').on('click', function() {				
			$('.gallery__img').zoom({
				"mobile" : "true",
				"on" : "grab",
				callback: function(){
					//$(".bx_bigimages_hide").show();
					//$(this).closest('.bx_bigimages').find('.bx_bigimages_aligner img')[0]).colorbox();
					$(this).colorbox({
						opacity: '',
						close: '&times;',
						title: $('.card__title-text').text(),
						href: this.src
					});
				}
			});
			
		});

		$('.gallery__img').zoom({
			callback: function(){
				//$(this).closest('.bx_bigimages').find('.bx_bigimages_aligner img')[0]).colorbox();
				$(this).colorbox({
					opacity: '',
					close: '&times;',
					title: $('.card__title-text').text(),
					href: this.src
				});
			}
		});

	}());


	// CARD SHOP-DOTS
	(function(){

		var
			trigger   = $('.card__shops-wrapp'),
			list      = $('.card__shops-list');

		$('.card__shops-trigger').click(function(e){
			e.preventDefault();
			
			if(!trigger.hasClass('active')) {
				trigger.addClass('active')
				list.fadeIn();
			} else {
				trigger.removeClass('active')
				list.fadeOut();
			}

		
		});

	}());


	// SCROLL
	(function(){

		$('.panel__basket-list').jScrollPane({
			verticalDragMinHeight: 160,
			verticalDragMaxHeight: 160
		});

	}());

});

