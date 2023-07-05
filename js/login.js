let login = document.querySelector('.login');
let containerProfile=document.querySelector('.profile__container')

	login.addEventListener('click', function(){
		login.classList.toggle('loginIsActive');
		if (login.classList.contains('loginIsActive')) {
			containerProfile.classList.add('profileActive');
		} else {
			containerProfile.classList.remove('profileActive');
		}
	
});

