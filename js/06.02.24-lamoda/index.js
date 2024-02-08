const lamoda = [
    { 
        id: 1,
        img: 'https://a.lmcdn.ru/pi/bs283x224/0/81/566x448_new_clothes.jpg',
        name: 'Новинки одежды',
        text: 'зимный коллекция',
    },
    {
        id: 2,
        img: 'https://a.lmcdn.ru/bs2/9/82/m_ba.jpg',
        name: 'Скидки до 80%',
        text: 'на тысячи моделей',
    },
    {
        id: 3,
        img: 'https://a.lmcdn.ru/pi/bs283x224/5/41/566x448_clothes_premium.jpg',
        name: 'Premium',
        text: 'Купите о что давно хотели',
    },
    {
        id: 4,
        img: 'https://a.lmcdn.ru/pi/bs283x224/9/20/566x448_clothes_sport.jpg',
        name: 'Спорт',
        text: 'Все для тренировок',
    },
]

function create(i){
    let div1 = document.createElement('div')
    div1.className = 'div1'
    div1.style.display = 'flex'
    div1.style.flexDirection = 'column'
    div1.style.justifyContent = 'space-between'
    div1.style.alignItems = 'start'

    let img = document.createElement('img')
    img.src = i.img
    img.style.height = '220px'
    div1.appendChild(img)

    let div2 = document.createElement('div')

    let h1 = document.createElement('h1')
    h1.textContent = i.name
    h1.style.fontSize = '17px'
    h1.style.marginTop = '10px'
    h1.style.marginBottom = '0'
    let p = document.createElement('p')
    p.textContent = i.text
    p.style.fontSize = '15px'
    p.style.margin = '0'
    p.style.color = 'gray'

    div2.appendChild(h1)
    div2.appendChild(p)
    div1.appendChild(div2)
    return div1
}

let con = document.querySelector('.cards')
for(let i of lamoda){
    let card = create(i)
    con.appendChild(card)
}

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

function createCard(i) {
    // Create div with class "card"
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    // Create image element with src, alt, and height attributes
    let img = document.createElement('img');
    img.src = i.img;
    img.style.height = '300px';
    cardDiv.appendChild(img);
    img.addEventListener('click', () => {
        window.location.href = `lamoda.html?id=${i.id}`
    })
    var textDiv = document.createElement('div');
    textDiv.className = 'card-text';

    // Create heading element (h3) with text content
    var heading = document.createElement('h3');
    heading.textContent = i.price;

    // Create paragraph elements (p) with text content
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = i.text_one;

    var paragraph2 = document.createElement('p');
    paragraph2.textContent = i.text;

    // Append heading and paragraphs to textDiv
    textDiv.appendChild(heading);
    textDiv.appendChild(paragraph1);
    textDiv.appendChild(paragraph2);

    
    cardDiv.appendChild(textDiv);

    return cardDiv;
}

let container = document.querySelector('.card-card')

for(let i of cards){
    let card = createCard(i)
    container.appendChild(card)
}
