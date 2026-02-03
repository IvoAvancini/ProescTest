# Proesc – Testes End-to-End (E2E) com Cypress

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar fluxos críticos do sistema **Proesc**, com foco em lançamento, edição e persistência de notas.

Além das automações, o projeto conta com uma planilha de testes contendo **cenários, registro de bugs e relatório de testes**, garantindo rastreabilidade e organização do processo de QA.

---

## 🎯 Objetivo
Demonstrar experiência prática em **automação de testes**, validação de regras de negócio e garantia da qualidade de sistemas web, simulando cenários reais de uso.

---

## 🧪 Escopo dos Testes Automatizados
O projeto é composto por **5 automações principais**:

1. **Marcação de todos os alunos em lote**  
   - Valida a atribuição e edição de notas em massa.

2. **Marcação de um lote específico**  
   - Seleção de um grupo específico de alunos sem impactar toda a turma.

3. **Edição de nota individual**  
   - Atribuição e alteração de nota para um aluno específico.

4. **Edição de notas selecionadas**  
   - Alteração parcial de notas, validando regras específicas.

5. **Preenchimento de notas com atualização da página (F5)**  
   - Verifica persistência dos dados após recarregamento da página.

---

## 📄 Documentação de Testes
O repositório inclui a planilha **Cenário de teste.xlsx**, contendo:

- **Cenários de Teste** (manual e automatizado)
- **Bug Report**
- **Test Report**

Essa documentação complementa as automações, garantindo visão completa do processo de QA.

---

## 🛠️ Tecnologias Utilizadas
- Cypress
- JavaScript
- Node.js

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado

### Instalação
Clone o repositório:
```bash
git clone https://github.com/IvoAvancini/ProescTest.git
