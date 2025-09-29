import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('o usuário preenche o email com {string}', (email) => {
  cy.get('input[name="login"]')
    .should('be.visible')
    .clear()
    .type(email, { delay: 100 })
})

When('o usuário preenche a senha com {string}', (senha) => {
  cy.get('input[name="password"]')
    .should('be.visible')
    .clear()
    .type(senha, { delay: 100 })
})

When('o usuário clica no botão de login', () => {
  cy.get('button[type="submit"]')
    .contains('Login')
    .should('be.visible')
    .click()
  
  cy.wait(2000)
})

Then('deve aparecer a mensagem de erro {string}', (mensagemErro) => {
  cy.get('span.label.label-warning')
    .should('be.visible')
    .and('contain.text', mensagemErro)
})

Then('o login deve ser realizado com sucesso', () => {
  cy.get('span.label.label-warning').should('not.exist')
  cy.url().should('include', 'buggy.justtestit.org')
  cy.url().should('not.include', '/login')
  cy.get('body').should('be.visible')
})

When('o usuário acessa o perfil', () => {
  cy.get('a.nav-link[href="/profile"]').click()
  cy.url().should('include', '/profile')
})

When('informa sua idade {string}', (idade) => {
  cy.get('input[name="age"]')
    .should('be.visible')
    .clear()
    .type(idade, { delay: 100 })
})

When('informa o campo de endereço {string}', (endereco) => {
  cy.get('textarea[name="address"]')
    .should('be.visible')
    .clear()
    .type(endereco, { delay: 100 })
})

When('atualiza o campo de telefone {string}', (telefone) => {
  cy.get('input[name="phone"]')
    .should('be.visible')
    .clear()
    .type(telefone, { delay: 100 })
})

When('atualiza o campo de hobbies {string}', (hobbies) => {
  cy.get('select[name="hobby"]')
    .should('be.visible')
    .select(hobbies)
})

When('clica no botão de salvar', () => {
  cy.get('button[type="submit"]')
    .contains('Save')
    .should('be.visible')
    .click()
})

Then('as informações devem ser salvas com sucesso', () => {
  cy.get('.alert-success')
    .should('be.visible')
    .and('contain.text', 'The profile has been saved successful')
})

Then('deve voltar para a página inicial clicando na logo {string}', (logoText) => {
  cy.get('a').contains(logoText)
    .should('be.visible')
    .click()
  cy.url().should('eq', 'https://buggy.justtestit.org/')
})