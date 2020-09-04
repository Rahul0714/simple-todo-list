//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listners
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',deleteCheck);
//functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault();
    //ToDo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    //checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
function deleteCheck(event){
    
    const item = event.target;
    //delete button
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}