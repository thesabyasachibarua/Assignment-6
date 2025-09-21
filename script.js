// total value array
let savedData = [];

const loadCatagories = () =>{
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data.categories);
        const cataData = data.categories;
        showCatagories(cataData);

    })
}

// showing catagories function
const showCatagories = (cataArray) =>{
            //1. get element
            // console.log(cataArray);

        const sidebar = document.getElementById("sidebar");

        for(catagories of cataArray){
            // console.log(catagories);
            // console.log(catagories.category_name);
            const nameCatagory = catagories.category_name;
            const idCatagory = catagories.id;

             // 2.create element

             const perCatagory = document.createElement("div");
             perCatagory.innerHTML = `
      <li ><a id="btn-catagory" onclick="filterCatagory('${idCatagory}')" class="hover:bg-[#15803D] hover:text-white text-[#1F2937] font-semibold text-[16px]">${nameCatagory}</a></li>`

            sidebar.appendChild(perCatagory)

        }
        }

loadCatagories();

// active catagory function


//onclick filter cards by catagory function

const filterCatagory = (catId) =>{
    // console.log(catId);
    const url = `https://openapi.programming-hero.com/api/category/${catId}`

    fetch(url)
    .then(res => res.json())
    .then( data => {
        const clickedCat = data.plants;
        //  get the element
      const mainCardDiv =  document.getElementById("tree_Cards");
      mainCardDiv.innerHTML = "";
         showCards(clickedCat);

         const buttonCatagory = document.getElementById("btn-catagory");
    // buttonCatagory.classList.add("activeNow");
       console.log(buttonCatagory);
    })

}
// onclick all trees
 const allTree = () =>{
    const mainCardDiv =  document.getElementById("tree_Cards");
      mainCardDiv.innerHTML = "";
    loadCards();
 }

// load All Cards
const loadCards = () =>{
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
    .then(res => res.json())
    .then(data => {
    const plantData = data.plants;
    showCards(plantData);
    // console.log(plantData);

    })
}

// showing card function
 const showCards = (cardData) =>{
    // console.log(cardData)
        // 1.get the element
    const cardDiv = document.getElementById("tree_Cards");

        for(plants of cardData){
            // 2.create element
            const card = document.createElement("div")
            card.innerHTML = `
                               <div class="card bg-base-100 shadow-lg h-[500px]">
  <figure class="rounded-lg">
    <img class="p-5 w-full h-full object-cover"
      src="${plants.image}"/>
  </figure>
  <div class="card-body">
    <h2 onclick ="plantDetails(${plants.id})"   class="card-title cursor-pointer">${plants.name}</h2>
    <p>${plants.description}</p>
<div class="flex justify-between items-center mb-3">
    <button class="bg-[#DCFCE7] p-2 rounded-xl text-[#15803D] font-semibold">${plants.category}</button>
    <h3><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="font-bold text-[17px]">${plants.price}</span></h3>
</div>
    <div class="card-actions justify-end">
      <button onclick="loadCart(${plants.id})" class="btn text-white bg-[#15803D] w-full rounded-[300px]">Add to Cart</button>
    </div>
  </div>
</div>`

            // append child

            cardDiv.appendChild(card);

        }
    }

loadCards();


// loading cart function

const loadCart = (cartId) =>{
    const url = `https://openapi.programming-hero.com/api/plant/${cartId}`;
    fetch(url)
    .then(res => res.json())
    .then( data => {
        const cartData = data.plants
        // console.log(cartData);

        // 1.get the element
        const cartdiv = document.getElementById("carts");

        // 2.create element
        const cartChild = document.createElement("div");
        cartChild.innerHTML = `
        <div class="bg-[#F0FDF4] p-2 flex items-center justify-between w-[95%] m-auto rounded-lg">
                            <div>
                            <h3 class="font-semibold">${cartData.name}</h3>
                            <h4><span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>${cartData.price} <span> x 1</span></h4>
                            </div>
                            <i id="${cartData.id}" onclick="removeCart(${cartData.id})" class="fa-solid fa-xmark"></i>
                        </div>`
            //   3.append child 
            cartdiv.appendChild(cartChild);

            totalCart(cartData.id);
    })
}

// total adding function

const totalCart = (value) =>{
    // const cartIdForTotal = document.getElementById(data);
    // console.log(data);

 function getTotal(){
        const url = `https://openapi.programming-hero.com/api/plant/${value}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data.plants.price);
        const cartValue = data.plants.price;
        savedData.push(cartValue);
        // console.log(savedData);
        totalCartPrice();
    }
)
 }
 getTotal();
    
    const totalCartPrice = () =>{
        let sum = 0;
        for(const val of savedData){
         sum = val + sum;
        }
        console.log(sum);
        // return sum;
    }
    
    // totalCartPrice();
    //1. get the element
    const parentValue = document.getElementById("total_price");
    parentValue.innerHTML = "";
    // 2.create element
    const totalValue = document.createElement("div")
    totalValue.innerHTML = `
        <div>
                            <hr class="mt-3 w-full mx-auto ">
                            <div class="flex justify-between items-center">
                                 <h2 class="font-bold">
                                Total:
                            </h2>
                            <h3><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${value}</span></h3>
                            </div>
                        </div>`

                        // 3.append child
                        parentValue.appendChild(totalValue);


    
}

// remove per item from cart

const removeCart = (cartDataId) =>{
    console.log(cartDataId);

    const specificCart = document.getElementById(cartDataId);
    // console.log(specificCart);

    specificCart.parentElement.remove();

    specificCart.parentElement.innerHTML = "";
    // specificCart.classList.add("hidden");
}






// modal on clicking the tree name on card

const plantDetails = (details) =>{
    // console.log(details);

    const url = `https://openapi.programming-hero.com/api/plant/${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data.plants);
        const modalData = data.plants;

        // console.log("tree name clicked");
      const modalShow = document.getElementById("my_modal_1");

    const detailsContainer = document.getElementById("modal_Show");
    detailsContainer.innerHTML = `
     <div class="space-y-2">
         <div class="font-bold text-xl">
            <h2>${modalData.name}</h2>
        </div>
        <div>
           <img class=" w-full h-[250px] object-cover"
      src="${modalData.image}"/>
        </div>
        <div>
           <h3 class="font-bold">Catagory:</h3>
           <span class="text-[15px]">${modalData.category}</span>
        </div>
        <div>
           <h3 class="font-bold">Price:<i class="fa-solid fa-bangladeshi-taka-sign"></i></h3>
           <span class="text-[15px]">${modalData.price}</span>
        </div>
        <div>
           <h3 class="font-bold">Description:</h3>
           <span class="text-[15px]">${modalData.description}</span>
            </div>
        </div>
    </div>`

     modalShow.showModal();
    })
    
}

