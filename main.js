class Navigation{
    constructor(){
        const submenuListeners = document.querySelectorAll('.menu-item');
        submenuListeners.forEach( listener => listener.addEventListener('pointerdown', this.handleMobileMainMenu));

    }
    handleMobileMainMenu(e){
        const eventTrigger = e.currentTarget;
       const highLightedEl = eventTrigger.querySelector('div:first-child');
        highLightedEl.style.backgroundColor = '#ADE1F5';
        setTimeout(() => {
            highLightedEl.style.backgroundColor= 'transparent';
        }, 100);

       const submenu = eventTrigger.querySelector('.submenu');
       if(submenu.classList.contains('rollable') || submenu.classList.contains('rolled')){
            submenu.classList.toggle('rolled');
            submenu.classList.toggle('rollable');
        }else{
            submenu.style.display = 'block';
            submenu.classList.toggle('hidden');
            submenu.classList.toggle('visible');
            eventTrigger.removeEventListener('pointerdown', navigation.handleMobileMainMenu);
            
            function menuReturn(){
                submenu.classList.toggle('hidden');
                submenu.classList.toggle('visible');
                submenu.style.display = 'none';
                eventTrigger.addEventListener('pointerdown', navigation.handleMobileMainMenu);
            }

            const returnBtn = submenu.querySelector('div');
            console.log(returnBtn);
            returnBtn.addEventListener('pointerdown', menuReturn)
                
        } 

    }

}

const navigation = new Navigation;