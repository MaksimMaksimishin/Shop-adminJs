export class Cart {
    constructor() {
        this.items = [];
        this.listeners = [];
        this.loadCartFromLocalStorage(); // Загрузка корзины из localStorage
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ product, quantity: 1 });
        }

        this.notifyListeners();
    }

    removeItem(product) {
        const existingItem = this.items.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity--;
            if (existingItem.quantity === 0) {
                this.items = this.items.filter(item => item !== existingItem);
            }

            this.notifyListeners();
        }
    }

    clearCart() {
        this.items = [];
        this.notifyListeners();
    }

    getTotalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener());
        this.saveToLocalStorage(); // Сохранение корзины в localStorage при каждом изменении
    }

    loadCartFromLocalStorage() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.items = JSON.parse(storedCart);
            this.notifyListeners();
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}
