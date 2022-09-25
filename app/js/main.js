let popupBg = document.querySelector('.popup__background');
let popup = document.querySelector('.popup__form');
let openPopupButtons = document.querySelectorAll('.js-popup-open');
let closePopupButton = document.querySelector('.popup__close');

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        popupBg.classList.add('popup__background_active');
        popup.classList.add('popup__form_active');
    })
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('popup__background_active');
        popup.classList.remove('popup__form_active');
    }
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('popup__background_active'); 
    popup.classList.remove('popup__form_active');
});