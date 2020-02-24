"use strict";
var todoList = [];
var todoInput = document.getElementById('todoInput');
console.log("Current list of items: ", todoList);
function addTodo() {
    if (todoInput == null) {
        console.error('The todo input is missing from the page');
        return;
    }
    var newItem = todoInput.value;
    if (newItem.trim() !== '') {
        console.log('Adding todo: ', newItem);
        //add the new item to the list
        todoList.push(newItem);
        console.log('New todo list: ', todoList);
        todoInput.value = '';
    }
}
