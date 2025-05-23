# Projeto Formulário de Melhoria - Backend Flask + Odoo

## Descrição

Este projeto é um backend em Flask que expõe uma API REST para criar e listar sugestões de melhoria. Os dados são armazenados no Odoo via integração XML-RPC, utilizando um model customizado chamado `sugestao.melhoria`.

A aplicação permite a comunicação entre um frontend e o Odoo, possibilitando o cadastro e consulta de sugestões através da API.

---

## Tecnologias

- Python 3.7+
- Flask
- Flask-CORS
- XML-RPC (para comunicação com Odoo)
- Odoo (backend ERP, versão compatível com XML-RPC)

---

## Estrutura do Projeto

- `app.py`: aplicação Flask que expõe endpoints REST para criar e listar sugestões.
- `odoo_client.py`: cliente que realiza a comunicação com o Odoo via XML-RPC.
- `.env`: arquivo com variáveis de ambiente para configurar acesso ao Odoo.
- Frontend separado (não incluso aqui) que consome essa API.

---

## Configuração

### Pré-requisitos

- Odoo instalado e configurado
- Módulo customizado com model `sugestao.melhoria` instalado e atualizado no Odoo
- Python 3.7+ instalado

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

