async function getProduct (){
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data= await response.json();
 recipes=data.recipes;
    const result=recipes.map(function(recipe){
        return `<div class="recipe">
        <img src=${recipe.image_url}>
        <h2>${recipe.title}</h2>
        </div>`
  }  )
  document.querySelector(".recipes").innerHTML=result;
 
}
getProduct();