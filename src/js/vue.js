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
				{ title: 'Лендинг, интернет магазин', text: 'Интернет магазин адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'http://j90344fw.beget.tech/OnlineStore/', src: './img/Sites/OnlineStore.webp' },
				{ title: 'Лендинг, сайт финансовых решений', text: 'Данный лендинг адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'http://j90344fw.beget.tech/Relvise/', src: './img/Sites/Finance.webp' },
				{ title: 'Лендинг, доставка грузов из китая', text: 'Данный лендинг адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site01.webp' },
			]
		}
	}
}


Vue.createApp(Skills).mount('#skills');
Vue.createApp(Cards).mount('#cards');

                                                                                                                                                                    