# language: pt
Funcionalidade: Fazer login no sistema
  Como usuário
  Quero acessar a página inicial, fazer tentativas de falhas e sucesso no login

  Cenário: Acessar a página inicial com sucesso
    Dado que o usuário acessa a página inicial
    Quando a página inicial carregar
    Então deve ser possível visualizar a opção de "Login"
    E deve ser possível visualizar a opção de "Register"

  Cenário: Tentativa de login com credenciais inválidas
    Dado que o usuário acessa a página inicial
    Quando o usuário preenche o email com "usuario@errado.com"
    E o usuário preenche a senha com "senhaerrada"
    E o usuário clica no botão de login
    Então deve aparecer a mensagem de erro "Anvalid username/password"

  Cenário: Login com sucesso e atualização de perfil
    Dado que o usuário acessa a página inicial
    Quando o usuário preenche o email com "teste@hotmail.com"
    E o usuário preenche a senha com "@Teste123"
    E o usuário clica no botão de login
    Então o login deve ser realizado com sucesso
    Quando o usuário acessa o perfil
    E informa sua idade "30"
    E informa o campo de endereço "Rua Exemplo, 123"
    E atualiza o campo de telefone "7999999999"
    E atualiza o campo de hobbies "Video Games"
    E clica no botão de salvar
    Então as informações devem ser salvas com sucesso
    E deve voltar para a página inicial clicando na logo "Buggy Rating"
