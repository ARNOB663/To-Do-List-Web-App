document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTaksButton = document.getElementById('add-tesk-btn');
    const todoList = document.getElementById('todo-list');
    
    let tasks = JSON.parse(localStorage.getItem('task')) || [];

    tasks.forEach(task => renderTasks(task));
    
    addTaksButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;
        
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false 
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks(newTask);
        todoInput.value = ""; // clear input
    });
    
    function renderTasks(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>
        `;
    
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return; // Ignore click if it’s the delete button
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector("button").addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggle from firing
            tasks = tasks.filter((t) => t.id !== task.id); // Use 'tasks' array
            li.remove();
            saveTasks();
            renderTasks(newTask)
        });
        todoList.appendChild(li);
    }
    function saveTasks() {
        localStorage.setItem('task', JSON.stringify(tasks));
    }
});
