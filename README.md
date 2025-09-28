# Projeto de Automação com Cypress + Cucumber

Este projeto utiliza o Cypress com Cucumber, usando a linguagem Gherkin para automação de testes da aplicação **Buggy Cars Rating**.

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm (versão 10 ou superior)

### 📁 Estrutura do projeto
├── cypress/
│   ├── e2e/
│       ├── Features         ← Arquivos `.feature` com os cenários escritos em Gherkin
│       ├── Step_definitions ← Arquivos `.js` com os passos definidos para os testes
├── cypress.config.js        ← Configurações do Cypress
├── package.json
└── README.md

### Instalação

1. **Clone o repositório e navegue até a pasta:**
   ```bash
   cd cypress_automation
   ```

2. **Instalar as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Instalar o Cypress como dependência de desenvolvimento:**
   ```bash
   npm install cypress --save-dev
   ```

### Executando os testes

#### Modo interativo (Cypress Test Runner)
Para abrir a interface gráfica do Cypress:
```bash
npx cypress open
```

#### Modo sem interface gráfica (linha de comando)
Para executar todos os testes via terminal:
```bash
npx cypress run
```

### 🌐 Aplicação testada

Os testes são executados contra a aplicação Buggy Rating disponível em:
**URL:** https://buggy.justtestit.org/

A Buggy Rating é uma aplicação de exemplo que simula um site de classificação de carros, permitindo:
- Cadastro e login de usuários
- Formulários de informações pessoais

