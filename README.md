# Testes Automatizados de API - ServeRest

Projeto de automação de testes de API utilizando Cypress, focado na validação de endpoints do ServeRest para usuários, autenticação e produtos.

## 💡 Sobre o Projeto

Conjunto de testes automatizados para validar as APIs do ServeRest, incluindo contratos, CRUD de usuários e produtos, e autenticação. O projeto utiliza Cypress para execução dos testes e requer o ServeRest rodando localmente.

## 🛠️ Tecnologias Utilizadas

- Cypress (v13.6.0) - Framework de testes
- ServeRest - API de testes
- Node.js - Ambiente de execução
- Joi (v17.12.8) - Validação de contratos

## 📁 Estrutura do Projeto

```
└── cypress/
    ├── e2e/
    │   ├── api.cy.js      # Testes de usuários
    │   ├── login.cy.js    # Testes de autenticação
    │   └── produtos.cy.js # Testes de produtos
    └── contracts/
        ├── user.contracts.js
        └── produtos.contracts.js
```

## 📋 Suites de Testes

### Usuários
- Validação de cadastro
- Listagem de usuários
- Cadastramento com sucesso
- Validação de email inválido
- Edição de usuário
- Exclusão de usuário

### Login
- Autenticação com sucesso (dados fixos)

### Produtos
- Validação de contrato
- Listagem de produtos
- Cadastramento com sucesso
- Validação de produtos duplicados
- Edição de produto
- Exclusão de produto

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o ServeRest:
```bash
npm start
```
4. Execute os testes:
```bash
npm run cy:run
```

## ⚠️ Pré-requisitos

- Node.js instalado
- ServeRest rodando localmente
- Porta local disponível para o ServeRest

## 📝 Notas Importantes

- Os testes validam contratos de API usando schemas Joi
- ServeRest deve estar em execução durante os testes
- Testes de usuários e produtos incluem validações de contrato
- Autenticação usa dados fixos para login

## 🤝 Contribuição

Contribuições são bem-vindas! 

