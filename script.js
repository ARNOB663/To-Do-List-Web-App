document.addEventListener('DOMContentLoaded', () =>{


    const  todoInput = document.getElementById('todo-input')
    const addTaksButton  = document.getElementById('add-tesk-btn')
    const todoList = document.getElementById('todo-list')
    
    let task = JSON.parse(localStorage.getItem('task')) || [];

    task.forEach(task => renderTasks(task));
    
    addTaksButton.addEventListener('click' ,() => {
    
    const taskText = todoInput.value.trim()//
    if(taskText === "") return;
    
    const newTask = {
        id:  Date.now(),
        text: taskText,
        completed: false 
    }
    task.push(newTask);
    saveTasks();
    todoInput.value = ""// clear input
    console.log(task)
    });
    
    function renderTasks(task)
    {
       console.log(task.text)

    }
    
    function saveTasks()
    {
     localStorage.setItem('task',JSON.stringify(task));
    }
})