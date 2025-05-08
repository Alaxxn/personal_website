import { toHtmlElement } from "../toHtmlElement.mjs";

const PRODUCTS = [ // Imagine this data came in via the server
    {
        name: "Elder Chocolate Truffles, 2oz",
        description: "The best of the best in chocolate truffles.",
        imageSrc: "https://placehold.co/200x200",
        alt: "Cookies",
        price: 10,
        numInCart: 2
    },
    {
        name: "Jelly Belly Jelly Beans, 100 count",
        description: "Not for planting.",
        imageSrc: "https://placehold.co/200x200",
        alt: "Jelly Beans",
        price: 5,
        numInCart: 1
    },
    {
        name: "Kettle Chips, 8oz",
        description: "Delicious and unhealthy.",
        imageSrc: "https://placehold.co/200x200",
        alt: "Chips",
        price: 3,
        numInCart: 0
    },
    {
        name: "Carrots, 2lb",
        description: "Delicious and healthy.",
        imageSrc: "https://placehold.co/200x200",
        alt: "Carrots",
        price: 2,
        numInCart: 0
    }
];

/**
 * Turns a product data object into HTML.
 *
 * @param product product data
 * @return {HTMLElement} HTML element representing the product data
 */
function renderProductCard(product) {
    return toHtmlElement(`
    <article>
        <img src="${product.imageSrc}" alt="${product.alt}" />
        <div class="product-details">
            <h3>${product.name}</h3>
            <p>${product.description}.</p>
            <p class="price">$${product.price}</p>
            <div><button class="buy-button">Add to cart</button> <span class="num-in-cart">${product.numInCart} in cart</span></div>
        </div>
    </article>`);
}

/**
 * Recreates all product cards.
 */
function rerenderAllProducts() {
    /*
    1. remove all <article>s
    2. recreate them using the data in PRODUCTS
    3. modify the re-creation so it uses shouldProductBeVisible() (details are near the bottom of the lab directions)

    You can remove and recreate the heading element if it makes things easier.
     */

    const cards = document.querySelector(".product-list");

    // Step 1: remove only <article> elements
    for (const child of [...cards.children]) {
        if (child.tagName.toLowerCase() === "article") {
            child.remove();
        }
    }
    for (let product of PRODUCTS) {
        document.querySelector(".product-list").append(renderProductCard(product));
    }
}

rerenderAllProducts();


/**
 * Recreates all cart panel info.
 */

function renderCart(product) {
    return toHtmlElement(`
    <p>${product.alt} x${product.numInCart}</p>
     <button class="remove-button" aria-label="Remove Shoes">Remove</button>`);
}

function rerenderCart() {
    /*
    1. remove all card items
    2. recreate them and the remove buttons based off the data in PRODUCTS
     */
    const cart = document.querySelector(".cart-items");
    for (const child of [...cart.children]) {
            child.remove();
        }

    for (let product of PRODUCTS) {
        console.log(product);
        if (product.numInCart > 0){
        document.querySelector(".cart-items").append(renderCart(product));
        }
    }
    
}
rerenderCart();

const minPriceInput = document.querySelector("#minPrice");
const maxPriceInput = document.querySelector("#maxPrice");

/**
 * Returns whether a product should be visible based on the current values of the price filters.
 *
 * @param product product data
 * @return {boolean} whether a product should be visible
 */
function shouldProductBeVisible(product) {

}
