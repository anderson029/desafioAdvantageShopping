#encoding: utf-8
#language: pt

@getProduct
Funcionalidade: Consultar produto
  Eu como usuário
  Quero acessar a home do advantageonlineshopping
  Para realizar busca de produtos

Contexto: Acessar home
  Dado que acesso o site do e-commerce advantageonlineshopping

@positivo
Cenário: Realizar busca por produtos sem usuário logado com a barra de busca.
	Quando informo o produto
	Então é apresentado o produto correspondente

@positivo
Cenário: Realizar busca por produtos com usuário logado com o barra de busca.
	E autenticado com o usuário
	Quando informo o produto
	Então é apresentado o produto correspondente 

@positivo
Cenário: Realizar busca ao clicar em um produto na home.
	Quando escolho por alguma categoria
	Então é apresentada a lista de produtos relacionados à categoria correspondente

@negativo
Cenário: Realizar busca por um produto inexistente.
	Quando informo o nome de um produto que não existe
	Então é apresentado na tela, a mensagem de produto não encontrado