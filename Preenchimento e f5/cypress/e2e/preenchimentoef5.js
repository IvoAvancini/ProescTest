describe('Proesc', () => {
  it('Campos e f5', () => {
    cy.visit('https://app.proesc.com/login')
    
    // Preencher o campo de email 
    cy.get('[name="email"]').type('ivoavancini@hotmail.com').should('have.value', 'ivoavancini@hotmail.com');
    
    // Preencher o campo de senha 
    cy.get('[name="password"]').type('Ivonando123.').should('have.value', 'Ivonando123.');

    // entrar com login
    cy.get('.g-recaptcha').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora a falha e permite que o teste continue
    console.error('Erro não capturado:', err);
    return false;  // Impede o Cypress de falhar o teste
  
});
    cy.get('.bi-mortarboard').click() //clica na aba "Pedagógico"
    cy.get('[style="display: block;"] > :nth-child(1) > :nth-child(1)').click() // clica na aba "Professor"
    cy.get('[style="display: block;"] > :nth-child(5) > [href="#"]').click() // clica na aba "Avaliações"
    cy.get(':nth-child(1) > :nth-child(2) > .open > ul > :nth-child(2) > a').click() //clica na aba "Notas por avaliação
     // Selecionar o "Exercício" 
    cy.get('[name="exercicio_id"]')  // Seletor para o campo Exercício
      .select('15670')  // Seleciona o valor correto, que representa "2025"
      .should('have.value', '15670');  // Verifica se o valor foi selecionado corretamente


    // Selecionar a "Turma"
    cy.get('[name="turma_id"]')  // Seletor para o campo Turma
      .select('391354')  // Seleciona o valor correto, que representa "TURMA SELEÇÃO QA"
      .should('have.value', '391354');  // Verifica se o valor foi selecionado corretamente

    // Selecionar a "Disciplina"
    cy.get('[name="disciplina_id"]')  // Seletor para o campo Disciplina
      .select('2526975')  // Seleciona o valor correto, que representa "MATEMÁTICA"
      .should('have.value', '2526975');  // Verifica se o valor foi selecionado corretamente

    // Selecionar o "Diário"
    cy.get('[name="diario_id"]')  // Seletor para o campo Diário
      .select('9715517')  // Seleciona o valor correto, que representa "1º BIMESTRE"
      .should('have.value', '9715517');  // Verifica se o valor foi selecionado corretamente
       cy.wait(2000);
      cy.reload(); // f5 na página

  });
});
