Cypress.on('uncaught:exception', (err) => {
  console.error('Erro não capturado:', err.message)
  return false
})

describe('Proesc', () => {
  it('Campos e F5', () => {
    cy.visit('https://app.proesc.com/login')

    // Login
    cy.get('[name="email"]')
      .should('be.visible')
      .type('ivoavancini@hotmail.com')
      .should('have.value', 'ivoavancini@hotmail.com')

    cy.get('[name="password"]')
      .should('be.visible')
      .type('Ivonando123.', { log: false })
      .should('have.value', 'Ivonando123.')

    cy.get('.g-recaptcha').should('be.visible').click()

    // Navegação até "Notas por avaliação"
    cy.get('.bi-mortarboard').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(1) > :nth-child(1)').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(5) > [href="#"]').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(2) > .open > ul > :nth-child(2) > a')
      .should('be.visible')
      .click()

    // Seleciona diário (2º e depois 1º bimestre)
    cy.get('[name="diario_id"]').should('be.visible').select('9715518').should('have.value', '9715518')
    cy.get('[name="diario_id"]').select('9715517').should('have.value', '9715517')

    // Ativa edição em massa
    cy.get('.ativar-edicao-todos').should('be.visible').click()

    const notaRow2 = '[data-row="row_2"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]'
    const notaRow3 = '[data-row="row_3"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]'
    const notaRow4 = '[data-row="row_4"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]'
    const notaRow5 = '[data-row="row_5"] > .nota-avaliacao > .input-block > [name="avaliacoes[4742982]"]'

    // Preenche notas
    cy.get(notaRow2).should('be.visible').clear().type('3').should('have.value', '3')
    cy.get(notaRow3).should('be.visible').clear().type('6').should('have.value', '6')
    cy.get(notaRow4).should('be.visible').clear().type('9').should('have.value', '9')
    cy.get(notaRow5).should('be.visible').clear().type('10').should('have.value', '10')

    // Salva
    cy.get('.col-md-4 > .btn-primary').should('be.visible').click()

    // F5 e valida persistência
    cy.reload()

    // Se após reload a tela não vier carregada, re-seleciona o diário
    cy.get('[name="diario_id"]').should('be.visible').select('9715517').should('have.value', '9715517')

    cy.get(notaRow2).should('have.value', '3')
    cy.get(notaRow3).should('have.value', '6')
    cy.get(notaRow4).should('have.value', '9')
    cy.get(notaRow5).should('have.value', '10')
  })
})
