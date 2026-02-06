# Proesc — Testes End-to-End (E2E) com Cypress

Projeto de automação de testes E2E com Cypress para validar fluxos críticos do sistema Proesc, com foco em lançamento, edição e persistência de notas (regras de negócio + confiabilidade do sistema).

Além das automações, o projeto inclui uma planilha de QA com cenários, registro de bugs e relatório de testes, garantindo rastreabilidade e organização do processo.

# 🎯 Objetivo

Demonstrar experiência prática em Qualidade de Software (QA), automação de testes E2E, validação de regras de negócio e garantia da qualidade em sistemas web, simulando cenários reais de uso.

# 🧪 Escopo dos Testes Automatizados (5 cenários)

Marcação de todos os alunos em lote — atribuição e edição de notas em massa

Marcação de um lote específico — seleção de grupo sem impactar toda a turma

Edição de nota individual — atribuição/alteração de nota para um aluno específico

Edição de notas selecionadas — alteração parcial validando regras específicas

Persistência após atualização (F5) — valida que as notas permanecem após recarregar a página

# 📄 Documentação de Testes

O repositório contém a planilha Cenário de teste.xlsx com:

Cenários de Teste (manual e automatizado)

Bug Report

Test Report

# 🛠 Tecnologias Utilizadas

Cypress

JavaScript

Node.js

## ▶️ Como Executar o Projeto

### Instalação
```bash
git clone https://github.com/IvoAvancini/ProescTest.git
cd ProescTest
npm install
```
## Executar testes

### Headless:
``` bash
npx cypress run
```
### Interface do Cypress:
```bash
npx cypress open
```






