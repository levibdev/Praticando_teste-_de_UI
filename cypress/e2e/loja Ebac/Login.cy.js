/// <reference types="cypress"/>

beforeEach(() => {
   cy.visit('minha-conta/')
});

describe('Funcionalidade : Login', () =>{
      it('Deve fazer login com sucesso', () => {         
         cy.get('#username').type('levi.barros@teste.com')
         cy.get('#password').type('teste123')
         cy.get('.woocommerce-form > .button').click()

         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, levi.barros (não é levi.barros? Sair)')

      })

      it('Deve exibir uma mensagem de erro ao inserir usuario errado.', () => {
         cy.get('#username').type('levi.barro@teste.com')
         cy.get('#password').type('teste123')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
      });

 } )