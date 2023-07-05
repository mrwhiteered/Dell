const btn = document.querySelector('.burger');
const menu = document.querySelector('.burger_menu');
const burger = document.querySelector('.burger');
btn.addEventListener('click', function(){
	menu.classList.toggle('burger_menu_on');
	
burger.classList.toggle('active');
	
})
