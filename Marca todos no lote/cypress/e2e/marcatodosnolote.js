describe('Proesc', () => {
  it('Campos e f5', () => {
    cy.visit('https://app.proesc.com/login');
    
    // Preencher o campo de email 
    cy.get('[name="email"]').type('ivoavancini@hotmail.com').should('have.value', 'ivoavancini@hotmail.com');
    
    // Preencher o campo de senha 
    cy.get('[name="password"]').type('Ivonando123.').should('have.value', 'Ivonando123.');

    // Entrar com login
    cy.get('.g-recaptcha').click();
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignora a falha e permite que o teste continue
      console.error('Erro não capturado:', err);
      return false;  // Impede o Cypress de falhar o teste
    });

    // Navegar pelas abas
    cy.get('.bi-mortarboard').click(); // Clica na aba "Pedagógico"
    cy.get('[style="display: block;"] > :nth-child(1) > :nth-child(1)').click(); // Clica na aba "Professor"
    cy.get('[style="display: block;"] > :nth-child(5) > [href="#"]').click(); // Clica na aba "Avaliações"
    cy.get(':nth-child(1) > :nth-child(2) > .open > ul > :nth-child(2) > a').click(); // Clica na aba "Notas por avaliação"
    
    // Selecionar "2º BIMESTRE" e depois "1º BIMESTRE"
    cy.get('[name="diario_id"]').select('9715518').should('have.value', '9715518');
    cy.get('[name="diario_id"]').select('9715517').should('have.value', '9715517');

    const randomNota = Math.floor(Math.random() * 11);


    cy.get('[data-row="row_0"] > [data-col="col_0"]').click() // Marca todos pro lote
    cy.get('.mt-3 > .btn').click()
    cy.get('.font-8 > [name="avaliacoes[4742982]"]').clear().type(randomNota.toString());
    cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.ativar-edicao-coluna > .fa').click()
    cy.get('.font-8 > .btn-group > .btn-primary > .fa').click()

    










      });
});
