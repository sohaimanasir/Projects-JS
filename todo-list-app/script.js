// ===== Select DOM Elements ======

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// ===== Try to load saved TODOS from Local storage (if any) ======

const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

// ===== Function for Save current todos in Local Storage ======

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// ====== Create a DOM node for a todo object and append it to the list =====

function createTodoNode(todo, index) {
    const li = document.createElement('li');

    // checkbox to toggle completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;

        // TODO: visual feedback : strike - through when completed
        textSpan.style.textDecoration = todo.completed ? 'line-through' : '';
        saveTodos();
    })

    // ==== Text of the TODO ====

    const textSpan = document.createElement('span');
    textSpan.textContent = todo.text;
    textSpan.style.margin = '0 8px';

    if (todo.completed) {
        textSpan.style.textDecoration = 'line-through';
    }

    //  add double click event listener to edit

    textSpan.addEventListener('dblclick', () => {
        const newText = prompt("Edit Todo", todo.text);
        if (newText !== null) {
            todo.text = newText.trim();
            textSpan.textContent = todo.text;
            saveTodos();
        }
    })

    // ===== Delete TODO Button =====

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => {
        todos.splice(index, 1);
        render();
        saveTodos();
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);

    return li


}

// ===== Render the whole todo list from todo array =====

function render() {
    list.innerHTML = '';

    // recreate each item 

    todos.forEach((todos, index) => {
        const node = createTodoNode(todos, index);

        list.appendChild(node)
    });
}

// ==== Function to add TODO =====

function addTodo() {
    const text = input.value.trim();
    if (!text) {
        return
    }

    // push a new todo object

    todos.push({ text: text, completed: false });
    input.value = '';
    render();
    saveTodos();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addTodo();
    }
})
render();



