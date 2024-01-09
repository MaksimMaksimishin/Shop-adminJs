export class Popup {
    constructor() {
        this.popupElement = document.createElement('div');
        this.popupElement.classList.add('popup');
        document.body.appendChild(this.popupElement);
    }

    showPopup(message) {
        this.popupElement.textContent = message;
        this.popupElement.classList.add('popup-visible');

        setTimeout(() => {
            this.hidePopup();
        }, 2000); 
    }

    hidePopup() {
        this.popupElement.classList.remove('popup-visible');
    }
}