let url = window.location.href

let id = url.split('id=')[1]

const storeData = [
    {
        id : 1,
        name : "Salam Bro",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/6fd5089a478003fb68dc1d20e6db1ba79511bd9d72a653ff7e48bce4a8ae9684?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 94 ,
        reviews : 500,
        free: true
    },
    {
        id : 2,
        name : "Bahandi",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/6ab845e07af194276fe0be2d6c83464ffc0b9610d385e35c12ba8388c1ac6556?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
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
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/91295b144de267cf9c98fd82ed7408cee85c7ed55b82551e5fa585080e0b532e?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 90,
        reviews : 500,
        free: true
    }, {
        id : 5,
        name : "Mangal Doner",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/515e51a96e60cbf29e6175c7468bb3332d850babb0877549aa866d682f3c5812?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 94,
        reviews : 500,
        free: true
    }, {
        id : 6,
        name : "Gippo",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/c234c66a6aad3f1336934ed306fc766b2cb161879a5637026bde699ab1005409?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 92,
        reviews : 500,
        free: false
    }, {
        id : 7,
        name : "Zheka's Doner",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/86831479c630130fde2f5bc4df107ab1e1a47cc67f4894fd92c2f854784ac3c1?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 88,
        reviews : 500,
        free: true
    }, {
        id : 8,
        name : "Burger King",
        imageUrl : "https://images.deliveryhero.io/image/customer-assets-glovo/store_logos/535b4e43ad22e6b868f7d8f2691eb4e242686f4a004bab663f6340ee2115e3bb?t=W3siYXV0byI6eyJxIjoibG93In19XQ==",
        rating : 93,
        reviews : 500,
        free: false
    },
];

let resturant = storeData.find((name => name.id == id))
console.log(resturant)

let namerest = document.querySelectorAll('.rest-name')
namerest.forEach(nameres => nameres.textContent = resturant.name)

let img = document.querySelector('.section-two-img')
img.src = resturant.imageUrl

let rating = document.querySelector('.rating')
rating.textContent = `${resturant.rating}%`

let freediv = document.querySelector('.free')
if(resturant.free){
    freediv.textContent = 'Бесплатно'
}