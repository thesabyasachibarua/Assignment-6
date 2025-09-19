
const loadCatagories = () =>{
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data.categories);
        const cataData = data.categories;

        for(catagories of cataData){
            // console.log(catagories);
            // console.log(catagories.category_name)
        }
    })
}

loadCatagories();

// load All Cards
const loadCards = () =>{
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
    .then(res => res.json())
    .then(data => {
    const plantData = data.plants;

    // 1.get the element
    const cardDiv = document.getElementById("tree_Cards");

        for(plants of plantData){
            console.log(plants);

            // 2.create element
            const card = document.createElement("div")
            card.innerHTML = `
                               <div class="card bg-base-100 w-96 shadow-sm h-[500px]">
  <figure class="">
    <img class="p-5"
      src="${plants.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${plants.name}</h2>
    <p>${plants.description}</p>
<div class="flex justify-between items-center mb-3">
    <button class="bg-[#DCFCE7] p-2 rounded-xl text-[#15803D] font-semibold">${plants.category}</button>
    <h3><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="font-bold text-[17px]">${plants.price}</span></h3>
</div>
    <div class="card-actions justify-end">
      <button class="btn text-white bg-[#15803D] w-full rounded-[300px]">Add to Cart</button>
    </div>
  </div>
</div>`

            // append child

            cardDiv.appendChild(card);

        }
    })
}

loadCards();