$(document).ready(function(){

	// PANEL
	(function(){
		var
			burger      = $('.sidebar__link--burger'),
			basket      = $('.sidebar__link--basket'),
			login       = $('.sidebar__link--login'),
			search      = $('.sidebar__link--search'),
			address     = $('.sidebar__link--address'),
			language    = $('.sidebar__link--language'),
			filtr       = $('.filtr-toggle__link'),
			open        = $('.sidebar__link'),
			close       = $('.panel__close-link'),
			filtrClose  = $('.filtr-close'),
			overlay  	= $('.overlay'),
			body     	= $('body');

		// $(open).click(function(e){
		// 	e.preventDefault();
		// 	if(!body.hasClass('panel-blocking')) {
		// 		body.addClass('panel-blocking');
		// 	} else {
		// 		body.removeClass('panel-blocking');
		// 	};
		// });

		// $(filtr).click(function(e){
		// 	e.preventDefault();
		// 	if(!body.hasClass('panel-blocking')) {
		// 		body.addClass('panel-blocking');
		// 	} else {
		// 		body.removeClass('panel-blocking');
		// 	};
		// });

		$(close).click( function(e){
			e.preventDefault();
			// body.removeClass('panel-blocking');
		});

		$(overlay).click(function(e){
			e.preventDefault();
			// body.removeClass('panel-blocking');
		});

		$(burger).click(function(e){
			e.preventDefault();
			$('.panel-burger').addClass('open');
			$(overlay).fadeIn();
			$('.header').addClass('header--panel-open');
			$('.main').addClass('main--panel-open');
			$('.sidebar').addClass('sidebar--panel-open');
		});

		$(basket).click(function(e){
			e.preventDefault();
			$('.panel-basket').addClass('open');
			$(overlay).fadeIn();
			$('.header').addClass('header--panel-open');
			$('.main').addClass('main--panel-open');
			$('.sidebar').addClass('sidebar--panel-open');
		});

		$(login).click(function(e){
			e.preventDefault();
			$('.panel-login').addClass('open');
			$(overlay).fadeIn();
			$('.header').addClass('header--panel-open');
			$('.main').addClass('main--panel-open');
			$('.sidebar').addClass('sidebar--panel-open');
		});

		$(search).click(function(e){
			e.preventDefault();
			$('.panel-search').addClass('open');
			$(overlay).fadeIn();
			$('.header').addClass('header--panel-open');
			$('.main').addClass('main--panel-open');
			$('.sidebar').addClass('sidebar--panel-open');
		});

		$(filtr).click(function(e){
			e.preventDefault();
			$('.filtr__wrapp').addClass('open');
			$(overlay).fadeIn();
		});

		// $(open).click(function(e){
		// 	e.preventDefault();
		// 	$('.panel-open').addClass('open');
		// 	$(overlay).fadeIn();
		// });

		$(close).click( function(e){
			e.preventDefault();
			$('.panel').removeClass('open');
			$(overlay).fadeOut();
			$('.header').removeClass('header--panel-open');
			$('.main').removeClass('main--panel-open');
			$('.sidebar').removeClass('sidebar--panel-open');
		});

		$(filtrClose).click( function(e){
			e.preventDefault();
			$('.filtr__wrapp').removeClass('open');
			$(overlay).fadeOut();
		});

		$(overlay).click( function(e){
			e.preventDefault();
			$('.panel').removeClass('open');
			$(overlay).fadeOut();
			$('.header').removeClass('header--panel-open');
			$('.main').removeClass('main--panel-open');
			$('.sidebar').removeClass('sidebar--panel-open');
			$('.language-popup').removeClass('open');
		});

		$(overlay).click( function(e){
			e.preventDefault();
			$('.filtr__wrapp').removeClass('open');
			$(overlay).fadeOut();
			// $('.header').css('z-index', '10');
			// $('.sidebar').css('z-index', '10');
		});

	}());


	// ACCORDION CATALOG
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
			typeDropdown   = $('.filtr-type__dropdown'),
			allDropdown    = $('.filtr__dropdown'),
			filtrToggle    = $('.filtr__toggle');

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


		// $(document).on('click', function(e) {
		//  	if (!$(e.target).allDropdown) {
		//    		if (allDropdown.is(':visible'))
		//     		allDropdown.hide();
		//     }
		  
		//   e.stopPropagation();
		// });



		// $(document).on('click', function(e) {
		//  	if (!$(e.target).closest(".title").length && $("div").is(".title")) {
		//    		if ($(".data-form-text").is(':visible'))
		//     	$('.data-form-text').hide();
		//     }
		  
		//   e.stopPropagation();
		// });

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

		// BX.addCustomEvent('onAjaxSuccess', function(){
		//    $('.catalog__img-list').slick();
	 //  	});
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


	// ORDER SELECT
	(function(){

		// начальная инициализация отображаемого текста при загрузке страницы
		$('.order-country__select').each(function(){
		    $(this).parent().children('.order-country__value').text( $(this).children('option:selected').text() );
		});

		// изменение текста при изменении select
		$('.order-country__select').change(function(){
		    $(this).parent().children('.order-country__value').text( $(this).children('option:selected').text() );
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

			// console.log(ndx);

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

	// TABS ORDER
	(function(){
		$('.order-tabs__item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.order-content__item');
				ndx = $this.index();

			// console.log(ndx);

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

	// TABS PERSONAL
	(function(){
		$('.personal__tabs-item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.personal__content-item');
				ndx = $this.index();

			// console.log(ndx);

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
				arrows: false,
				dots: false
			});

		} else if($(window).width() < '481') {

			// $('.gallery-prev__list').slick({
			// 	asNavFor: '.gallery__list',
			// 	vertical: true,
			// 	slidesToShow: 4,
			// 	focusOnSelect: true,
			// 	dots: true
			// 	arrows: false
			// });

			$('.gallery__list').slick({
				// asNavFor: '.gallery-prev__list',
				fade: true,
				arrows: false,
				dots: true
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
		if($(window).width() >= '768'){
			$('.panel__basket-list').jScrollPane({
				// verticalDragMinHeight: 160,
				// verticalDragMaxHeight: 160
			});
		};
	}());

	// CARD
	(function(){

		// меняю блоки местами
		if($(window).width() <= '480'){
			$('.card__color').insertBefore($('.card__buy'));
			$('.card__info-item--ma').insertBefore($('.card__info-item--pa'));

	    } else {
	    	// $('.card__buy').insertBefore($('.card__color'));
	    	// $('.card__info-item--pa').insertBefore($('.card__info-item--ma'));
	    };

	}());

	// CARD ACCORDION
	(function(){
		$('.card__accordion-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.card__accordion-list'),
				item = $this.closest('.card__accordion-item'),
				currentContent = item.find('.card__accordion-content'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('active')) {

				item
					.addClass('active')
					.siblings()
					.removeClass('active')
					.find('.card__accordion-content')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());

	// HEADER
	(function(){

		// меняю блоки местами
		if($(window).width() <= '768'){
			$('.sidebar__item--login').insertBefore($('.sidebar__item--basket'));
			$('.sidebar__item--address').insertBefore($('.sidebar__item--login'));

	    } else {
	    	$('.sidebar__item--basket').insertBefore($('.sidebar__item--login'));
			$('.sidebar__item--login').insertBefore($('.sidebar__item--address'));
	    };

	}());

	// Главная страница
	(function(){
		$('.index-popup__close-link').on('click', function(e){
			e.preventDefault();

			var
				popup = $('.index-popup');

			if(popup.hasClass('open')) {
				$('.overlay').fadeOut();
				$(popup).removeClass('open');
			}
		});


		$('.sidebar__link--language').on('click', function(e){
			e.preventDefault();

			var
				popupLang = $('.language-popup');

			if(!popupLang.hasClass('open')) {
				$('.overlay').fadeIn();
				$(popupLang).addClass('open');
			} else {
				$('.overlay').fadeOut();
				$(popupLang).removeClass('open');
			}
		});


		$('.language-popup__close-link').on('click', function(e){
			e.preventDefault();

			var
				popupLang = $('.language-popup');

			if(popupLang.hasClass('open')) {
				$('.overlay').fadeOut();
				$(popupLang).removeClass('open');
			}
		});
	}());


	// Страница оплата
	(function(){
		$('#paySb').on('click', function(e){
			e.preventDefault();
			$('.pay__shipping-popup').fadeIn();
		});
	}());

	// Страница оформить заказ
	(function(){
		$('.order__item-title__link').on('click', function(e){
			e.preventDefault();
			var popup = $('.order__item-title__link-popup');
			if (!popup.hasClass('show')) {
				popup.addClass('show');
			} else {
				popup.removeClass('show');
			};
		});


		if($(window).width() <= '768'){
			$('.order__right').insertBefore($('.order__left'));

	    } else {
	    	$('.order__left').insertBefore($('.order__right'));
	    };

    	// отоброжение заказа-детальное
	    $('.personal__order-block').on('click', function(e){
			e.preventDefault();

			var 
				$this = $(this),
				container = $this.closest('.personal__order-list'),
				item = $this.closest('.personal__order-item'),
				head = item.find('.personal__order-block'),
				content = item.find('.personal-details');
				// currentContent = item.find('.card__accordion-content');

			if (!content.hasClass('show')) {
				head.hide();
				content.addClass('show');
			} else {
				content.removeClass('show');
			};
		});

		$('.personal-details__close-link').on('click', function(e){
			e.preventDefault();
			console.log('!!!');
			var 
				$this = $(this),
				container = $this.closest('.personal__order-list'),
				item = $this.closest('.personal__order-item'),
				head = item.find('.personal__order-block'),
				content = item.find('.personal-details');

			if (!content.hasClass('show')) {
				head.hide();
				content.addClass('show');
			} else {
				head.show();
				content.removeClass('show');
			};
		});


	}());

	// Личный кабинет
	(function(){

		// меняю текс
		if($(window).width() <= '660'){
			$('.personal-details__number--text').text('Кол-во');
	    } else {
	    	$('.personal-details__number--text').text('Количество');
	    };

    }());

});


$(window).resize(function(){

	(function(){
		// меняю блоки местами 
		if($(window).width() <= '480'){
			$('.card__color').insertBefore($('.card__buy'));
			$('.card__info-item--ma').insertBefore($('.card__info-item--pa'));

	    } else {
	    	$('.card__buy').insertBefore($('.card__color'));
	    	$('.card__info-item--pa').insertBefore($('.card__info-item--ma'));
	    };
    }());

    // HEADER
	(function(){

		// меняю блоки местами
		if($(window).width() <= '768'){
			$('.sidebar__item--login').insertBefore($('.sidebar__item--basket'));
			$('.sidebar__item--address').insertBefore($('.sidebar__item--login'));

	    } else {
	    	$('.sidebar__item--basket').insertBefore($('.sidebar__item--address'));
			$('.sidebar__item--login').insertBefore($('.sidebar__item--address'));
	    };

	}());

	(function(){
		// меняю блоки местами 
		if($(window).width() <= '750'){
			$('.order__right').insertBefore($('.order__left'));

	    } else {
	    	$('.order__left').insertBefore($('.order__right'));
	    };
    }());

    // Личный кабинет
	(function(){

		// меняю текст
		if($(window).width() <= '660'){
			$('.personal-details__number--text').text('Кол-во');
	    } else {
	    	$('.personal-details__number--text').text('Количество');
	    };

    }());
});

