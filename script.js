// Capturando os elementos.
const inputContent = document.getElementById("input-content");
const errorMessage = document.getElementById("error-message");
const buttonAdd = document.getElementById("button-add");
const buttonCompleted = document.getElementById("completed-task");
const buttonPending = document.getElementById("pending-task");
const buttonAllTask = document.getElementById("all-task");
const listContent = document.getElementById("list-content");
const buttonConfirm = document.getElementById("button-confirm");
const buttonCancel = document.getElementById("button-cancel");
const modal = document.getElementById("modal");

// Selecionando o indice para remoção da tarefa.
let indexRemove = null;

// Convertendo o texto em array/objeto.
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Ativando o filtro.
let activeFilter = "todas";

// Validando campo vazio.
function emptyField() {
  // Variável para controlar se existe erro.
  let isError = false;

  // Verificando se o input está vazio.
  if (inputContent.value === "") {
    // Se o input estiver vazio vai aparecer a mensagem: "Digite uma tarefa!"
    errorMessage.textContent = "Digite uma tarefa!";

    // Mostra a mensagem para o usuário.
    errorMessage.style.display = "block";

    // Informando que tem erro caso input esteja vazio.
    isError = true;
  } else {
    // Esconde o erro se estiver tudo ok.
    errorMessage.style.display = "none";
  }

  // Retorna o resultado final, se tiver erro mostra a mensagem, se não, não faz nada.
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

  // Salvando a tarefa e convertendo o array em texto.
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  // Depois de adicionar a tarefa vamos limpar o input.
  inputContent.value = "";

  //   Atualizando a interface.
  render();
}

// Criando evento de ação no click adicionar.
buttonAdd.addEventListener("click", addTask);

// Criando a função para renderizar as li.
function render() {
  // Limpa todo o conteúdo da lista antes de renderizar novamente para evitar duplicações.
  listContent.innerHTML = "";

  // Filtro de tarefas
  let filteredTask = tarefas;

  // Verificando se as tarefas estão concluídas.
  if (activeFilter === "concluidas") {
    filteredTask = tarefas.filter(function (tarefa) {
      return tarefa.completed === true;
    });
  }

    // Verificando se as tarefas estão pendentes.
  if (activeFilter === "pendentes") {
    filteredTask = tarefas.filter(function (tarefa) {
      return tarefa.completed === false;
    });
  }

  // Percorre o array de tarefas.
  // Para cada tarefa, temos acesso:
  // ao objeto da tarefa (tarefa).
  // ao índice dela no array (indice).
  filteredTask.forEach(function (tarefa, indice) {
    // Criando uma  <li> que representará uma tarefa na interface.
    const list = document.createElement("li");

    // Definindo o texto da tarefa dentro da <li>.
    list.textContent = tarefa.text;

    // Adiciona a <li> dentro da lista no HTML, fazendo aparecer na tela.
    listContent.appendChild(list);
    // verifica se está concluída
    if (tarefa.completed) {
      list.classList.add("checked");
    }

    // Evento de clique na tarefa
    list.addEventListener("click", function () {
      toggleTask(indice);
    });

    // Criando botão para remover tarefa.
    const buttonDelete = document.createElement("button");

    // Adicionando ícone de lixeira.
    buttonDelete.innerHTML = `<img src="assets/trash.svg" alt="remover" />`;

    // Criando a classe para estilizar no css.
    buttonDelete.classList.add("button-delete");

    // Evento de clique para quando usuário clicar na lixeira.
    buttonDelete.addEventListener("click", function (e) {
      // impede o clique de subir para o <li>
      e.stopPropagation();

      // Chamando a função remover tarefa.
      removeTask(indice);
    });
    // Adiciona o botão de deletar dentro do item da lista.
    list.appendChild(buttonDelete);

    // Adiciona o item completo na lista exibida na tela.
    listContent.appendChild(list);
  });
}

// Capturando evento do filtro concluídas.
buttonCompleted.addEventListener("click", function () {
  activeFilter = "concluidas";
  render();
});

// Capturando evento do filtro pendentes.
buttonPending.addEventListener("click", function () {
  activeFilter = "pendentes";
  render();
});

// Capturando evento do filtro todas.
buttonAllTask.addEventListener("click", function () {
  activeFilter = "todas";
  render();
});

// Função para remover tarefa.
function removeTask(indice) {
  indexRemove = indice;
  modal.style.display = "flex";
}

// Adicionando evento de confirmar
buttonConfirm.addEventListener("click", function () {
  tarefas.splice(indexRemove, 1);
  modal.style.display = "none";

  // Salvando a tarefa e renderizando após remover a tarefa desejada.
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  render();
});

// Quando o usuário clica em "Não", ele só esconde o modal sem fazer nada com a tarefa.
buttonCancel.addEventListener("click", function () {
  modal.style.display = "none";
});

// Função responsável por alternar o estado de conclusão de uma tarefa.
function toggleTask(indice) {
  tarefas[indice].completed = !tarefas[indice].completed;
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  render();
}
// Atualizando a tela que contém interface( parte principal que faz aparecer as tarefas na tela).
render();
