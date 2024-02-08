let url = window.location.href
console.log(url)

let id = url.split('id=')[1]

let cards = [
    {
        id: 1,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
        price: '160 850 ₸',
        text_one: 'Winterra',
        text: 'Куртка утепленная',
    },

    {
        id: 2,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
        price: '14 250 ₸',
        text_one: 'Finn Flare',
        text: 'Олимпийка',
    },

    {
        id: 3,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
        price: '141 070 ₸',
        text_one: "Marc O'Pol",
        text: 'Пуховик',
    },

    {
        id: 4,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
        price: '62 900 ₸',
        text_one: "adidas",
        text: 'Костюм спортивный',
    },

    {
        id: 5,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
        price: '49 900 ₸',
        text_one: "Vivaldi",
        text: 'Пальто',
    },

    {
        id: 6,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
        price: '8 950 ₸',
        text_one: "Colin's",
        text: 'Брюки',
    },

    {
        id: 7,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
        price: '34 875 ₸',
        text_one: "Finn Flare",
        text: 'Пуховик',
    },
    
    {
        id: 8,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
        price: '55 700 ₸',
        text_one: "Moaxsport",
        text: 'Пуховик Igora light',
    },
]

let lam = cards.find(moda => moda.id == id)
console.log(lam)

let img = document.querySelectorAll('.section-img')
img.forEach(images => images.src = lam.img)

let h1 = document.querySelector('.section-div2-text1')
h1.textContent = lam.text_one

let p = document.querySelector('.section-div2-text2')
p.textContent = lam.text

let price = document.querySelector('.section-div2-price')
price.textContent = lam.price