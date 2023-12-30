


/*Практика Артем Рисич ( addEventListener)

const button = document.querySelector(".js-click");
const container = document.querySelector(".js-container");
container.addEventListener("click", onClick);
let step = 0;
function onClick(event){
    step += 5;
    container.style.marginLeft = `${step}px`;
    container.style.marginTop =  `${step}px`;
    console.log(event.currentTarget);
  
}*/
/*const arr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit optio, accusamus asperiores pariatur eligendi nulla a!'] 

const title = document.querySelector(".js-title");
const title1 = document.querySelector(".js-title1");
const title2 = document.querySelector(".js-title2");

const maxLength = 13;
const totalLength = maxLength+3;

title.addEventListener("click", onClick);
title1.addEventListener("click", onClick);
title2.addEventListener("click", onClick);

function onClick(evt){
    const title = evt.currentTarget; 
    const str = title.textContent.slice(0,maxLength);

    if(title.textContent.length>totalLength){
  
        const remainder = title.textContent.slice(maxLength);
        title.setAttribute("data-title", remainder);
        title.textContent = str + "...";
    }else{
        const remainder = title.dataset.title;
        title.textContent = str + remainder;
        
    }

}

*/

/*const userName = document.querySelector(".js-input");

userName.addEventListener("input", onInput);
userName.addEventListener("change", onInput);
function onInput(evt){
    console.dir(evt.currentTarget.value);
}*/


/*const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();

    const {userName, userEmail,userAge} = evt.currentTarget.elements
    console.log(userAge.value);
    console.log(userName.value);
    console.log(userEmail.value);
};
document.addEventListener("keydown", onKey);
function onKey(evt){
    console.log(evt);
}
*/

const cars = [
    {
    id: 1,
    car: "Honda",
    type:"Civic",
    price:12000,
    img: "https://i.infocar.ua/i/12/271/1400x936.jpg",
},
{
    id: 2,
    car:"Audi",
    type:"Q7",
    price: 40000,
    img:"https://i.infocar.ua/i/12/442/1400x936.jpg",
},
{
    id: 33,
    car: "BMW",
    type:"5 siries",
    price:9000,
    img:"https://i.infocar.ua/i/12/6225/1080x540.jpg",
},
{
   id:3,
   car:"Honda" ,
   type:"Accord",
   price: 20000,
   img: "https://i.infocar.ua/i/12/6984/1080x540.jpg",

},
{
    id: 4,
    car:"Volvo",
    type: "XC60",
    price: 7000,
    img:"https://i.infocar.ua/i/12/2822/1080x540.jpg",

},
];

const list = document.querySelector(".js-list");
const form = document.querySelector(".js-search-form");
form.addEventListener("submit", onSearch);

function createMarkup(arr){
    return arr
  .map(({id,car,type,price,img})=>`
    <li data-id="${id}">
    <img src="${img}" alt="${car}" width = "300">
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    </li>`).join('');
}


list.insertAdjacentHTML("beforeend", createMarkup(cars));


function onSearch(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const {query, select} = form.elements;
    const selectValue = select.value;
   
    const searchCars = cars.filter(item => item[select.value].toLowerCase()=== query.value.trim().toLowerCase())
   
    list.innerHTML = createMarkup(searchCars);
    /*console.dir(query.value);
    console.dir(select.value);*/
}