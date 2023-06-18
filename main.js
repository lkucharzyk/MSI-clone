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
        navigation._highlightMenuElement(eventTrigger.querySelector('div:first-child'));

       const submenu = eventTrigger.querySelector('.submenu');
       if(submenu.classList.contains('rollable') || submenu.classList.contains('rolled')){
            submenu.classList.toggle('rolled');
            submenu.classList.toggle('rollable');
        }else if(navigation.submenuOpen=== false){
            navigation.submenuOpen = true;
           submenu.style.display = 'block';
           setTimeout(() => {
                submenu.classList.toggle('visible');
                submenu.classList.toggle('hidden');  
           }, 1);
        } 
    }

    _menuBack(e){
        //timeout to make sure this funciton dont fire before handleMobileMainMenu
        navigation._highlightMenuElement(e.currentTarget);
        setTimeout(() => {
            const submenu = document.querySelector('.submenu.visible');
            submenu.classList.toggle('hidden');
            submenu.classList.toggle('visible');
            setTimeout(() => {
                submenu.style.display = 'none';
            }, 400);
            navigation.submenuOpen =false;
        }, 10);
    }

    _highlightMenuElement(element){
        element.style.backgroundColor = '#ADE1F5';
        setTimeout(() => {
            element.style.backgroundColor= 'transparent';
        }, 100);
    }

}

const navigation = new Navigation;