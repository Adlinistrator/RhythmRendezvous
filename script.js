const products = [
    {
        id: 1,
        title: "产品 1",
        price: 100,
        image: "product1.jpg"
    },
    {
        id: 2,
        title: "产品 2",
        price: 200,
        image: "product2.jpg"
    },
    {
        id: 3,
        title: "产品 3",
        price: 300,
        image: "product3.jpg"
    }
];

const productsEl = document.querySelector(".products");
const cartEl = document.querySelector(".cart");

let cart = [];

function renderProducts() {
    productsEl.innerHTML = "";

    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");

        const imageEl = document.createElement("img");
        imageEl.classList.add("product__image");
        imageEl.src = product.image;

        const titleEl = document.createElement("h2");
        titleEl.classList.add("product__title");
        titleEl.textContent = product.title;

        const priceEl = document.createElement("p");
        priceEl.classList.add("product__price");
        priceEl.textContent = `$${product.price}`;

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("product__button");
        buttonEl.textContent = "添加到购物车";

        buttonEl.addEventListener("click", () => {
            addToCart(product);
        });

        productEl.appendChild(imageEl);
        productEl.appendChild(titleEl);
        productEl.appendChild(priceEl);
        productEl.appendChild(buttonEl);

        productsEl.appendChild(productEl);
    });
}

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartEl.innerHTML = "";

    cart.forEach(product => {
        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart__item");

        const imageEl = document.createElement("img");
        imageEl.classList.add("cart__image");
        imageEl.src = product.image;

        const titleEl = document.createElement("p");
        titleEl.classList.add("cart__title");
        titleEl.textContent = product.title;

        const priceEl = document.createElement("p");
        priceEl.classList.add("cart__price");
        priceEl.textContent = `$${product.price}`;

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("cart__button");
        buttonEl.textContent = "删除";

        buttonEl.addEventListener("click", () => {
            removeFromCart(product);
        });

        cartItemEl.appendChild(imageEl);
        cartItemEl.appendChild(titleEl);
        cartItemEl.appendChild(priceEl);
        cartItemEl.appendChild(buttonEl);

        cartEl.appendChild(cartItemEl);
    });
}

function removeFromCart(product) {
    cart = cart.filter(item => item.id !== product.id);
    renderCart();
}

renderProducts();
