# Advantage | EcommerceDemo

Este projeto tem como objetivo validar diversas funcionalidades, como consulta de produtos, validação do carrinho e ordem de pagamentos.

Estamos continuamente evoluindo e aprimorando tanto o projeto quanto os testes associados.

## 🔧 [ Requisitos ]

Para executar essa automação é necessário ter instalado:

Baixar a versão mas atual do nodeJs

cypress com cucumber: npm install --save-dev cypress cypress-cucumber-preprocessor

Para facilitar a execução é recomendavél o uso do NTL, para instalar use o comando: "npm i -g ntl"



## 🚀 Começando [ Apresentação técnica estrutural do projeto ]

1. Após instalar os requisitos, clone o repositório para sua máquina local.
2. Execute "npm install cypress --save-dev" para instalar as depêndencias do cypress
3. Execute o comando ntl e escolho o ambiente que deseja rodar.

### /steps_definitions:
- Interpretados pelo cucumber, contém os arquivos .feature escritos em gherkin
  
- Lógica e validações dos steps

### Definição de tags nos arquivos features
TAG: Funcionalidade_Cenario_Objetivo
Funcionalidade: Palavra-chave da funcionalidade/sistema a ser testado
Cenario: Palavra-chave do cenario a ser testado
NOTA: Para executar todos os cenários de todas as funcionalidades, utilize o seguinte comando: npx cypress run

Para executar um cenário específico, basta utilizar o mesmo comando, alterando apenas a tag do cenário desejado. As tags são geralmente criadas com o nome da funcionalidade do serviço, por exemplo, npx cypress run --env TAGS="@getProduct", para executar a funcionalidade de consulta de produtos.


## 📊 Reports
Este diretório contém relatórios dos testes executados. Para visualizá-los, abra o arquivo HTML correspondente no seu navegador.

## ⚙️ cypress.config
- O arquivo cypress.config é usado para definir configurações globais que garantem a execução consistente e padronizada dos testes.

## 🤖 Package.json
-  É um arquivo de configuração essencial que gerencia as dependências do projeto, scripts de execução e metadados do projeto.

## 🐙 Como contribuir
Caso deseje contribuir com esse projeto, siga as instruções abaixo:

1. Faça um fork desse repositório.
2. Crie uma branch com o nome da sua feature: **git checkout -b <nome-da-feature>.**
3. Faça suas alterações e adicione os testes correspondentes.
4. Rode os testes locais para garantir que tudo está funcionando corretamente e evidêncie no pr.
5. Faça um commit das suas alterações: **git commit -m 'Minha nova feature'**.
6. Faça um push da sua branch com as alterações **git push**
