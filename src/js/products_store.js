initializeStore = () => {
    let productArea = document.querySelector('.products')
    products.map((product) => {
        productArea.innerHTML += `
            <div class="product_card">
                <div class="product_card_header">
                    <img src="${product.image}" alt="${product.name}" title="${product.name}">
                </div>
                <div class="product_card_body">
                    <div>
                        <h6>${product.name}</h6>
                    </div>
                    <a href="#items" class="addCart" key="${product.id}">Add to Cart</a>
                </div>
            </div>
        `
    })
}

initializeStore()








