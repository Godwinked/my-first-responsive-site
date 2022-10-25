let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart')
let basket = JSON.parse(localStorage.getItem("data")) || []; 

let calculation = ()=> {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item) .reduce((x,y)=> x+y, 0);
};
calculation (); 

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x)=> { 
            let { id, item } = x ;
            let search = generateData.find((y) => y.id === id) || [];
           return `<div class="cart-item">
           <img src= ${search.image} alt="" /> 
        
           </div>`;
        })
        .join(""));

    } else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = ` <h2> Cart is Empty </h2> 
        <a href = "index.html" > <button class = "HomeBtn" > Take me Home</button> </a>`;
    }
};

generateCartItems ();