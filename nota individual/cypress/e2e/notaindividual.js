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
    cy.get('[name="diario_id"]')  // Seletor para o campo Diário
    .select('9715518')  // Seleciona o valor "2º BIMESTRE"
    .should('have.value', '9715518');  // Verifica se o valor foi selecionado corretamente
    cy.get('[name="diario_id"]')  // Seletor para o campo Diário
    .select('9715517')  // Seleciona o valor "1º BIMESTRE"
    .should('have.value', '9715517');  // Verifica se o valor foi selecionado corretamente
     cy.get('.fa-pencil-square-o').eq(2).click(); // seleciona a primeira nota
     cy.get('[data-row="row_2"] .nota-avaliacao .input-block [name="avaliacoes[4742982]"]') // seleciona a primeira nota
     .clear()  // Limpa o campo 
     .type('8');  // Digita o valor "8"
     cy.get('[data-row="row_2"] > [style="text-align: center;"] > .btn-group > .btn-primary > .fa').click() // salva a nota




    
    

   
  });
});