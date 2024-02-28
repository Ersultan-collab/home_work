// let img = document.getElementsByTagName('img')
// console.log(img)
// console.log(img.length)

// for(let i of img){
//     console.log(i.src)
// }

// let button = document.getElementsByTagName('button')
// console.log(button.length)

// let bitton_id = document.getElementById('header-button')
// console.log(bitton_id)

// let clas = document.getElementsByClassName('section-cards')
// for(let i of clas){
//     console.log(i)
// }

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, ) // it prints hello in every second, 1000ms is 1s

// setTimeout(() => {
//     console.log('Hello')
// }, 5000)

// setInterval(() => {
//     console.log('Hello')
// }, 5000)

// let header = document.querySelector('.header')
// header.className = 'header'
// header.setAttribute('class', 'header')
// header.classList.remove('div')
// header.classList.add('dodd')

// const street = document.getElementById('mau')
// street.textContent = 'Street'

// const button = document.querySelector('.header-button')
// setTimeout(() => {
//     button.textContent = "Бастау"
// }, 3000)


// const section = document.querySelector('.section-five')

//     section.innerHTML = `<h1>Menu</h1>
// <ul class = 'Food-list'>
// <li>Burger</li>
// <li>Burger</li>
// <li>Burger</li>
// <li>Burger</li>
// </ul>`

// const food = document.querySelector('.Food-list')
// food.style.listStyleType = 'none'

// const li = document.querySelectorAll('li')
// li.forEach((element, i) => {
//     if(i % 2 == 0){
//         element.style.color = 'blue'
//     }else{
//         element.style.color = 'red'
//     }
// })

// for(let i = 0; i < li.length; i++){
//     if(i % 2 == 0){
//         li[i].style.color = 'red' 
//     }else{
//         li[i].style.color = 'blue'
//     }
// }

// let menu = document.createElement('h2')
// menu.textContent = 'Menu'
// section.appendChild(menu)

// let foodlist = document.createElement('ul')
// foodlist.classList.add('food-list')
// section.appendChild(foodlist)

// const foods = ['Burger', 'Pasta', 'Sushi', 'Pizza']
// for(let i = 0; i < foods.length; i++){
//     let li = document.createElement('li')
//     li.textContent = foods[i]
//     li.style.listStyleType = 'none'
//     foodlist.appendChild(li)
// }
// let title = document.createElement('h1')
// title.className = 'title'
// title.style.fontSize = '24px'
// title.textContent = 'glovo'
// document.body.appendChild(title)

// let doner = document.createElement('li')
// doner.textContent = 'Doner'
// food.appendChild(doner)

let headerbutton = document.querySelector('#header-button')

// headerbutton.addEventListener('mouseenter', ()=> {
//     headerbutton.style.color = 'yellow'
// })

// headerbutton.addEventListener('mouseleave', ()=> {
//     headerbutton.style.color = 'white'
// })

headerbutton.addEventListener('mouseenter', () => {
    headerbutton.style.backgroundColor = 'darkcyan'
})

headerbutton.addEventListener('mouseleave', () => {
    headerbutton.style.backgroundColor = 'rgb(0, 183, 183)'
})
// let sectioncards = document.querySelector('.section-cards')
// sectioncards.addEventListener('mouseenter', () => {
//     sectioncards.style.transform = 'scale(1.1)';
//     sectioncards.style.borderBottom = '1px solid'
// })

// sectioncards.addEventListener('mouseleave', () => {
//     sectioncards.style.transform = 'scale(1)'
//     sectioncards.style.borderBottom = 'none'
// })

let sectioncards = document.querySelectorAll('.section-cards')

for(let i = 0; i < sectioncards.length; i++){
    sectioncards[i].addEventListener('mouseenter', () => {
        sectioncards[i].style.transform = 'scale(1.1)';
        sectioncards[i].style.borderBottom = '1px solid'
    })
    
    sectioncards[i].addEventListener('mouseleave', () => {
        sectioncards[i].style.transform = 'scale(1)'
        sectioncards[i].style.borderBottom = 'none'
    })
}

let sectionimg = document.querySelectorAll('.section-two_ioimg')
for(let i of sectionimg){
    i.addEventListener('mouseenter', () => {
        i.style.transform = 'scale(1.05) '
    })
    i.addEventListener('mouseleave', () => {
        i.style.transform = 'scale(1.0)'
    })
}

// let selection = document.querySelector('.section-two_card')

// for(let i of selection){
//     i.addEventListener('mouseenter', () => {
//         let div = document.querySelector('.section-two_card div')
//         div.style.backgroundSize = '280px '
//     })
//     i.addEventListener('mouseleave', () => {
//         let div = document.querySelector('.section-two_card div')
//         div.style.backgroundSize = 'cover'
//     })

