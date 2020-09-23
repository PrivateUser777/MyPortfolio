@@include('./jquery-3.5.1.min.js')
@@include('./fontawesome.min.js')
@@include('./vue.js')
@@include('./vue-vue.js')

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
    

});