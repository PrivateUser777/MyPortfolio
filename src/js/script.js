@@include('./jquery-3.5.1.min.js')
@@include('./fontawesome.min.js')
@@include('./vue.global.js')
@@include('./aos.js')
@@include('./vue.js')

window.addEventListener('DOMContentLoaded', () => {

    
    
 //!Меню бургер
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    const headerList = document.querySelector('.header__list');
    const headerItem = document.querySelectorAll('.header__item');
    const headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__burger_active');
        headerList.classList.toggle('header__list_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
           headerBurger.classList.toggle('header__burger_active');
            headerList.classList.toggle('header__list_active');
        });
    }); 
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

  //!Плавный скрол по якорям
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 51;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

  //!Анимация меню при скроле
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY - 650;

		document.querySelectorAll('section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
					document.querySelectorAll('.header__link').forEach((el) => {
						if (el.classList.contains('menu-active')) {
							el.classList.remove('menu-active');
						}
					});
					document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('menu-active');
			}
		});
	});
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    
    AOS.init({
        // Global settings:
        disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    
    // $('.skills__item').addClass('wow animate__animated animate__bounceInDown');
    // $('.skills__item').attr('data-aos', 'fade-in');

    // $('.advantages__item').addClass('wow animate__animated animate__zoomInUp');
    // $('.advantages__item').attr('data-wow-offset', '200');

    // $('.cards__card').addClass('wow animate__animated animate__flipInY');
    // $('.cards__card').attr('data-wow-offset', '200');

    
    // $(window).scroll(function (event) {
    //     var s = 0 - $(this).scrollTop() / 1.5; 
    //     $('.fullscreen').css('transform', 'translate3d(0, ' + s + 'px, 0)');
    // });



    
});