// }

const storeData = [
    {
        id : 1,
        name : "Salam Bro",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/565d9076196a96580be3ed764aa85ea3b5937e5276357bbc9dd030a41f8c285b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 94 ,
        skidka: -20,
        reviews : 500,
        free: true
    },
    {
        id : 2,
        name : "Bahandi",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/1b83179e9b3d0e87b2bcd473e8b42f617f8607ef5f12e2a7a044d506e70aa076?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 94,
        reviews : 450,
        free: false
    }, {
        id : 3,
        name : "I'm feel-good",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/13f9c3a9d078f55ec50eef46067dfc8c2fdc75a6b9ee3cf9cc385d8ee21a32ca?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 94,
        reviews : 500,
        free: false
    }, {
        id : 4,
        name : "KFC",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/d4648d512c4a987f61349dc7f086328f332ef6a719b63bde68f83512ad923aef?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 90,
        reviews : 500,
        free: true
    }, {
        id : 5,
        name : "Mangal Doner",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/267157c8141ecebc7316ae9b146c2e4c01d055bd7202fcc058630beda6972da5?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 94,
        reviews : 500,
        free: true
    }, {
        id : 6,
        name : "Gippo",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/ab06a44ae442c05ff2ed59e2b1b9bbe492c5499a826e8787a8535971eadac6b2?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 92,
        reviews : 500,
        free: false
    }, {
        id : 7,
        name : "Zheka's Doner",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/47eb6734c18126b6fa411a63c2701bb165d9dca4b08dfd5a13b9891a8baa766c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 88,
        reviews : 500,
        free: true
    }, {
        id : 8,
        name : "Burger King",
        imageUrl : "https://images.deliveryhero.io/image/stores-glovo/stores/50b0efb192619699c322276512203f519d994877da764c1053f691a8ffd407a3?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating : 93,
        skidka: -20,
        reviews : 500,
        free: false
    },
];



// function createSectionTwoCard(rest) {
//     // Create div with class "section-two_card"
//     var cardDiv = document.createElement('div');
//     cardDiv.className = 'section-two_card';

//     // Create div with classes "section-two_card_img" and "section-two_img"
//     var imgDiv = document.createElement('div');
//     imgDiv.className = 'section-two_card_img section-two_img';


//     // Create image element with src attribute and alt attribute
//     var img = document.createElement('img');
//     img.src = `${rest.imageUrl}`;
//     img.alt = '';
//     img.className = 'section-two_ioimg';
//     img.addEventListener('mouseenter', () => {
//         img.style.transition = 'transform 0.4s ease'
//         img.style.transform = 'scale(1.1)'

//     })
//     img.addEventListener('mouseleave', () => {
//         img.style.transform = 'scale(1.0)'
//     })
//     imgDiv.appendChild(img);

//     // Create div with class "section-two_card_texts"
//     var textsDiv = document.createElement('div');
//     textsDiv.className = 'section-two_card_texts';

//     // Create heading element (h1) with text content
//     var heading = document.createElement('h1');
//     heading.textContent = rest.name

//     // Create paragraph element (p) with strong and span elements
//     var paragraph = document.createElement('p');
//     paragraph.style.display = 'flex'
//     paragraph.style.alignItems = 'center'
//     let images = document.createElement('img')
//     images.src = 'https://images.deliveryhero.io/image/customer-assets-glovo/store_ratings/rating_excellent.png?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19XQ=='
//     images.style.height = '25px'
//     images.style.marginRight = '5px'
//     var strong = document.createElement('strong');
//     strong.textContent = `${rest.rating}%`;
//     paragraph.style.marginTop = '0px'
//     strong.style.marginRight ='5px'
//     var span = document.createElement('span');
//     span.style.color = 'gray';
//     span.textContent = `(${rest.reviews}+)`;
//     if(i.free){
//         let free = document.createElement('span')
//         let freeimg = document.createElement('img')
//         freeimg.src = '	https://images.deliveryhero.io/image/customer-asse…0MCwiaGVpZ2h0Ijo0MH19LHsic3ZnIjp7InEiOiJsb3cifX1d'
//         free.textContent = 'Free'

//        free.appendChild(freeimg)
//         paragraph.appendChild(free)
//     }
//     // Append strong and span to paragraph
//     paragraph.appendChild(images)
//     paragraph.appendChild(strong);
//     paragraph.appendChild(span);

//     // Append heading and paragraph to textsDiv
//     textsDiv.appendChild(heading);
//     textsDiv.appendChild(paragraph);

