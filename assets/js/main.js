//TASK-1
// let elem = document.querySelector('#elem')  
// elem.classList.add('www')
// console.log(elem.className)

//TASK-2
// elem.classList.remove('www')                 
// console.log(elem.className)

//TASK-3    (you can use TASK-1 to check)
// if (elem.classList.contains('www') == true){    
//     console.log(elem.className,"имеет")
// }
// else{
//     console.log("не имеет")
// }

//TASK-4    (you can use TASK-1 to check)
// if (elem.classList.contains('www') == true){
//     elem.classList.remove('www')
//     console.log(elem.classList,"класс удален")
// }
// else{
//     elem.classList.add('www')
//     console.log(elem.classList,"класс добавлен")
// }

//TASK-5    (you can use TASK-1 to check)
// console.log(elem.classList.length)

//TASK-6
// alert(elem.classList[0])
// alert(elem.classList[1])  

//TASK-7        (CSS)
// let elem = document.querySelector('#elem')
// elem.style.color = 'red'
// elem.style.fontSize = '30px'




//TASK-1        //-----TAGNAME-----//
// let elem = document.getElementById('elem')
// alert(elem.tagName)

// //TASK-2
// // let elem = document.getElementById('elem')
// // let str = elem.tagName
// // alert(str.toLowerCase())

// //TASK-3
// //-----------//

// //TASK-1        //-----appendChild-----//
// // let elem = document.getElementById('ol')
// // let li = document.createElement('li')
// // li.innerHTML = 'пункт'
// // elem.appendChild(li)

// //TASK-2       
// // let arr = ['dfdfdf','fgfgfgfg','ghghghgh']
// // for (let i = 0;i < arr.length;i++){
// //     let ul = document.getElementById("elem");
// //     let li = document.createElement("li");
// //     li.innerHTML = arr[i];
// //     ul.appendChild(li);
// // }

// //Вставка элементов через insertAdjacentHTML//
// //TASK1,2,3,4
// let elem = document.getElementById("elem")
// elem.insertAdjacentHTML('beforebegin',"<span>!!!</span>")
// elem.insertAdjacentHTML('afterend',"<span>!!!</span>")
// elem.insertAdjacentHTML('afterbegin',"<span>!!!</span>")
// elem.insertAdjacentHTML('beforeend',"<span>!!!</span>")
// //Удаление и клонирование//
// //TASK 1 
function Click(){
    let parent = document.getElementById('parent')
    parent.removeChild(parent.lastElementChild)
}
// //TASK 2
function Click2(){
    let parent = document.getElementById('ol')
    parent.removeChild(parent.lastElementChild)
}
// //TASK 3
function Click3(){
    let elem = document.getElementById('elem3')
    elem.parentNode.removeChild(elem)
}
// //TASK 4 
const button = document.querySelector("#button")
console.log(button)
function remove(){
    button.parentNode.removeChild(button)
}
// button.forEach(buttonItem => {
//     buttonItem.addEventListener("click",remove)
// })  
// //TASK 5
let input = document.getElementById("input12")
let submit = document.getElementById("submit");
function click(){
    let clone = input.cloneNode(false);
    console.log(input)
}


//Потомки//

//TASK 1
let elem = document.getElementById('elem');
elem.firstElementChild.style.color = "red";
//TASK 2
let elem5 = document.getElementById('elem5');
elem5.lastElementChild.style.color = "red";
//TASK 3
let elem6 = document.getElementById('elem6');
for(let i = 0;i< elem6.children.length;i++){
    elem6.children[i].innerHTML += "!"
}

//Coceдu//
//TASK1
let elem7 = document.getElementById('elem7');
elem7.previousElementSibling.innerHTML += " added \"!\""
//TASK2
let elem8 = document.getElementById('elem8');
elem8.nextElementSibling.innerHTML += " added \"!\""
//TASK3
let elem9 = document.getElementById('elem9');
let sosed = elem9.nextElementSibling
sosed.nextElementSibling.innerHTML += " added \"!\""

//Родители//
//TASK1
let child4 = document.getElementById('child4');
child4.parentElement.style.color = "red"
child4.style.color = "black"
//TASK2
let child5 = document.getElementById('child5');
let parent = child5.parentElement
parent.parentElement.style.color = "red"
parent.style.color = "black"
child4.style.color = "black"




