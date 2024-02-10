

 	// табы 

	 const tabNavItems = document.querySelectorAll('.tabs-deals__button');
	 // объекты навигации
	 	 const tabItems = document.querySelectorAll('.item-tabs'); // объекты табов
		 // используем делегирование
		// обращаемся ко всему документу и навешиваем прослушку на событие клик
		document.addEventListener("click", function (e) {
const targetElement = e.target; // получили клик
let currentActiveIndex = null; 
let newActiveIndex = null; 
if (targetElement.closest('.tabs-deals__button')) { 
	// если у нажатого элемента есть класс родительского элемента
	tabNavItems.forEach((tabNavItem, index) => {
		if (tabNavItem.classList.contains('active')) {
			// проверяем содежаться ли элементы с классом актив
			currentActiveIndex = index; 
			// получили активный индекс
			tabNavItem.classList.remove('active');
		}
		if (tabNavItem === targetElement) {
			newActiveIndex = index;
		}
	});
	targetElement.classList.add('active');
	tabItems[currentActiveIndex].classList.remove('active');
   tabItems[newActiveIndex].classList.add('active');
}
		});