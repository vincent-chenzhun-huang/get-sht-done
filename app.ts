const todoList: string[] = []
const todoInput: HTMLInputElement = document.getElementById('todoInput') as HTMLInputElement
console.log("Current list of items: ", todoList)
const todoListDiv: HTMLDivElement = document.getElementById('todoListContainer') as HTMLDivElement


function addTodo(): void {
    if (todoInput == null) {
        console.error('The todo input is missing from the page')
        return
    }

    const newItem: string = todoInput.value

    if (newItem.trim() !== ''){
        console.log('Adding todo: ', newItem)

        //add the new item to the list
        todoList.push(newItem)
        console.log('New todo list: ', todoList)

        todoInput.value = ''
    }
}

function updateTodoList(): void {
    console.log("Updating the rendered todo list")
    todoListDiv.innerHTML = ''
    todoListDiv.textContent = ''

    const ul = document.createElement('ul')
    ul.setAttribute('id', 'todoList')
    todoListDiv.appendChild(ul)

    todoList.forEach(item => {
        const li = document.createElement('li')
        li.setAttribute('class', 'todo-list-item')
        li.innerText = item
        ul.appendChild(li)
    })
}