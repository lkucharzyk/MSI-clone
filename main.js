class Navigation{
    constructor(){
        const returnBtns = document.querySelectorAll('.mobile-menu .submenu-heading');
        returnBtns.forEach(btn => btn.addEventListener('pointerdown', this._menuBack));

        const submenuListeners = document.querySelectorAll('.menu-item');
        submenuListeners.forEach( listener => listener.addEventListener('pointerdown', this.handleMobileMainMenu));

        this.submenuOpen = false;
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
        }else if(navigation.submenuOpen=== false){
            console.log('in');
            navigation.submenuOpen = true;
            submenu.style.display = 'block';
            submenu.classList.toggle('hidden');
            submenu.classList.toggle('visible');
           // eventTrigger.removeEventListener('pointerdown', navigation.handleMobileMainMenu);
            
            // function menuReturn(){
            //     submenu.classList.toggle('hidden');
            //     submenu.classList.toggle('visible');
            //     eventTrigger.addEventListener('pointerdown', navigation.handleMobileMainMenu);
            // }

            // const returnBtn = submenu.querySelector('div');
            // returnBtn.addEventListener('pointerdown', menuReturn)            
        } 
    }

    _menuBack(){
        //timeout to make sure this funciton dont fire before handleMobileMainMenu
        setTimeout(() => {
            const submenu = document.querySelector('.submenu.visible');
            console.log('back');
            submenu.classList.toggle('hidden');
            submenu.classList.toggle('visible');
            submenu.style.display = 'none';
            navigation.submenuOpen =false;
        }, 1);
    }

}

const navigation = new Navigation;