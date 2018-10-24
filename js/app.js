let subcontainer= document.querySelector(".subcontainer");
let catList= document.querySelector(".catlist");
let catNames= [];
let catClass= [];

/*TODO: create a list that shows that cat when selected
        show only the cat that is selected, with their own current click count*/

let CatClicker= function(name, image, title, altText, clicks){
  this.name= name;
  this.image= image;
  this.title= title;
  this.altText= altText;
  this.clicks= clicks;
}

let allCats=[
  new CatClicker("Captain Catpants", "images/cat.png", "Captivating Captain", "Fuzzy Kitten", 0),
  new CatClicker("Lieutenant Catty", "images/cat2.png", "Lucious Lieutenant", "Blue-eyed Cat", 0),
  new CatClicker("Sergant Catterson (and friend)", "images/cat3.png", "Sharp Sergant", "Orange and Grey Kittens", 0),
  new CatClicker("Corporal Cattington", "images/cat4.png", "Courageous Corporal", "Sneezing Cat", 0),
  new CatClicker("Private Catson", "images/cat5.png", "Primed Private", "Cat With a Melon For a Helmet", 0)

];



for (let cat of allCats){
  let newCat= document.createElement("div");
  let newCatName= document.createElement("h2");
  let catNameText= document.createTextNode(cat.name);
  let newCatClicks= document.createElement("h3");
  let newCatImage= document.createElement("img");

  newCatClicks.innerHTML= "Clicks: <span class=clickNum>0</span>";
  newCatImage.setAttribute("title", cat.title);
  newCatImage.setAttribute("alt", cat.altText);
  newCatImage.classList.add("img", "cat");
  newCatImage.src= cat.image;
  newCatName.appendChild(catNameText);
  newCat.appendChild(newCatName);
  newCat.appendChild(newCatClicks);
  newCat.appendChild(newCatImage);
  //newCat.classList.add("hidden");
  subcontainer.appendChild(newCat);
  catNames.push(cat.name);
  catClass.push(newCat);
  newCat.addEventListener("click", (function(){
    return function(){
      let clickNum= this.querySelector(".clickNum");
      clickNum.innerText= cat.clicks +1;
      cat.clicks++;
    };
  })());
}

for (let catName of catNames){
  let name= document.createElement("li");

  name.innerHTML= catName;
  catList.appendChild(name);
  name.addEventListener("click", function(){
    console.log(this);
  });
}
