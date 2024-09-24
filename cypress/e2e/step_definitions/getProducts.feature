#encoding: utf-8
#language: pt

@getProduct
Funcionalidade: Consultar produto
  Eu como usuário
  Quero acessar a home do advantageonlineshopping
  Para realizar busca de produtos

Contexto: Acessar home
  Dado que acesso a url https://advantageonlineshopping.com/

@positivo
Cenário: Realizar busca por produtos sem usuário logado com a barra de busca.
	Quando informo o produto HP Z3200 WIRELESS MOUSE
	Então é apresentado o produto correspondente

@positivo
Cenário: Realizar busca por produtos com usuário logado com o barra de busca.
	E autenticado com o usuário "Anderson" e a senha "123456Aa"
	Quando informo o produto HP Z3200 WIRELESS MOUSE
	Então é apresentado o produto correspondente 

@positivo
Cenário: Realizar busca ao clicar em um produto na home.
	Quando acesso a categoria Tablets
	Então é apresentada a lista de produtos relacionada à categoria tablets

@negativo
Cenário: Realizar busca por um produto inexistente.
	Quando informo o nome de um produto que não existe
	Então é apresentado na tela, a mensagem de produto não encontrado