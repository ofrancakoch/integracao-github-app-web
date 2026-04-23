# 🧮 Calculadora Web

Este projeto é uma aplicação web de uma Calculadora interativa, desenvolvida como parte de uma atividade prática acadêmica focada no aprendizado de versionamento de código e trabalho em equipe utilizando Git e GitHub.

## ✨ Funcionalidades

A versão final da aplicação conta com as seguintes funcionalidades operacionais e visuais:

- **Operações Matemáticas Básicas:** Adição (`+`), Subtração (`-`), Multiplicação (`*`) e Divisão (`/`).
- **Manipulação de Entrada:** - Botão `C` para limpar totalmente o visor.
  - Botão `⭠` para apagar o último caractere digitado (backspace).
- **Tratamento de Erros:** O visor exibe "Erro" em caso de expressões matemáticas inválidas, com bloqueio seguro para novas entradas até que a tela seja limpa.
- **Alternância de Temas (Dark Mode):** Um botão dedicado (`{}`) que permite ao usuário alternar a interface entre o tema claro (padrão) e o tema escuro.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web (Vanilla), garantindo leveza e ausência de dependências externas:

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** - Utilização de `Flexbox` e `CSS Grid` para o alinhamento responsivo do teclado numérico e dos operadores.
  - Tipografia personalizada importada do Google Fonts (*Poppins* para o visor e *Smooch Sans* para os botões).
  - Variáveis e classes de estado para o controle do tema escuro.
- **JavaScript (ES6):**
  - Lógica de cálculo implementada de forma segura utilizando construtores de função (`Function`).
  - Manipulação do DOM para atualização do visor e captura de eventos de clique.

## 🚀 Como executar o projeto

Como o projeto não utiliza frameworks complexos, rodá-lo localmente é muito simples:

1. Faça o clone deste repositório na sua máquina local:
   ```bash
   git clone <link-do-seu-repositorio>