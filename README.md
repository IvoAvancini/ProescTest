# Automação de Testes - Proesc

Este repositório contém um conjunto de testes automatizados para o sistema **Proesc**, utilizando a ferramenta **Cypress**. Os testes cobrem diferentes cenários do sistema, garantindo que as funcionalidades de marcação de notas, navegação entre abas e atualização da página funcionem corretamente.

## Estrutura do Projeto

O projeto está dividido em 5 principais automações, cada uma focada em um aspecto diferente do sistema. As automações são:

### 1. **Marca todos no lote**
- **Objetivo:** Marcar todos os alunos de uma vez para uma avaliação, facilitando a aplicação de notas em lote.
- **Funcionalidade:** Esta automação permite marcar todos os alunos em uma avaliação ou tarefa específica com a mesma nota, sem a necessidade de selecionar aluno por aluno.

### 2. **Marcação de um lote**
- **Objetivo:** Marcar um grupo específico de alunos ou avaliações.
- **Funcionalidade:** Seleciona um conjunto de alunos para editar suas notas de forma coletiva, sem impactar todos os alunos da turma.

### 3. **Nota individual**
- **Objetivo:** Editar ou atribuir uma nota para um aluno específico.
- **Funcionalidade:** Ao contrário da marcação de lote, essa automação permite a personalização de notas para cada aluno de forma independente.

### 4. **Preenchimento e f5**
- **Objetivo:** Preencher campos de notas e atualizar a página (simulando o "F5").
- **Funcionalidade:** Verifica se, após atualizar a página, as informações preenchidas são mantidas ou se há algum erro ao recarregar os dados.

### 5. **Seleção de algumas notas**
- **Objetivo:** Selecionar e editar apenas algumas notas específicas, em vez de todas.
- **Funcionalidade:** Focada em cenários onde se precisa alterar apenas uma parte das avaliações (ex: editar as notas de um grupo de alunos selecionados).

## Tecnologias Usadas

- **Cypress**: Framework de automação para testes end-to-end.
- **JavaScript**: Linguagem usada para a escrita dos testes.

## Como Rodar os Testes

### Pré-requisitos
- **Node.js**: Você precisa ter o Node.js instalado no seu computador. Para instalar, siga a [documentação oficial](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu computador:

    ```bash
    git clone https://github.com/IvoAvancini/ProescTest.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd ProescTest
    ```

3. Em cada pasta que contém os testes, execute o comando abaixo para instalar as dependências do projeto:

    ```bash
    npm install
    ```

    **Observação**: Você deve executar o comando `npm install` **dentro de cada pasta individualmente**, pois cada uma delas tem seu próprio `package.json`.

---

## Executando os Testes

1. Após instalar as dependências em cada pasta, execute o Cypress com o comando:

    ```bash
    npx cypress open
    ```

2. O Cypress será aberto e você poderá rodar os testes diretamente no navegador.
