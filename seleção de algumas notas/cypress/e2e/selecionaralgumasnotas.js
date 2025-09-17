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

    cy.get('.ativar-edicao-todos'). click()
    cy.get('[data-row="row_2"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]')
      .clear()  // Limpa o campo
      .type('3');  // Digita a primeira nota da lista

    // Preencher primeira nota
    cy.get('[data-row="row_3"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]')
      .clear()  // Limpa o campo
      .type('6');  // Digita a segunda nota da lista

    // Preencher segunda nota
    cy.get('[data-row="row_4"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]')
      .clear()  // Limpa o campo
      .type('9');  // Digita a terceira nota da lista

    // Preencher terceira nota
    cy.get('[data-row="row_5"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]')
      .clear()  // Limpa o campo
      .type('10');  // Digita a quarta nota da lista

    // Salvar as alterações
    cy.get('.col-md-4 > .btn-primary').click();  // Clica para salvar
   


       
  });
})