// Capturando os elementos.
const inputContent = document.getElementById("input-content");
const errorMessage = document.getElementById("error-message");
const buttonAdd = document.getElementById("button-add");
const buttonCompleted = document.getElementById("completed-task");
const buttonPending = document.getElementById("pending-task");
const buttonAllTask = document.getElementById("all-task");
const listContent = document.getElementById("list-content");

//
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

//
let activeFilter = "todas";

// Validando campo vazio.
function emptyField() {
  // Variável para controlar se existe erro.
  let isError = false;

  if (inputContent.value === "") {
    errorMessage.textContent = "Digite uma tarefa primeiro";
    isError = true;
  } else {
    errorMessage.style.display = "none"; // Esconde o erro se estiver tudo ok
  }
  return isError;
}

// Criando a função para adicionar a tarefa.
function addTask() {
  //Validando se está vazio ao clicar em adicionar.
  if (emptyField()) return;

  // Pegando o valor do input.
  const content = inputContent.value;

  // Criando o objeto de tarefas.
  let task = {
    text: inputContent.value,
    completed: false,
  };

  // Empurrando a tarefas para o array.
  tarefas.push(task);

  // Salvando a tarefa e convertando o array em texto.
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  // Depois de adicionar a tarefa vamos limpar o input.
  inputContent.value = "";

//   Atualizando a interface.
  render ()
}

// Criando evento de ação no click adicionar.
buttonAdd.addEventListener("click", addTask)

function render () {

}