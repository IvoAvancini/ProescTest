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

    // Edita e salva a nota
    cy.get('.fa-pencil-square-o').eq(2).should('be.visible').click()

    const campoNota =
      '[data-row="row_2"] .nota-avaliacao .input-block [name="avaliacoes[4742982]"]'

    cy.get(campoNota)
      .should('be.visible')
      .clear()
      .type('8')
      .should('have.value', '8')

    cy.get('[data-row="row_2"] > [style="text-align: center;"] > .btn-group > .btn-primary > .fa')
      .should('be.visible')
      .click()

    // F5 e valida persistência
    cy.reload()

    cy.get('[name="diario_id"]').should('be.visible').select('9715517').should('have.value', '9715517')
    cy.get(campoNota).should('have.value', '8')
  })
})
