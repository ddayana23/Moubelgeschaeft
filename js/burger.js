
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if(toggle && nav) {
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('menu-open');
		})
	}
};

const menuOpen = () => {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
const menuClose = () => {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}

showMenu('nav-toggle', 'nav-menu');