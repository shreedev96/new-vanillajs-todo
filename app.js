//Query Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");


//Event Listeners
document.getElementById('clearAll').addEventListener('click',clearAll);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


var count=0;

function addTodo(event){
    event.preventDefault();
  if(todoInput.value!=""){
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
  //create LI
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
  //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
  //check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  // append to the list
    todoList.appendChild(todoDiv);
  //Incrementing the count
    count++;
    document.getElementById("taskCount").innerHTML="Total Tasks: "+count;
  // reset the input value
    todoInput.value="";
  }
}

function deleteCheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
            count--;
            document.getElementById("taskCount").innerHTML="Total Tasks: "+count;
        });
    }
    //check todo
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
    const todos = document.querySelectorAll(".todo")
    console.log(todos);
    todos.forEach(function(todo){
        console.log(todo);
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                //alert(e.childNodes);
                break;
            case "Completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex";
                    //alert(e.childNodes);
                }
                else{
                    todo.style.display="none";
                    //alert(e.childNodes);
                }
                break;
            case "Incomplete":
                if (todo.classList.contains('completed')){

                    todo.style.display = 'none';

                }

                else{

                    todo.style.display = "flex";

                }

                break;

        }
    });
}
function clearAll(e) {
    document.querySelector('ul').innerHTML = '';
    count=0;
    document.getElementById("taskCount").innerHTML="Total Tasks: "+count;
}