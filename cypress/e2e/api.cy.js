/// <reference types="cypress" />
import contrato from '../contracts/user.contract'

describe('Testes da Funcionalidade Usuários', () => {
  let userId;

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response => {
      return contrato.validateAsync(response.body)
    })
  });

  it('Deve listar usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).then((response) =>{
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('usuarios')
    })
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    let user = `Aluno ${Math.floor(Math.random() * 1000)}`
    let email = `aluno.${Math.floor(Math.random() * 100000)}@qa.com`

    cy.request({
      method: 'POST',
      url: 'usuarios',
      body: {
        "nome": user,
        "email": email,
        "password": "teste123",
        "administrador": "true"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      userId = response.body._id;
    })
  });

  it('Deve validar um usuário com email inválido', () => {
    cy.cadastrarUsuario("Liana Kahil", "linqaebac.com", "algo123", "true")
    .then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.email).to.equal('email deve ser um email válido')
    })
    
  });

  it('Deve editar um usuário previamente cadastrado', () => {
        const updateUser = {
          nome: `Aluno Editado ${Math.floor(Math.random() * 10000)}`,
          email:`aluno_editado.${Math.floor(Math.random() * 100000)}@qa.com`,
          password: 'teste@123',
          administrador: 'true'
        }

        cy.request({
          method: 'PUT',
          url: `usuarios/${userId}`,
          body: updateUser,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq('Registro alterado com sucesso')
        })
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    cy.request({
      method: 'DELETE',
      url: `usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Registro excluído com sucesso');
    })
  });

});
