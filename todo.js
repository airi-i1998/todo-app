const todoInput = document.getElementById("todoInput");
const deadline = document.querySelector('input[type="date"]');
const save = document.getElementById("save");
const todo = document.getElementById("todo");
const date = document.getElementById("date");
// DOM要素のID="select"を取得することでリアクティブな振る舞いを実現可能
const select = document.getElementById("select");

const item = {};

save.addEventListener("click", () => {
  item.todoInput = todoInput.value;
  item.deadline = deadline.value;

  inputTodo();

  todoInput.value = "";
  deadline.value = "";
});

const inputTodo = () => {
  const noInputTodo = todoInput.value === "";
  const noInputDate = deadline.value === "";

  if (noInputTodo && noInputDate) {
    window.alert("Todoと期日を入力してください");
    return;
  } else if (noInputTodo) {
    window.alert("Todoを入力してください");
    return;
  } else if (noInputDate) {
    window.alert("期日を入力してください");
    return;
  } else {
    todoList();
  }
};

const todoList = () => {
  const tr = document.createElement("tr");
  const select = document.createElement("select");
  select.innerHTML = `
  <option value="未着手">未着手</option>
  <option value="進行中">進行中</option>
  <option value="完了">完了</option>
  `;

  // createElementすることで、html側でタグを用意する必要がない！！
  // todo入力
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todoInput.value;

  // 期日入力
  const tdDate = document.createElement("td");
  tdDate.textContent = deadline.value;

  // ステータス
  const tdStatus = document.createElement("td");
  tdStatus.appendChild(select);

  tr.appendChild(tdTodo);
  tr.appendChild(tdDate);
  tr.appendChild(tdStatus);

  // テーブル取得
  const tableBody = document.querySelector(".todo-list table");
  tableBody.append(tr);
};
