const copyrightCloseBtn = document.querySelector('.copyright-info i')
copyrightCloseBtn.onpointerdown = function(){
    document.querySelector('.copyright-info').style.display = 'none';
}

class Navigation{
    constructor(){
        this.hambugerBtn = document.querySelector('.hamburger');
        this.hambugerBtn.addEventListener('pointerdown', this.toggleMobileMenu);

        const returnBtns = document.querySelectorAll('.mobile-menu .submenu-heading');
        returnBtns.forEach(btn => btn.addEventListener('pointerdown', this._menuBack));

        const submenuListeners = document.querySelectorAll('.menu-item');
        submenuListeners.forEach( listener => listener.addEventListener('pointerdown', this.handleMobileMainMenu));

        this.submenuOpen = false;

        this.dropdownMenuLinks = document.querySelectorAll('.main-menu .menu-links li');
        this.dropdownMenuLinks.forEach(link => link.addEventListener('pointerdown', this.handleDropdownMenu));
        
        this.menuShowcaseLinks = document.querySelectorAll('.whats-new .middle li');
        this.menuShowcaseLinks.forEach(link => link.addEventListener('mouseover', this.handleMenuShowcase));

        this.footerMenuBtns = document.querySelectorAll('.footer-submenu');
        this.footerMenuBtns.forEach(btn => btn.addEventListener('pointerdown', this.handleMobileMainMenu));
    }

    toggleMobileMenu(){
        navigation._highlightMenuElement(navigation.hambugerBtn);

        const mobileMenu = document.querySelector('.mobile-menu');
        const icon = navigation.hambugerBtn.querySelector('i');
        if(mobileMenu.style.display === 'none'){
            icon.classList.toggle('visible');
            icon.classList.toggle('hidden');
            setTimeout(() => {
                setTimeout(() => {
                    icon.classList.toggle('visible');
                     icon.classList.toggle('hidden');
                 }, 150);
                icon.classList.replace('fa-bars', 'fa-xmark');
            }, 150);

            mobileMenu.style.display = 'block';
            setTimeout(() => {
                mobileMenu.classList.toggle('visible');
                mobileMenu.classList.toggle('hidden');  
           }, 1);
        }else{
            icon.classList.toggle('visible');
            icon.classList.toggle('hidden');
            setTimeout(() => {
                setTimeout(() => {
                    icon.classList.toggle('visible');
                     icon.classList.toggle('hidden');
                 }, 150);
                icon.classList.replace('fa-xmark', 'fa-bars');
            }, 150);
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('visible');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 400);
        }
    }

    handleMobileMainMenu(e){
        //also used to handle mobile footer menu
        const eventTrigger = e.currentTarget;

        let submenu;

        if(eventTrigger.querySelector('div:first-child')){
            navigation._highlightMenuElement(eventTrigger.querySelector('div:first-child'));
             submenu = eventTrigger.querySelector('.submenu');
        }else{
            navigation._highlightMenuElement(eventTrigger);
            submenu = eventTrigger.querySelector('ul')
        }
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

    handleDropdownMenu(e){
        const currentlink = e.currentTarget;
        navigation.dropdownMenuLinks.forEach(link =>{
            if(link === currentlink){
                link.classList.toggle('selected');
            }else{  
                link.classList.remove('selected')
            }     
        })

        let currentMenu;
        if(currentlink.textContent=== 'Products'){
            currentMenu = document.querySelector('.dropdown-submenu.submenu-products');
        }else if(currentlink.textContent=== 'ODM Solutions'){
            currentMenu = document.querySelector('.dropdown-submenu.ODM-Solutions');
        }else if(currentlink.textContent=== "What's New"){
            currentMenu = document.querySelector('.dropdown-submenu.whats-new');
        }

        const menus= document.querySelectorAll('.dropdown-submenu');
        menus.forEach(menu =>{
            if(menu.style.display === 'block' && menu != currentMenu){
                menu.classList.toggle('hidden');
                menu.classList.toggle('visible');
              setTimeout(() => {
                  menu.style.display = 'none';
              }, 200);
            }
        })

        if(currentMenu.style.display === 'none'){
            currentMenu.style.display = 'block';
            setTimeout(() => {
                currentMenu.classList.toggle('visible');
                currentMenu.classList.toggle('hidden');  
           }, 1);
        }else{
            currentMenu.classList.toggle('hidden');
            currentMenu.classList.toggle('visible');
            setTimeout(() => {
                currentMenu.style.display = 'none';
            }, 200);
        }

    }

    handleMenuShowcase(e){
        const currentlink = e.currentTarget;

        let linkIndex;
        for(let i = 0; i< navigation.menuShowcaseLinks.length; i++){
            if(navigation.menuShowcaseLinks[i] == currentlink){
                linkIndex = i;
            }
        }

        const showcaseImage = document.querySelector('.whats-new .photo-section img');
  
        switch (linkIndex){
            case 0:
            showcaseImage.setAttribute('src', 'img/menu-showcase/1.jpeg')
            break;
            case 1:
            showcaseImage.setAttribute('src', 'img/menu-showcase/2.png')
            break;
            case 2:
            showcaseImage.setAttribute('src', 'img/menu-showcase/3.jpeg')
            break;
            case 3:
            showcaseImage.setAttribute('src', 'img/menu-showcase/4.jpeg')
            break;
            case 4:
            showcaseImage.setAttribute('src', 'img/menu-showcase/5.jpeg')
            break;
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
            }, 200);
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