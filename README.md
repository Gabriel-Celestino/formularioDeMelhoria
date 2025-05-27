# Projeto Formulário de Melhoria

Este projeto full stack implementa um sistema simples de sugestões de melhoria usando Odoo no backend e React no frontend.


 No backend, foi criado um módulo personalizado em Odoo com o modelo sugestao.melhoria, que contém os campos nome (Char), descricao (Text) e data_envio (Datetime) com valor padrão para a data atual. 
 
 A API expõe dois endpoints REST: GET /api/sugestoes para listar todas as sugestões e POST /api/sugestoes para criar novas sugestões, ambos configurados para acesso público e suportando CORS. 
 
 No frontend, uma aplicação React apresenta um formulário para enviar sugestões e uma lista atualizada das sugestões existentes, consumindo a API via fetch com dados em JSON. 
 
 Após o envio, a lista é automaticamente atualizada. 
 
O projeto pode ser executado instalando o módulo no Odoo e configurando a aplicação React com a URL da API para rodar localmente ou em ambiente de produção.

# Comandos para Executar

Para executar este projeto, siga os passos abaixo:

# 1) Instalar o módulo no Odoo:

Copie a pasta do módulo para o diretório de addons do seu Odoo.

Reinicie o servidor do Odoo para que ele reconheça o novo módulo.

Acesse o painel de aplicativos do Odoo, atualize a lista de módulos e instale o módulo "Sugestão de Melhoria".

# 2) Configurar e executar o frontend React:

No projeto React, configure a variável de ambiente VITE_API_URL apontando para a URL base da API do Odoo (por exemplo, http://localhost:8069 se estiver rodando localmente).

Execute o comando npm install para instalar as dependências.

Depois, rode npm run dev para iniciar o servidor de desenvolvimento React.

# 3) Uso:

Acesse a aplicação React no navegador.

Utilize o formulário para enviar sugestões, que serão salvas no Odoo via API.

As sugestões cadastradas são listadas abaixo do formulário, atualizadas automaticamente após cada envio.

Com isso, o sistema estará rodando localmente, podendo ser adaptado para ambientes de produção ajustando as URLs e configurações conforme necessário.