const list = document.querySelector(`ul`)

const ButtonshowAll = document.querySelector(`.show-All`)

const buttonMapAll = document.querySelector(".map-all")

const buttonSumAll = document.querySelector(".Sum-all")

const filterAll = document.querySelector(".filter-All")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL',
    });

    return newValue
}

function showAll(productsArray) {

    let myLi = ``

    productsArray.forEach((product) => {
        myLi +=
            `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
         `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newprice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dar 10% de desconto
    }))

    showAll(newprice)

}

function SumAllItems() {
    const totalvalue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `
    <li>
       <p>O Valor Total dos Itens é R$ ${formatCurrency(totalvalue)}</p>
    </li>
     `
}

function filterAllItems() {

    const filterjustvegan = menuOptions.filter((product) => product.vegan)

    showAll(filterjustvegan)

}

ButtonshowAll.addEventListener(`click`, () => showAll(menuOptions))
buttonMapAll.addEventListener(`click`, mapAllItems)
buttonSumAll.addEventListener(`click`, SumAllItems)
filterAll.addEventListener(`click`, filterAllItems)



