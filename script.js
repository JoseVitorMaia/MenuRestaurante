const menu = [
    {
        id: 0,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: "$15.99",
        img: "imagens/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },

    {
        id: 1,
        title: "Diner Double",
        category: "lunch",
        price: "$13.99",
        img: "imagens/item-2.jpeg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },

    {
        id: 2,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: "$6.99",
        img: "imagens/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },

    {
        id: 3,
        title: "Country Delight",
        category: "breakfast",
        price: "$20.99",
        img: "imagens/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },

    {
        id: 4,
        title: "Egg Attack",
        category: "lunch",
        price: "$22.99",
        img: "imagens/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },

    {
        id: 5,
        title: "Oreo Dream",
        category: "shakes",
        price: "$18.99",
        img: "imagens/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },

    {
        id: 6,
        title: "Bacon Overflow",
        category: "breakfast",
        price: "$8.99",
        img: "imagens/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },

    {
        id: 7,
        title: "American Classic",
        category: "lunch",
        price: "$12.99",
        img: "imagens/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },

    {
        id: 8,
        title: "Quarantine Buddy",
        category: "shakes",
        price: "$16.99",
        img: "imagens/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },

    {
        id: 9,
        title: "Steak Dinner",
        category: "dinner",
        price: "$39.99",
        img: "imagens/item-10.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    }
]

// Menu
const telaMenu = document.querySelector('.telaMenu')
// Botões
const all = document.querySelector('.all')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const shakes = document.querySelector('.shakes')
const dinner = document.querySelector('.dinner')

all.addEventListener('click',function(){
    telaMenu.innerHTML = ""
    for (i = 0 ; i < menu.length; i++) {
        const telaItem = document.createElement('section')
        telaItem.setAttribute('class','item')
        const imgItem = document.createElement('img')
        imgItem.setAttribute('src',menu[i].img)
        const nomeItem = document.createElement('h3')
        nomeItem.innerText = menu[i].title
        const precoItem = document.createElement('span')
        precoItem.innerText = menu[i].price
        const descItem = document.createElement('p')
        descItem.innerText = menu[i].desc

        telaItem.appendChild(imgItem)
        telaItem.appendChild(nomeItem)
        nomeItem.appendChild(precoItem)
        telaItem.appendChild(descItem)

        telaMenu.appendChild(telaItem)
    }   
})

breakfast.addEventListener('click',function(){
    telaMenu.innerHTML = ""

    for (i = 0 ; i < menu.length; i++) {
        if (menu[i].category == "breakfast") {
            const telaItem = document.createElement('section')
            telaItem.setAttribute('class','item')
            const imgItem = document.createElement('img')
            imgItem.setAttribute('src',menu[i].img)
            const nomeItem = document.createElement('h3')
            nomeItem.innerText = menu[i].title
            const precoItem = document.createElement('span')
            precoItem.innerText = menu[i].price
            const descItem = document.createElement('p')
            descItem.innerText = menu[i].desc

            telaItem.appendChild(imgItem)
            telaItem.appendChild(nomeItem)
            nomeItem.appendChild(precoItem)
            telaItem.appendChild(descItem)

            telaMenu.appendChild(telaItem)
    }  
}
})

lunch.addEventListener('click',function(){
    telaMenu.innerHTML = ""

    for (i = 0 ; i < menu.length; i++) {
        if (menu[i].category == "lunch") {
            const telaItem = document.createElement('section')
            telaItem.setAttribute('class','item')
            const imgItem = document.createElement('img')
            imgItem.setAttribute('src',menu[i].img)
            const nomeItem = document.createElement('h3')
            nomeItem.innerText = menu[i].title
            const precoItem = document.createElement('span')
            precoItem.innerText = menu[i].price
            const descItem = document.createElement('p')
            descItem.innerText = menu[i].desc

            telaItem.appendChild(imgItem)
            telaItem.appendChild(nomeItem)
            nomeItem.appendChild(precoItem)
            telaItem.appendChild(descItem)

            telaMenu.appendChild(telaItem)
    }  
}
})

shakes.addEventListener('click',function(){
    telaMenu.innerHTML = ""

    for (i = 0 ; i < menu.length; i++) {
        if (menu[i].category == "shakes") {
            const telaItem = document.createElement('section')
            telaItem.setAttribute('class','item')
            const imgItem = document.createElement('img')
            imgItem.setAttribute('src',menu[i].img)
            const nomeItem = document.createElement('h3')
            nomeItem.innerText = menu[i].title
            const precoItem = document.createElement('span')
            precoItem.innerText = menu[i].price
            const descItem = document.createElement('p')
            descItem.innerText = menu[i].desc

            telaItem.appendChild(imgItem)
            telaItem.appendChild(nomeItem)
            nomeItem.appendChild(precoItem)
            telaItem.appendChild(descItem)

            telaMenu.appendChild(telaItem)
    }  
}
})

dinner.addEventListener('click',function(){
    telaMenu.innerHTML = ""

    for (i = 0 ; i < menu.length; i++) {
        if (menu[i].category == "dinner") {
            const telaItem = document.createElement('section')
            telaItem.setAttribute('class','item')
            const imgItem = document.createElement('img')
            imgItem.setAttribute('src',menu[i].img)
            const nomeItem = document.createElement('h3')
            nomeItem.innerText = menu[i].title
            const precoItem = document.createElement('span')
            precoItem.innerText = menu[i].price
            const descItem = document.createElement('p')
            descItem.innerText = menu[i].desc

            telaItem.appendChild(imgItem)
            telaItem.appendChild(nomeItem)
            nomeItem.appendChild(precoItem)
            telaItem.appendChild(descItem)

            telaMenu.appendChild(telaItem)
    }  
}
})


window.addEventListener("DOMContentLoaded",function(){
    
    for (i = 0 ; i < menu.length; i++) {
        const telaItem = document.createElement('section')
        telaItem.setAttribute('class','item')
        const imgItem = document.createElement('img')
        imgItem.setAttribute('src',menu[i].img)
        const nomeItem = document.createElement('h3')
        nomeItem.innerText = menu[i].title
        const precoItem = document.createElement('span')
        precoItem.innerText = menu[i].price
        const descItem = document.createElement('p')
        descItem.innerText = menu[i].desc

        telaItem.appendChild(imgItem)
        telaItem.appendChild(nomeItem)
        nomeItem.appendChild(precoItem)
        telaItem.appendChild(descItem)

        telaMenu.appendChild(telaItem)
    }   
    
})
