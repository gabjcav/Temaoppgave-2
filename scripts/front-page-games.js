
let gamesGrid = [

  //POPULAR

  {
    name: "FIFA 21 (PS4)",
    price: 59,
    url: './img/cover/ps4/NEWS/193479.png',
    category: "popular",
    id: 5,
    qty: 0,
    alt: "Fifa 21, Playstation 4. Cover"
  },
  {
    name: "SQUAD (PC)",
    price: 39,
    url: './img/cover/pc/squad.jpg',
    category: "popular",
    id: 1,
    qty: 0,
    alt: "Squad, PC. Cover"
  },
  {
    name: "GRAND THEFT AUTO V (PS4)",
    price: 35,
    url: './img/cover/ps4/NEWS/gta.jpeg',
    category: "popular",
    id: 7,
    qty: 0,
    alt: "Grand theft auto V, Playstation 4. Cover"
  },
  {

    name: "SEA OF THIEVES (XBOX)",
    price: 29,
    url: './img/cover/xbox/SOT.jpg',
    category: "popular",
    id: 10,
    qty: 0,
    alt: "Sea of thieves, Xbox. Cover"
  },
  
  // PC

  {
    name: "SQUAD (PC)",
    price: 39,
    url: './img/cover/pc/squad.jpg',
    category: "pc",
    id: 1,
    qty: 0,
    alt: "Squad, PC. Cover"
  },
  {
    name: "GRAND THEFT AUTO V (PC)",
    price: 35,
    url: './img/cover/pc/gta.jpg',
    category: "pc",
    id: 2,
    qty: 0,
    alt: "Grand theft auto V, PC. Cover."
  },
  {
    name: "CALL OF DUTY: COLD WAR (PC)",
    price: 69,
    url: './img/cover/pc/codcw.jpeg',
    category: "pc",
    id: 3,
    qty: 0,
    alt: "Call of duty cold war, PC. Cover"
  },
  {

    name: "BATTLEFIELD V (PC)",
    price: 45,
    url: './img/cover/pc/bf5.jpg',
    category: "pc",
    id: 4,
    qty: 0,
    alt: "Battlefield V, PC. Cover."
  },

  //PS4


  {
    name: "FIFA 21 (PS4)",
    price: 59,
    url: './img/cover/ps4/NEWS/193479.png',
    category: "ps4",
    id: 5,
    qty: 0,
    alt: "Fifa 21, Playstation 4. Cover"
  },
  {
    name: "FARCRY 5 - GOLD EDITION (PS4)",
    price: 39,
    url: './img/cover/ps4/NEWS/farcry.jpg',
    category: "ps4",
    id: 6,
    qty: 0,
    alt: "Farcry 5 gold edition, Playstation 4. Cover"
  },
  {
    name: "GRAND THEFT AUTO V (PS4)",
    price: 35,
    url: './img/cover/ps4/NEWS/gta.jpeg',
    category: "ps4",
    id: 7,
    qty: 0,
    alt: "Grand theft auto V, Playstation 4. Cover"
  },
  {

    name: "CALL OF DUTY: MODERN WARFARE (PS4)",
    price: 49,
    url: './img/cover/ps4/NEWS/mw.jpg',
    category: "ps4",
    id: 8,
    qty: 0,
    alt: "Call of duty modern warfare, Playstation 4. Cover"
  },
  
  //XBOX


  {
    name: "JUST CAUSE 4 (XBOX)",
    price: 59,
    url: './img/cover/xbox/JC4.jpg',
    category: "xbox",
    id: 9,
    qty: 0,
    alt: "Just cause 4, Xbox. Cover"
  },
  {
    name: "SEA OF THIEVES (XBOX)",
    price: 29,
    url: './img/cover/xbox/SOT.jpg',
    category: "xbox",
    id: 10,
    qty: 0,
    alt: "Sea of thieves, Xbox. Cover"
  },
  {
    name: "FARCRY 5 - DELUXE EDITION (XBOX)",
    price: 55,
    url: './img/cover/xbox/FARCRY5DELUXE.jpg',
    category: "xbox",
    id: 11,
    qty: 0,
    alt: "Farcry 5 deluxe edition, Xbox. Cover"
  },
  {

    name: "FIFA 21 - CHAMPIONS EDITION (XBOX)",
    price: 79,
    url: './img/cover/xbox/fifa21.png_large',
    category: "xbox",
    id: 12,
    qty: 0,
    alt:"Fifa 21 champions edition, Xbox. Cover"
  }
];


//popular games




 const POPULAR_CONTAINER = document.querySelector("#popular-container");
  

gamesGrid.filter(g => g.category == "popular").forEach((product)=> {
    POPULAR_CONTAINER.innerHTML += `
    <div class="products-games">
    <img src="${product.url}" alt="${product.alt}">
        <div class="game-info">
            <h2 class="product-name">${product.name}</h2>
            <p>Price: $ ${product.price}</p>
            <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
        </div>
    </div>
    `
});

//PC



 const PC_CONTAINER = document.querySelector("#pc-container");

