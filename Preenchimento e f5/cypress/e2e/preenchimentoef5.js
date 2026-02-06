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

    // Navegar até "Notas por avaliação"
    cy.get('.bi-mortarboard').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(1) > :nth-child(1)').should('be.visible').click()
    cy.get('[style="display: block;"] > :nth-child(5) > [href="#"]').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(2) > .open > ul > :nth-child(2) > a')
      .should('be.visible')
      .click()

    // Seleções (filtros)
    cy.get('[name="exercicio_id"]').should('be.visible').select('15670').should('have.value', '15670')
    cy.get('[name="turma_id"]').should('be.visible').select('391354').should('have.value', '391354')
    cy.get('[name="disciplina_id"]').should('be.visible').select('2526975').should('have.value', '2526975')
    cy.get('[name="diario_id"]').should('be.visible').select('9715517').should('have.value', '9715517')

    // Garante que a tela carregou o conteúdo antes do F5
    cy.get('[name="diario_id"]').should('have.value', '9715517')

    // F5 (recarregar) e validar que os filtros continuam selecionados
    cy.reload()

    cy.get('[name="exercicio_id"]').should('have.value', '15670')
    cy.get('[name="turma_id"]').should('have.value', '391354')
    cy.get('[name="disciplina_id"]').should('have.value', '2526975')
    cy.get('[name="diario_id"]').should('have.value', '9715517')
  })
})

