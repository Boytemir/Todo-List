let Obj = [
   {
      text: "Learn VueJs",
      completed: false
   },
   {
      text: "Code a todo list",
      completed: false
   },
   {
      text: "Learn something else",
      completed: false
   },
];

console.log(Obj);

const formCreate = document.getElementById("form__create");
const createInput = document.getElementById("create-input");
const listGroup = document.querySelector(".list-group");


/*=====================
======= Get Todos =====
=====================*/
if(Obj.length) showTodos();

formCreate.addEventListener("submit", (e) => {
   e.preventDefault();

   let createInputValue = createInput.value.trim();

   if(createInputValue.length) {

      Obj.push({text: createInputValue, completed: false});
      showTodos();

   } else {
      createInputValue = "";
      showTodos();
   }

   createInput.value = "";
});


/*====================
====== show Todos ====
=====================*/
function showTodos() {
   listGroup.innerHTML = "";
   Obj.forEach((item, index) => {
      listGroup.innerHTML += `
      <li class="list-group__item">
        <label class="todosLabel ${item.completed == true ? "active" : ""}">${item.text}</label>
         <span>
            <button class="check ${item.completed == true ? "active" : ""}" onclick=(todoCompleted(${index}))>
               <i class="fa-solid fa-check ${item.completed == true ? "active" : ""}"></i>
            </button>
            <button type="button" class="delet" onclick=(deleteTodo(${index}))>
               <i class="fa-solid fa-trash"></i>
            </button>
         </span>
      </li>
      `
   });
}


/*===================
=====Todo completed==
===================*/

function todoCompleted(id) {
   const todosCompleted = Obj.map((item, index) => {
      if(id == index) {
         return {...item, completed: item.completed == true ? false : true}
      } else {
         return {...item}
      }
   });

   Obj = todosCompleted;
   showTodos();
   console.log(Obj);
}



/*=================
=== Delete Todos ==
 ================*/
function deleteTodo(id) {
   const deletedTodos = Obj.filter((item, index) => {
      return index !== id
   });

   Obj = deletedTodos;
   showTodos();
}



