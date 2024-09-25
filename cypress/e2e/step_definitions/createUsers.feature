#encoding: utf-8
#language: pt

@createUsers
Funcionalidade: Criar usuário 
  Eu como usuário
  Quero criar minha conta
  Para realizar compras no ecommerce

@positivo
Cenário: Criar conta de usuário
  Dado que acesso o site do ecommerce
  Quando preencho o formulário
	Então minha conta é criada