# Automação de Testes e Planilha de Testes - Proesc

Este repositório contém  um conjunto de testes automatizados para o sistema Proesc e uma **planilha detalhada** contendo **Cenários de Teste**, **Bug Report** e **Test Report**. As automações e a planilha complementam-se, garantindo uma cobertura ampla dos testes do sistema e uma documentação organizada dos resultados.

Utilizando a ferramenta **Cypress**. Os testes cobrem diferentes cenários do sistema, garantindo que as funcionalidades de edição de notas, preenchimentos dos campos de lançamento de notas e atualização da página funcionem corretamente.

## Estrutura do Projeto

O projeto está dividido em 5 principais automações, cada uma focada em um aspecto diferente do sistema. As automações são:

### 1. **Marca todos no lote**
- **Objetivo:** Marcar todos os alunos de uma vez para atribui ou editar as notas, facilitando a aplicação de notas em lote.
- **Funcionalidade:** Esta automação permite marcar todos os alunos em uma avaliação ou tarefa específica com a mesma nota, sem a necessidade de selecionar aluno por aluno.

### 2. **Marcação de um lote**
- **Objetivo:** Marcar um ou um grupo específico de alunos .
- **Funcionalidade:** Seleciona um ou um conjunto de alunos para editar ou atribuir suas notas de forma coletiva, sem impactar todos os alunos da turma.

### 3. **Nota individual**
- **Objetivo:** Editar ou atribuir uma nota para um aluno específico.
- **Funcionalidade:** Ao contrário da marcação de lote, essa automação permite a personalização de notas para cada aluno de forma independente.

### 4. **Seleção de algumas notas**
- **Objetivo:** Editar Notas  específicas.
- **Funcionalidade:** Focada em cenários onde se precisa alterar apenas uma parte das notas.
    
### 5. **Preenchimento e f5**
- **Objetivo:** Preencher o campo de Lançamento de notas e atualizar a página (simulando o "F5").
- **Funcionalidade:** Verifica se, os campos preenchem corretamente e após atualizar a página, as informações preenchidas são mantidas ou se há algum erro ao recarregar os dados.
 
  ### **Planilha de Testes**
Além das automações, o repositório também contém uma **planilha de testes** que ajuda a documentar os cenários de teste, os bugs encontrados e os resultados dos testes realizados.

A planilha está dividida nas seguintes seções:

- **Cenário de Teste**: Detalha o planejamento e execução de cada teste manual e automatizado.
- **Bug Report**: Relata qualquer problema ou erro encontrado durante os testes, com sugestões de correção e melhorias.
- **Test Report**: Contém os resultados dos finais dos testes.

O arquivo da planilha pode ser encontrado como `Cenário de teste.xlsx` neste repositório.

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
   
   ## Agradecimentos

Gostaria de expressar minha sincera gratidão à **Deborah**, que será a avaliadora deste projeto. 

Agradeço desde já pela atenção dedicada à análise do meu trabalho.

Estou à disposição para qualquer dúvida ou feedback, e espero que os testes apresentados atendam às expectativas.

**Muito obrigado!**

