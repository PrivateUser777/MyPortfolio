const Skills ={
	data(){
		return {
			cards: [
				{ title: 'HTML 5', text: 'Стандартизированный язык разметки документов в интернете', src: './img/Technologies/html.svg' },
				{ title: 'CSS 3', text: 'Язык описания внешнего вида документа', src: './img/Technologies/css.svg' },
				{ title: 'Sass', text: 'Один из самых популярных CSS препроцессоров.', src: './img/Technologies/sass.svg' },
				{ title: 'JavaScript ES6+', text: 'Язык программирования высокого уровня, использующийся для придания интерактивности веб- страницам', src: './img/Technologies/javaScript.svg' },
				{ title: 'VueJS', text: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов', src: './img/Technologies/vue.svg' },
				{ title: 'Gulp', text: 'Gulp - это инструмент, который помогает автоматизировать рутинные задачи веб-разработки.', src: './img/Technologies/gulp.svg' },
				{ title: 'Git', text: 'Git это одна из множества разных систем контроля версий (VCS)', src: './img/Technologies/git.svg' },
				{ title: 'PHP7', text: 'Наиболее часто применяемый язык программирования для разработки серверной части веб- сайтов и веб - приложений', src: './img/Technologies/php.svg' },
				{ title: 'Wordpress', text: 'Самая популярная система управления контентом для веб- сайтов', src: './img/Technologies/wordpress.svg' },
				{ title: 'NodeJS', text: 'Программная платформа, позволяющая использовать JavaScript как язык общего назначения вне окна браузера', src: './img/Technologies/nodejs.svg' }
			]
		}
	}
}

const Cards = {
   data(){
		return {
			cards: [
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site01.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site01.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site02.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site03.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site04.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site05.webp' },
				{ title: 'Сайт визитка', text: 'При создании этого сайта использовались следующие технологии: HTML5, CSS3, Vue.js, JavaScript, BEM, Sass, Gulp, Git, Php.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site06.webp' }            
			]
		}
	}
}


Vue.createApp(Skills).mount('#skills');
Vue.createApp(Cards).mount('#cards');

                                                                                                                                                                    