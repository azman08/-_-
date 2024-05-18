document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
      return;
    }

    const todoList = document.getElementById("todoList");
    const todoItem = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.textContent = todoText;
    todoItem.appendChild(todoSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = "";
    todoInput.focus();
  });
