class Navigation{
    constructor(){
        const submenuListeners = document.querySelectorAll('.menu-item');
        submenuListeners.forEach( listener => listener.addEventListener('pointerdown', this.handleMobileMainMenu));
    }
    handleMobileMainMenu(e){
        
       const highLightedEl = e.currentTarget.querySelector('div:first-child');
        highLightedEl.style.backgroundColor = '#ADE1F5';
        setTimeout(() => {
            highLightedEl.style.backgroundColor= 'transparent';
        }, 100);

       const submenu = e.currentTarget.querySelector('.submenu');
       if(submenu.classList.contains('rollable') || submenu.classList.contains('rolled')){
            submenu.classList.toggle('rolled');
            submenu.classList.toggle('rollable');
        }else{
            submenu.classList.toggle('hidden');
        } 

    }
}

const navigation = new Navigation;