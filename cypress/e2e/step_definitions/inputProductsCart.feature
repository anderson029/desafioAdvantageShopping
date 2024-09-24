#encoding: utf-8
#language: pt

@registerProduct
Funcionalidade: Adicionar produtos no carrinho
  Eu como usuário
  Quero adicoinar produtos no carrinho
  Para possíveis compras

Contexto: Acessar home
  Dado que estou na plataforma de ecommerce advantageonlineshopping

@positivo
Cenário: Adicionar produto ao carrinho via busca sem logar.
  Quando adiciono o produto HP Z3200 WIRELESS MOUSE
  Então o produto é adicionado ao carrinho

@positivo
Cenário: Adicionar produto ao carrinho via busca logado.
	E autenticado com o usuário "Anderson" e a senha "123456Aa"
	Quando adiciono o produto HP Z3200 WIRELESS MOUSE
	Então o produto é adicionado ao carrinho 

@positivo
Cenário: Adicionar produto ao carrinho sem logar e visualizar o produto após logado.
	Quando adiciono o produto HP Z3200 WIRELESS MOUSE
	E autenticado com o usuário "Anderson" e a senha "123456Aa"
	Então o produto é adicionado ao carrinho

@positivo
Cenário: Adicionar produto ao carrinho pelo shop Now
	E que estou na página de categorias Tablets
	Quando escolho o produto
	Então é aberto detalhes do produto permitindo adicionar ao carrinho

@positivo
Cenário: Remover o mesmo produto do carrinho que tenha cores diferentes
	E autenticado com o usuário "Anderson" e a senha "123456Aa" 
	E adiciono os produtos um de cada cor
	Quando excluo um produto
	Então é permitido a exclusão exibindo as informações somente do produto restante

@positivo
Cenário: Remover o mesmo produto do carrinho com mais de 1 unidade
	E autenticado com o usuário "Anderson" e a senha "123456Aa"
  E adiciono os produtos iguais
	Quando excluo o produto
	Então é apresentado o carrinho vazio

@positivo
Cenário: Adicionar o número máximo de produtos permitidos no carrinho com base no estoque disponível 
	E que tenha um estoque de 10 itens do produto "BOSE SOUNDLINK BLUETOOTH 	SPEAKER III"
	Quando tento adicionar 12 itens no carrinho
	Então é exibida a mensagem e o limite do estoque é adicionado no carrinho.