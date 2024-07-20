document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                li.classList.toggle('completed');
            });
            const span = document.createElement('span');
            span.textContent = todoText;

            li.appendChild(checkbox);
            li.appendChild(span);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }

    window.addTodo = addTodo;
});
