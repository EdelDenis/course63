"use strict"

// ---------Свойство ClassList и делегирование событий 

const btns = document.querySelectorAll("button");


// console.log(btns[0].classList.length); // - показівает сколько классов есть у определнной кнопки

// console.log(btns[0].classList.item(0)); // показівает классі по ид

 console.log(btns[1].classList.add("red")); // - добавить класс к кнопке

// console.log(btns[0].classList.remove("blue")); // - удалить класс с кнопки

// console.log(btns[0].classList.toggle("blue")); - // или удалить или добавить класс

//if (btns[1].classList.contains("red")){
  //  console.log("red");
//}                                         // - проверка на содержание класса в кнопке

btns[0].addEventListener("click", ()=>{
    if(btns[1].classList.contains("red")){
        btns[1].classList.remove("red");
    } else {
        btns[1].classList.add("red");
    }
}); 

// Делегирование событий

const wrapper = document.querySelector(".btn-block");

wrapper.addEventListener("click", (event) =>{
    if (event.target && event.target.tagName == "BUTTON"){
        console.log("Hello");
   }
});

//btns.forEach(btn =>{
//btn.addEventListener("click", ()=>{
    //    console.log("Hello!")
 //   })
//})

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

