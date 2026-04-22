# Lista de Tarefas V2

Uma lista de tarefas completa com filtros, persistência de dados e modal de confirmação. O usuário pode adicionar, concluir e remover tarefas, além de filtrar por status. Os dados são salvos no navegador e permanecem mesmo após recarregar a página.

---

## Como usar

1. Digite uma tarefa no campo de texto e clique em **Adicionar**
2. Clique na tarefa para marcá-la como concluída
3. Clique na lixeira para remover uma tarefa
4. Use os filtros para visualizar tarefas por status

---

## Funcionalidades

- Adicionar tarefas com validação de campo vazio
- Marcar e desmarcar tarefas como concluídas
- Remover tarefas com modal de confirmação personalizado
- Filtros: Todas, Concluídas e Pendentes
- Dados salvos no localStorage (persistem após recarregar)
- Renderização dinâmica da lista baseada no estado

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

---

## O que aprendi construindo esse projeto

Esse foi meu terceiro projeto construído do zero, e o mais complexo até agora. Durante o desenvolvimento pratiquei:

- **Estado** — guardar dados em array na memória e sincronizar com a interface
- **localStorage** — persistir dados entre sessões com `JSON.stringify` e `JSON.parse`
- **Renderização dinâmica** — gerar elementos HTML automaticamente a partir de um array
- **forEach** — percorrer arrays e criar elementos para cada item
- **filter** — filtrar arrays por condição para exibir subconjuntos de dados
- **Objetos** — estruturar dados com `{ text, completed }` e acessar propriedades
- **Toggle de estado** — inverter valores booleanos com o operador `!`
- **createElement e appendChild** — criar e inserir elementos no DOM programaticamente
- **stopPropagation** — impedir que eventos se propaguem para elementos pai
- **Modal customizado** — substituir o `confirm()` nativo por um modal estilizado
- **Índices de array** — usar a posição de cada item para operações de toggle e remoção
