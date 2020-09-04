updateCart = () => {
    let cartArea = document.querySelector('.cart')
    cartArea.innerHTML = ''
    products.map(item => {
        if (item.quantity > 0) {
            cartArea.innerHTML += `
            <div class="cart_card">
                <img src="${item.image}" alt="">
                <h6>${item.name}</h6>
               <div>
                    <button type="button" class="button_quantity min" data-id='${item.id}'>-</button>
                        <span>${item.quantity}</span>
                    <button type="button" class="button_quantity more" data-id='${item.id}'>+</button>
               </div>
               <button type="button" class="close" data-id='${item.id}'>X</button>
            </div>
            `
        }
    })

    deleteProduct()
    changeQuantity()
}

buttonAddCart = () => {
    let buttonAdd = document.querySelectorAll('.addCart');
   
    buttonAdd.forEach(element => {
        element.addEventListener('click', () => {
            let key = element.getAttribute('key')
            products[key].quantity++
            updateCart()
            cartquantity(key)
        })
    })
}

cardQuantity = 0

cartquantity = (key)=>{
    if (products[key].quantity == 1) {
        cardQuantity++
    }

    if(products[key].quantity == 0){
        cardQuantity--
    }
    document.querySelector('#total').innerHTML = ''
    document.querySelector('#total').innerHTML = `${cardQuantity}`
}

changeQuantity = () => {
    var buttonMore = document.querySelectorAll('.more')
    var buttonMin = document.querySelectorAll('.min')

    buttonMore.forEach(el => {
        el.addEventListener('click', () => {
            var id = el.getAttribute('data-id')
            products[id].quantity++
            updateCart()
        })
    })

    buttonMin.forEach(el => {
        el.addEventListener('click', () => {
            var id = el.getAttribute('data-id')
            if (products[id].quantity == 1) {
                products[id].quantity = 1
            } else {
                products[id].quantity--
            }
            updateCart()
        })
    })
}


deleteProduct = () => {
    var buttonClose = document.querySelectorAll('.close')
    buttonClose.forEach(el => {
        el.addEventListener('click', () => {
            var id = el.getAttribute('data-id')
            products[id].quantity = 0
            updateCart()
            cartquantity(id)
        })
    })
}

buttonAddCart()


