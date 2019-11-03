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



items = [{
        "description": "pariatur delectus est repellat porro\neveniet numquam omnis quia\nquod illum voluptatibus tenetur rerum accusantium voluptas a",
        "name": [
            "aliquid",
            "id",
            "officiis"
        ],
        "price": 624,
        "id": 0,
        "stock": 30
    },
    {
        "description": "numquam et facilis voluptatum\naut modi voluptatem voluptas qui aut quibusdam\net sit aliquam est dolorem quisquam fugiat",
        "name": [
            "quo",
            "consectetur",
            "voluptatem"
        ],
        "price": 860,
        "id": 1,
        "stock": 453
    },
    {
        "description": "cum inventore voluptas impedit itaque natus est\neos pariatur vel ut vel nihil repudiandae excepturi tempore\npossimus recusandae et dolore nesciunt",
        "name": [
            "est",
            "ratione",
            "sit"
        ],
        "price": 38,
        "id": 2,
        "stock": 676
    },
    {
        "description": "consequuntur et magni cum et\nab est magnam consequatur qui delectus\niste sunt debitis",
        "name": [
            "maiores",
            "et",
            "amet"
        ],
        "price": 390,
        "id": 3,
        "stock": 808
    },
    {
        "description": "ratione omnis aut autem sit quia\nrerum id voluptatem voluptatem est totam minima quo\nofficia iste eum",
        "name": [
            "itaque",
            "sint",
            "optio"
        ],
        "price": 857,
        "id": 4,
        "stock": 719
    },
    {
        "description": "est provident voluptas vero nesciunt magnam\naut ipsam ab unde magni aliquid\nmaxime autem itaque recusandae assumenda et voluptate aut modi",
        "name": [
            "et",
            "molestiae",
            "autem"
        ],
        "price": 963,
        "id": 5,
        "stock": 545
    },
    {
        "description": "enim deserunt odio non ipsum veniam\nsed velit adipisci excepturi qui cum ea veritatis\namet ut unde expedita itaque",
        "name": [
            "voluptatem",
            "a",
            "quia"
        ],
        "price": 139,
        "id": 6,
        "stock": 236
    },
    {
        "description": "voluptatibus perspiciatis officiis quia voluptas dicta\nveritatis nihil dignissimos\nlaudantium omnis fugit",
        "name": [
            "natus",
            "quia",
            "dolores"
        ],
        "price": 824,
        "id": 7,
        "stock": 15
    },
    {
        "description": "eos eligendi omnis praesentium nesciunt laboriosam ullam aspernatur\neos assumenda nulla repudiandae debitis\ncorrupti consequatur veritatis cumque in facere excepturi velit",
        "name": [
            "dolores",
            "rerum",
            "aut"
        ],
        "price": 757,
        "id": 8,
        "stock": 695
    },
    {
        "description": "consectetur reprehenderit qui voluptatum a laboriosam magnam sit iste\nnecessitatibus facilis libero reiciendis laudantium rerum nihil\nadipisci et omnis sint enim consequuntur non",
        "name": [
            "voluptas",
            "nemo",
            "aliquam"
        ],
        "price": 580,
        "id": 9,
        "stock": 888
    }
]

items.map(function(i) {
    i.name = i.name[Math.ceil(Math.random() * 3) - 1];
})

localStorage.items = JSON.stringify(items)

itemimg = document.getElementsByClassName('card-img-top');

for (let [key, val] of Object.entries(itemimg)) {

    fetch(`https://source.unsplash.com/400x400/?random`).then((response) => {
	    val.setAttribute('src', `${response.url}`);
    })

}

// itemimg.m((i)=>{i.setAttribute('src', 'https://source.unsplash.com/random/400x400')})