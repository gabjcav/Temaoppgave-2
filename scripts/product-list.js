 let consoleList = [
    {
        name:"PC", 
        id: "#products-text-pc", 
    },

    {
        name: "PLAYSTATION",
        id: "#products-text-ps4" 
    },

    {   
        name: "XBOX",
        id: "#products-text-xbox" 
    }
    ];

 const NAV_CONTAINER = document.querySelector(".nav-container");
 const OUR_PRODUCTS_CONTAINER = document.querySelector("#our-products-container");

consoleList.forEach (consoleName => NAV_CONTAINER.innerHTML += `
    <ul class="console-list"><li class="console-link"><a href="${consoleName.id}">${consoleName.name}</a></li>    
`);

consoleList.forEach (consoleName => OUR_PRODUCTS_CONTAINER.innerHTML += `
    <ul class="console-list"><li class="console-link"><a href="${consoleName.id}">${consoleName.name}</a></li>    
`);