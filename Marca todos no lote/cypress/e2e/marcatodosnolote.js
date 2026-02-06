Cypress.on('uncaught:exception', (err) => {
  console.error('Erro não capturado:', err)
  return false
})

describe('Proesc', () => {
  it('Campos e F5', () => {
    cy.visit('https://app.proesc.com/login')

    // Preencher o campo de email
    cy.get('[name="email"]')
      .should('be.visible')
      .type('ivoavancini@hotmail.com')
      .should('have.value', 'ivoavancini@hotmail.com')

    // Preencher o campo de senha
    cy.get('[name="password"]')
      .should('be.visible')
      .type('Ivonando123.', { log: false })
      .should('have.value', 'Ivonando123.')

    // Entrar com login
    cy.get('.g-recaptcha').should('be.visible').click()

    // Navegar pelas abas
    cy.get('.bi-mortarboard').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(1) > :nth-child(1)').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(5) > [href="#"]').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(2) > .open > ul > :nth-child(2) > a').should('be.visible').click()

    // Selecionar "2º BIMESTRE" e depois "1º BIMESTRE"
    cy.get('[name="diario_id"]').should('be.visible').select('9715518').should('have.value', '9715518')
    cy.get('[name="diario_id"]').select('9715517').should('have.value', '9715517')

    const randomNota = Math.floor(Math.random() * 11).toString()
    const campoNota = '.font-8 > [name="avaliacoes[4742982]"]'

    cy.get('[data-row="row_0"] > [data-col="col_0"]').should('be.visible').click() // Marca todos pro lote
    cy.get('.mt-3 > .btn').should('be.visible').click()

    cy.get(campoNota)
      .should('be.visible')
      .clear()
      .type(randomNota)
      .should('have.value', randomNota)

    cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .should('be.visible')
      .click()

    cy.get('.ativar-edicao-coluna > .fa').should('be.visible').click()
    cy.get('.font-8 > .btn-group > .btn-primary > .fa').should('be.visible').click()

    // F5 (recarregar) + validar persistência
    cy.reload()
    cy.get(campoNota).should('have.value', randomNota)
  })
})
