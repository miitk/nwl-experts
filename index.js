const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `querySelector()` faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Seleciona todos os elementos que correspondem a um seletor CSS especificado",
        "Seleciona um elemento pelo seu ID",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (valor e tipo)",
        "Atribuição",
        "Comparação solta (apenas valor)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "shift()",
        "splice()",
        "pop()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string em um número em JavaScript?",
      respostas: [
        "parseString()",
        "convertToNumber()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método `addEventListener()` faz em JavaScript?",
      respostas: [
        "Adiciona um manipulador de eventos a um elemento HTML",
        "Remove um manipulador de eventos de um elemento HTML",
        "Dispara um evento",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Operador de negação",
        "Operador de OU lógico",
        "Operador de E lógico",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "22",
        "4",
        "Erro",
      ],
      correta: 0
    },
  ];
  //querySelector procura um elemento
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  // new serve para criar coisas novas, geralmente uma estrutura de dados ou objetos
  // específicos, o Set posso adicionar ou tirar, mas nunca posso repetir oq tem dentro
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector("#acertos span")
   mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  // loop ou repetição ou laço de repetição
  for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector("h3").textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta- " + perguntas.indexOf(item))
    //para cade resposta ele pega o valor e pega o índice dessa resposta específica 
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    //evento de mudança do input, quero olhar pro input e ver se ele mudou
    dt.querySelector("input").onchange = (event) => {
      //comparação == sempre será ou verdadeira ou falsa, isso checa se a resposta esta
      //correta ou não
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
  
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
  
  
  
    quizItem.querySelector("dl").appendChild(dt)
  }
  //remove a "Pergunta A que aparecia antes das 3 perguntas"
  //remove um elemento
  quizItem.querySelector("dl dt").remove()
  
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }