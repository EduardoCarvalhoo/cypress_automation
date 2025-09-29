# Projeto de Automação com Cypress + Cucumber

Este projeto utiliza o Cypress com Cucumber, usando a linguagem Gherkin para automação de testes da aplicação **Buggy Cars Rating**.

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm (versão 10 ou superior)

### 📁 Estrutura do projeto
├── cypress/ <br>
│     &nbsp;&nbsp;&nbsp;&nbsp;    ├── e2e/ <br>
│     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ├── features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ← Arquivos `.feature` com os cenários escritos em Gherkin <br>
│     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ├── step_definitions &nbsp;&nbsp;&nbsp;&nbsp; ← Arquivos `.js` com os passos definidos para os testes <br>
├── cypress.config.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ← Configurações do Cypress <br>
├── package.json <br>
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
4. **Instalar o pré-processador Cucumber oficial para Cypress:**
   Permite escrever testes usando a sintaxe Gherkin (.feature)
   ```bash
   npm install --save-dev @badeball/cypress-cucumber-preprocessor
   ```
5. **Este pacote é um pré-processador de código baseado no esbuild, usado para compilar/transformar os arquivos de teste:**
   Compila os arquivos .js, .ts, ou .feature de forma rápida com esbuild.
   ```bash
   npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
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
- Logout do sistema
- Alteração de senha
- Formulários de informações pessoais

