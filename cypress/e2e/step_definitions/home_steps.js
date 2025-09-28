import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que o usuário acessa a aplicação', () => {
  cy.visit('/')
})

When('a página inicial carrega', () => {
  cy.get('body').should('be.visible')
  cy.url().should('include', 'buggy.justtestit.org')
})

Then('deve aparecer o título {string}', (título) => {
   cy.get('h1.display-4')
    .should('be.visible')
    .invoke('text')
    .then((textoExtraido) => {
      const normalizado = textoExtraido.replace(/\s+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim()
      expect(normalizado).to.include(título)
    })
})

Then('deve ser possível ver a descrição {string}', (descrição) => {
  cy.contains(descrição).should('be.visible')
})

Then('a imagem principal deve estar visível', () => {
  cy.get('img[src="/img/header-car.gif"]').should('be.visible')
})

Then('as seguintes imagens devem estar visíveis:', (dataTable) => {
  const imagePaths = dataTable.raw().map(row => row[0])

  imagePaths.forEach(imagePath => {
    cy.get(`img[src*="${imagePath}"]`)
      .should('exist')
      .and('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})

Then('deve ser possível visualizar a opção de {string}', (ações) => {
  cy.contains('button, a', ações).should('exist').and('be.visible')
})
