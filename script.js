const add = document.getElementById('button')
const todolist = document.getElementById('todolist')
const input = document.getElementById('input')
const left = document.getElementById('left')

add.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (todoText !== "") {
        const newTodo = document.createElement('div');
        const todoTextNode = document.createTextNode(todoText);
        const deleteButton = document.createElement('button');

        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener('click', () => {
            todolist.removeChild(newTodo);
            left.innerHTML = todolist.childNodes.length
        });

        newTodo.appendChild(todoTextNode);
        newTodo.appendChild(deleteButton);
        todolist.appendChild(newTodo);

        left.innerHTML = todolist.childNodes.length

        input.value = "";
    }
});