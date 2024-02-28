let url = window.location.href
console.log(url)

let id = url.split('id=')[1]

const data = [
    {
        id: 1,
        oldPrice: 119900,
        price: 49900,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
        brand: "Vivaldi",
        category: "Пальто"
    },
    {
        id: 2,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
        price: 160850,
        brand: "Winterra",
        category: "Куртка утепленная"
    },
    {
        id: 3,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
        price: 54000,
        brand: "Tom Tailor",
        category: "Джинсы"
    },
    {
        id: 4,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
        oldPrice: 32490, 
        price: 14250,
        brand: "Finn Flare",
        category: "Олимпийка"
    },
    {
        id: 5,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
        oldPrice: 282200,
        price: 141070,
        brand: "Marc O'Polo",
        category: "Пуховик"
    },
    {
        id: 6,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
        price: 62900,
        brand: "adidas",
        category: "Костюм спортивный"
    },
    {
        id: 7,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
        oldPrice: 14950,
        price: 8950,
        brand: "Colin's",
        category: "Брюки"
    },
    {
        id: 8,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
        oldPrice: 113990,
        price: 34875,
        brand: "Finn Flare",
        category: "Пуховик",
        free: true
    }
  ];

let lam = data.find(moda => moda.id == id)
console.log(lam)

let img = document.querySelectorAll('.section-img')
img.forEach(images => images.src = lam.img)

let h1 = document.querySelector('.section-div2-text1')
h1.textContent = lam.brand

let p = document.querySelector('.section-div2-text2')
p.textContent = lam.category

let span = document.querySelector('.old-price')
span.textContent = lam.oldPrice

let price = document.querySelector('.section-div2-price')
price.textContent = lam.price


