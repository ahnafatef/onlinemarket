/*
	item: object
	=============
	item attributes:
		> id (unique int)
		> name (string)
		> description (string)
		> photoUrl (string)
		> stock (int)
		> price (int)

	inventory: array of items
	===========

	cart: array of item ids
	===========

*/


// items
items = [{
        "description": "pariatur delectus est repellat porro\neveniet numquam omnis quia\nquod illum voluptatibus tenetur rerum accusantium voluptas a",
        "name":"aliquid",
        "price": 624,
        "id": 0,
        "stock": 30
    },
    {
        "description": "numquam et facilis voluptatum\naut modi voluptatem voluptas qui aut quibusdam\net sit aliquam est dolorem quisquam fugiat",
        "name":"consectetur",
        "price": 860,
        "id": 1,
        "stock": 453
    },
    {
        "description": "cum inventore voluptas impedit itaque natus est\neos pariatur vel ut vel nihil repudiandae excepturi tempore\npossimus recusandae et dolore nesciunt",
        "name":"ratione",
        "price": 38,
        "id": 2,
        "stock": 676
    }
];



// keep one name in items array
// items.map(function(i) {
//     name = (i.name).split(',');
//     // name = name.split(',');
//     while (true) { 
//         try {
//             i.name = name[Math.ceil(Math.random() * 3) - 1];
//             if (i.name === undefined) continue;
//             else break;
//         }
//         catch {}
//     }
// })

// random image urls
urls = ['https://picsum.photos/400','https://source.unsplash.com/random/400x400','https://loremflickr.com/400/400'];


// add image urls to items array
urls.map(function(i, ind){
    items[ind]['url'] = i; 
})


// store items in localStorage
localStorage.items = JSON.stringify(items);

items = JSON.parse(localStorage.items);



// cardDeck = document.getElementById('card-deck-container');
items.map((i, ind) => {
    stock = (i['stock']>0) ? 'In stock' : 'Out of stock';
    $('#card-deck-container').append(`<div class="card mb-4 raised-effect shadow"><img src="${i['url']}" class="card-img-top" alt="rand${ind}"><div class="card-body"><h5 class="card-title">${i['name']}</h5><p class="card-text">${i['description']}</p><p class="card-text">Price: $${i['price']}</p><p class="card-text"><small class="text-muted">${stock}</small></p></div></div>`)
})

iCount = document.querySelector('.item-count');
// console.log(iCount.dataset.itemCount);

