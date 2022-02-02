'use strict'

const products = [
    {
        id: 1,
        name: "Ellery x m'o capsule 1",
        link: "product.html",
        image: "images/card-1.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.25
    },
    {
        id: 2,
        name: "Ellery x m'o capsule 2",
        link: "product.html",
        image: "images/card-2.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 3,
        name: "Ellery x m'o capsule 3",
        link: "product.html",
        image: "images/card-3.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 4,
        name: "Ellery x m'o capsule 4",
        link: "product.html",
        image: "images/card-4.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 5,
        name: "Ellery x m'o capsule 5",
        link: "product.html",
        image: "images/card-5.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 6,
        name: "Ellery x m'o capsule 6",
        link: "product.html",
        image: "images/card-6.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 7,
        name: "Ellery x m'o capsule 7",
        link: "product.html",
        image: "images/card-7.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 8,
        name: "Ellery x m'o capsule 8",
        link: "product.html",
        image: "images/card-8.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    },
    {
        id: 9,
        name: "Ellery x m'o capsule 9",
        link: "product.html",
        image: "images/card-9.jpg",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00
    }
];
let productContainer = document.querySelector('.catalog__wrap'),
cart = [];

document.querySelector('.cart').addEventListener('click',function(e){e.preventDefault(); this.classList.toggle('open')});
/**
* Эта функция должна вызываться при загрузке страницы.
* @param {Object} list список продуктов
*/

function renderPageContent(list){
    let productMarkup = list.map(product => getProductMarkup(product));
    productContainer.innerHTML = '';
    productMarkup.forEach(product => productContainer.insertAdjacentHTML('beforeend', product));
    let buttons = document.querySelectorAll('.overlay button');
    buttons.forEach(function(button){
        button.addEventListener('click', putToCart);
    });
}

/**
* Эта функция должна вызывается при клике на кнопку "В корзину".
* @param {clickEvent} e событие клика по кнопке
*/

function putToCart(e){
    let id = this.getAttribute('data-id'),
        inCart = cart.filter(function (product) {
            if (product.id == id){
                return 1;
            }
            return 0;
        });
        if (inCart.length>0){
            cart.forEach(product => {
                if (product.id == id){
                    product.addQuantity();
                }
            });
        } else {
            let toCart = products.filter(function (product) {
                if (product.id == id){
                    return 1;
                }
                return 0;
            });
            toCart.forEach(el => cart.push(new CartProduct(el.id, el.name, 1 ,el.price)));
        }       
    renderCart(cart);
}

function renderCart(cart){
    let cartMarkup = cart.map(product => getCartMarkup(product)),
        totalCartPrice = null, totalCartNumber = null;
    cart.forEach(product => {
        totalCartNumber += +product.quantity;
        totalCartPrice += +product.fullPrice;
    });
    document.querySelector('#cart table tbody').innerHTML = '';
    document.querySelector('.cart .cart__number').innerHTML = totalCartNumber;
    document.querySelector('#cart table tfoot').innerHTML = `<tr><th colspan="4">Товаров в корзине на сумму: $${totalCartPrice.toFixed(2)}</th></tr>`;
    cartMarkup.forEach(product => document.querySelector('#cart table tbody').insertAdjacentHTML('beforeend', product));
}

class CartProduct{
    constructor(id, name, quantity, price){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    getFullPrice(){
        this.fullPrice = this.price * this.quantity;
    }
    addQuantity(){
        this.quantity = this.quantity + 1;
    }
}

function getCartMarkup(product){
    product.getFullPrice();
    return `
            <tr>
                <td>${product.name}</td>
                <td>${product.quantity} шт.</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${product.fullPrice.toFixed(2)}</td>
            </tr>
        `
}

/**
 * Эта функция генерирует разметку товаров.
 * @param {Array} product объект продукта
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {link} product.link ссылка на продукт
 * @param {string} product.image путь до картинки товара
 * @param {string} product.description описание продукта
 * @param {number} product.price цена продукта
 * @returns {string} html-разметка для товара
 */
function getProductMarkup(product){
    return `
            <div class="card">
                <div class="card__image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="overlay">
                        <button data-id="${product.id}" class="btn btn-outline btn-svg btn-outline-white"><svg width="26" height="24"><use xlink:href="#cart-ico"></use></svg><span>Add to Cart</span></button>
                    </div>                        
                </div>
                <div class="card__footer">
                    <a href="${product.link}"><h3>${product.name}</h3></a>
                    <p>${product.description}</p>
                    <div class="price">$${product.price}</div>
                </div>
            </div>
        `
}

renderPageContent(products);