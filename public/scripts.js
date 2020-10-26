/*---- Set Index from Recipes Array on navigation ----*/
const recipes = document.querySelectorAll('.recipes')

for (let i=0; i<recipes.length; i++) {
    const recipe = recipes[i]
    recipe.addEventListener('click', function(){
        window.location.href = `/recipe/${i}`
    })
}

/*---- Hide and Show Buttons ----*/
const btnShowHide = document.querySelectorAll('.btn-show-hide')
const txtShowHide = document.querySelectorAll('.card-text')

for (const [i,btn] of btnShowHide.entries()) {

    btn.addEventListener('click', function(){
        const btnText = btn.innerHTML
       
        if (btnText == 'HIDE') {
            btn.innerHTML = 'SHOW';
            txtShowHide[i].classList.add('hidden')
        } else {
            btn.innerHTML = 'HIDE';
            txtShowHide[i].classList.remove('hidden')
        }
    })
}

/*---- Add ingredient Button Function ----*/
function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);//makes a clone from the last ingredient added
  
    if (newField.children[0].value == "") return false;//doesn't add a new ingredient if the last input has a empty value
     //let's the input value empty 
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

/*---- Add preparation Button Function ----*/
function addPreparation() {
    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);//makes a clone from the last preparation added
  
    if (newField.children[0].value == "") return false;//doesn't add a new preparation if the last input has a empty value
     //let's the input value empty 
    newField.children[0].value = "";
    preparations.appendChild(newField);
  }
  
  document
    .querySelector(".add-preparation")
    .addEventListener("click", addPreparation);
