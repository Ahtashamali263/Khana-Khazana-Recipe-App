const getForm= document.querySelector("form");
const searchResult=document.querySelector(".search-result");
const container=document.querySelector(".container");
let queryGet="";
const app_key='189026f95c1f0e83431ca5cb9e55db7e';
const app_Id='f44df2e1';

getForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  queryGet=e.target.querySelector('input').value;
  console.log(queryGet);
  fatchApi();
})

async function fatchApi(){
  const base_url=`https://api.edamam.com/search?q=>>${queryGet}&app_id=${app_Id}&app_key=${app_key}&to=20`;
  const response= await fetch(base_url);
  const data= await response.json();
  getHtml(data.hits);
  console.log(data);
}

function getHtml(results){
  let getDataFromHtml='';
  results.map(result=>{
    getDataFromHtml+=
    ` <div class="item">
    <img src="${result.recipe.image}" alt="">
    <div class="flex-container">
        <h1 class="title">"${result.recipe.label}"</h1>
        <a class="view-button"href="${result.recipe.url}">View Recipe</a>
    </div>
    <p class="item-data">"${result.recipe.calories.toFixed(2)}"</p>
</div>`;
  })
  searchResult.innerHTML=getDataFromHtml;

}