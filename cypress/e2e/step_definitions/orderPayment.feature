#encoding: utf-8
#language: pt

@orderPayment
Funcionalidade: Validar produtos na ordem de pagamento
  Eu como usuário
  Quero visualizar os produtos e as formas de pagamento
  Para realizar a compra

Contexto: Acessar home
  Dado que estou autenticado com o usuário "Anderson" e a senha "123456Aa"

@positivo
Cenário: Validar a quantidade de produtos adicionados no carrinho
	E tenho produtos adicionados no carrinho
	Quando vou para tela de pagamentos
	Então valido a quantidade de produtos

@positivo
Cenário: Validar dados de entrega do usuário
	E tenho produtos adicionados no carrinho
	Quando vou para tela de pagamentos
	Então é exibido o endereço de entrega

@positivo
Cenário: Validar valores da ordem com frete gratuito
	E tenho produtos adicionados no carrinho
	Quando vou para tela de pagamentos
	Então visualizo o valor do produto, o valor do frete e o valor total da ordem

@positivo
Cenário: Validar valores da ordem com frete pago
	E tenho produtos adicionados no carrinho com frete pago
	Quando vou para tela de pagamentos
	Então visualizo o valor do frete