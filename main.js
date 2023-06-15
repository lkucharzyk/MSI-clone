class Navigation{
    constructor(){
        const submenuListeners = document.querySelectorAll('.menu-item');
        submenuListeners.forEach( listener => listener.addEventListener('pointerdown', this.handleMobileMainMenu));
    }
    handleMobileMainMenu(e){
        console.log(e.currentTarget);
       const submenu = e.currentTarget.querySelector('.submenu');
       console.log(submenu);
       
       if(submenu.classList.contains('rollable')){
            submenu.classList.toggle('rolled')
        }else{
            submenu.classList.toggle('hidden');
        } 

    }
}

const navigation = new Navigation;