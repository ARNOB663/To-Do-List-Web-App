const  todoInput = document.getElementById('todo-input')
const addTaksButton  = document.getElementById('add-tesk-btn')
const todoList = document.getElementById('todo-list')

let task = []

addTaksButton.addEventListener('click' ,() => {

const taskText = todoInput.value.trim()//
if(taskText === "") return;

const newTask = {
    id:  Date.now(),
    text: taskText,
    completed: false 
}
task.push(newTask)
todoInput.value = ""// clear input
console.log(task)
});