//     // Append imgDiv and textsDiv to cardDiv
//     cardDiv.appendChild(imgDiv);
//     cardDiv.appendChild(textsDiv);

//     cardDiv.addEventListener('click', () => {
//         window.location.href = `salambro.html?id=${rest.id}`
//     })

//     return cardDiv;
// }

function createSectionTwoCard(i) {
    // Create main div element with class 'section-two_card'
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("section-two_card");

    // Create div for image with classes 'section-two_card_img' and 'section-two_img'
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("section-two_card_img", "section-two_img");

    cardDiv.style.position = 'relative'
    
    // Create image element with src attribute and class 'section-two_ioimg'
    var img = document.createElement("img");
    img.src = i.imageUrl;
    img.alt = "";
    img.style.transition = 'transform 0.5s ease'
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)'
    })
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1.0)'
    })
    img.classList.add("section-two_ioimg");


    // Append image to anchor element, anchor element to image div
    
    imgDiv.appendChild(img);

    // Create div for texts with class 'section-two_card_texts'
    var textDiv = document.createElement("div");
    textDiv.classList.add("section-two_card_texts");

    // Create heading element
    var heading = document.createElement("h1");
    heading.textContent = i.name;

    // Create div for text content with class 'section-two_card_texts-text'
    var textContentDiv = document.createElement("div");
    textContentDiv.classList.add("section-two_card_texts-text");

    // Create image element for rating
    var ratingImg = document.createElement("img");
    ratingImg.src = "https://images.deliveryhero.io/image/customer-assets-glovo/store_ratings/rating_excellent.png?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19XQ==";
    ratingImg.alt = "";
    ratingImg.style.height = "20px";

    // Create paragraph element for rating text
    var ratingText = document.createElement("p");
    ratingText.innerHTML = `<strong>${i.rating}% </strong><span style='color: gray;'>(${i.reviews}+)</span>`;

    // Append rating elements to text content div
    textContentDiv.appendChild(ratingImg);
    textContentDiv.appendChild(ratingText);

    if(i.free){
        let freee = document.createElement('p')
        freee.style.display = 'flex'
        freee.style.alignItems = 'center'
        freee.style.backgroundColor = '#FFB928FF'
        freee.style.padding = '0 20px 0px 10px'
        freee.style.borderRadius = '5px'
        let freeespan = document.createElement('span')
        let freeeimg = document.createElement('img')
        freeeimg.src = 'https://images.deliveryhero.io/image/customer-assets-glovo/filters/sorting/delivery_fee_light.svg?t=W3sicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LHsic3ZnIjp7InEiOiJsb3cifX1d'
        freeeimg.style.height = '20px'
        freeeimg.style.marginRight = '5px'
        freeespan.textContent = 'Free'

        freee.appendChild(freeeimg)
        freee.appendChild(freeespan)
        textContentDiv.appendChild(freee)
    }
    // Append heading and text content div to text div
    textDiv.appendChild(heading);
    textDiv.appendChild(textContentDiv);

    // Append image div and text div to main card div
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(textDiv);

    if(i.skidka){
        let divsk = document.createElement('div')
        divsk.textContent = `${i.skidka}%`
        divsk.classList.add('div-sk')
    
        cardDiv.appendChild(divsk)
    }

    cardDiv.addEventListener('click', () => {
        window.location.href = `salambro.html?id=${i.id}`
    })
    // Return the main card div
    return cardDiv;
}
let container = document.querySelector('.section-two_cards')

for(let rest of storeData){
    let card = createSectionTwoCard(rest)
    container.appendChild(card)
}
// for(let rest)

// let cards = 
// container.removeChild(container.firstElementChild)
// container.removeChild(container.lastElementChild)

// container.firstElementChild.style.borderBottom = '1px solid black'

// container.children[2].style.boxShadow = '1px 1px 10px 1px black'
// container.children[2].style.borderRadius = '20px'

// for(let i = 0; i < container.children.length; i++){
//     container.children[i].style.borderBottom = '1px solid black'
//     container.children[i].style.backgroundColor = 'aqua'
//     container.children[i].style.borderRadius = '20px'
// }

// for(let i of container.children){
//     i.style.borderBottom = '1px solid black'
// }
let input = document.querySelector('.header-form-input')
let button = document.querySelector('.header-form-button')
input.addEventListener('click', () => {
    button.style.transition = 'left 1s ease'
    button.style.left = '10px'
    input.style.transition = 'padding-left 1s ease'
    input.style.textAlign = 'start'
    input.style.paddingLeft = '45px'
    input.placeholder = ''
})
input.addEventListener('dbclick', () => {
    button
    input
   
})