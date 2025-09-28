# language: pt
Funcionalidade: Página Inicial do Buggy Cars Rating
  Como usuário
  Quero acessar a página inicial

  Cenário: Acessar a página inicial com sucesso
    Dado que o usuário acessa a aplicação
    Quando a página inicial carrega
    Então deve aparecer o título "Buggy Cars Rating"

  Cenário: Verificar exibição de todas as labels
    Dado que o usuário acessa a aplicação
    Quando a página inicial carrega
    Então deve ser possível ver a descrição "Popular Make"
    E deve ser possível ver a descrição "Popular Model"
    E deve ser possível ver a descrição "Overall Rating"

  Cenário: Verificar exibição de todas as imagens
    Dado que o usuário acessa a aplicação
    Quando a página inicial carrega
    Então a imagem principal deve estar visível
    E as seguintes imagens devem estar visíveis:
        | /img/cars/Lamborghini-Logo.png |
        | /img/cars/Diablo.jpg           |
        | /img/overall.jpg               |

  Cenário: Verificar todos os componentes
    Dado que o usuário acessa a aplicação
    Quando a página inicial carrega
    Então deve ser possível visualizar a opção de "Login"
    E deve ser possível visualizar a opção de "Register"

  