gamesGrid.filter(g => g.category == "pc").forEach((product) => {
  PC_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//PS4



 const PS4_CONTAINER = document.querySelector("#ps4-container");


gamesGrid.filter(g => g.category == "ps4").forEach((product) => {
  PS4_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});

//XBOX



 const XBOX_CONTAINER = document.querySelector("#xbox-container");


gamesGrid.filter(g => g.category == "xbox").forEach((product) => {
  XBOX_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//SHOPPING CART____________________________________________________
 let cart = [];


//POPOUT --------------------------------------------


 const CLOSE_BTN = document.querySelector("#close-shopping-cart");
 const SHOPPING_LINK = document.querySelector("#shopping-link");
 const SHOPPING_CART_CONTAINER = document.querySelector(".shopping-cart-container");


 function openShoppingCart(event){
    event.preventDefault();

    SHOPPING_CART_CONTAINER.style.display = "grid";

}
 function closeCart (evt){
    evt.preventDefault();
    SHOPPING_CART_CONTAINER.style.display = "none";
    
}

SHOPPING_LINK.addEventListener("click", openShoppingCart);



CLOSE_BTN.addEventListener("click", closeCart);




//ADD TO / REMOVE FROM CART----------------------------------------



 let addToCartBtn = document.querySelector(".add-to-cart-btn");
 const CART_LIST_CONTAINER = document.querySelector("#cart-list-container");
let totalPriceContainer = document.querySelector("#total-price");

 let totalPrice = [];
let sum = 0;

// ADD TO CART FUNCTION ------------------------------------------------

 function addItem(evt) {
  
  if(!gamesGrid.find(product => product.id == evt.target.id)){
    return;
  }
                  //object.assign lager et nytt objekt istedenfor referanse til samme objekt
  let foundGame = Object.assign({},gamesGrid.find(product => product.id == evt.target.id));
  
  if(foundGame.qty == 0){
    foundGame.qty++
    cart.push(foundGame)
  } else {
    window.alert("Product is already in cart");
  }

 
  if(cart){

    CART_LIST_CONTAINER.innerHTML = ""

    sum = 0
  
    var cartContainer = ""

    itemCounter.innerHTML = ` ${cart.length} `;

    cart.forEach((productItem) =>{
      
      cartContainer+= `
      
      <div class="cart-list-item">
          <h4 class="cart-product-name">${productItem.name}</h4>
          <p class="cart-product-price"> $ ${productItem.price}</p>
          <button id="${productItem.id}" class="cart-remove-btn">Remove</button>
      </div>
      `; 

      sum += productItem.price

      totalPriceContainer.innerHTML = `
      $ ${sum}
    `
    });
    CART_LIST_CONTAINER.innerHTML = cartContainer;
  }
  console.log("add", cart);
};




if(POPULAR_CONTAINER){
  POPULAR_CONTAINER.addEventListener("click", addItem);
}

if(PC_CONTAINER){
  PC_CONTAINER.addEventListener("click", addItem);
}

if(PS4_CONTAINER){
  PS4_CONTAINER.addEventListener("click", addItem);
}

if(XBOX_CONTAINER){
  XBOX_CONTAINER.addEventListener("click", addItem);
}




//REMOVE ITEM FUNCTION --------------------------------------------------

 function removeItem(evt) {
  
  
  if(!evt.target.id){
    return;
  }
  
  let cartIndex = cart.findIndex(c => c.id == evt.target.id)

  cart.splice(cartIndex, 1)

  console.log(cartIndex)


    
    CART_LIST_CONTAINER.innerHTML = ""
    
    sum = 0
    var cartContainer = ""
    itemCounter.innerHTML = ` ${cart.length} `;

   
    
    cart.forEach((productItem) =>{
      
      cartContainer+= `
      
      <div class="cart-list-item">
          <h4 class="cart-product-name">${productItem.name}</h4>
          <p class="cart-product-price"> $ ${productItem.price}</p>
          <button id="${productItem.id}" class="cart-remove-btn">Remove</button>
      </div>
      `; 

      sum += productItem.price

      totalPriceContainer.innerHTML = `
      $  ${sum}
      `
    });

    if(cart.length === 0){
      totalPriceContainer.innerHTML = `$ 0`;
    }
    
    CART_LIST_CONTAINER.innerHTML = cartContainer;
    
    console.log("hei", cart);
  
  
};



let removeBtn = document.querySelector(".cart-remove-btn")

CART_LIST_CONTAINER.addEventListener("click", removeItem);




//CLEAR ALL FUNCTION ---------------------------------------------------------

 function clearAll(evt) {
  
  if(!evt.target.id){
    return;
  }
 
  cart = []

  sum = 0
  
  if(cart){
    CART_LIST_CONTAINER.innerHTML = ""

    itemCounter.innerHTML = ` ${cart.length} `;
    
    totalPriceContainer.innerHTML = `
      $ ${sum}
    `
    
   
  }
};

let clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", clearAll);


// ITEM COUNTER (added in the 3 functions above)



 let itemCounter = document.querySelector("#item-counter");

itemCounter.innerHTML = cart.length;

