# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Midas Touch](https://www.midastouch.com.br).

## Funcionalidades Testadas

1. **Acesso a Rota Não Existente:**
   - Tenta acessar uma rota inexistente no site.
   - Clica no botão para retornar à página anterior após o erro.
   - Assert: Verifica se a navegação de volta funciona corretamente.

2. **Navegação pelo Site:**
   - Clica em links para navegar pelas páginas "Stay Hungry" e "Produtos".
   - Assert: Confirma se a navegação entre as páginas funciona corretamente.

3. **Calcular Frete:**
   - Clica em um link para acessar detalhes de um produto específico ("Midas Knit 321").
   - Insere um CEP para calcular o frete.
   - Assert: Verifica se o cálculo de frete é realizado corretamente após a inserção do CEP.

4. **Login no Sistema:**
   - Clica no link para acessar a página de login.
   - Insere as credenciais (campos de e-mail e senha estão no código fornecido).
   - Clica no botão para efetuar o login.
   - Assert: Verifica se o login é bem-sucedido após clicar no botão de login.

5. **Redirecionamento para o WhatsApp:**
   - Clica no ícone/link para redirecionar para o WhatsApp.
   - Clica no botão para iniciar uma conversa no WhatsApp.
   - Assert: Confirma se o redirecionamento para o WhatsApp e o início de uma conversa funcionam corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/seu-usuario/.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
