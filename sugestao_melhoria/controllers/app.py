from odoo import http
from odoo.http import request, Response
import json
import logging

_logger = logging.getLogger(__name__)

class SugestoesAPI(http.Controller):

    @http.route('/api/sugestoes', type='json', auth='public', methods=['GET'], cors='*')
    def get_sugestoes(self, **kwargs):
        try:
            sugestoes = request.env["sugestao.melhoria"].sudo().search([])
            resultado = [{
                "id": s.id,
                "nome": s.nome,
                "descricao": s.descricao,
                "data_envio": str(s.data_envio) if s.data_envio else None 
            } for s in sugestoes]
            return resultado
        except Exception as e:
            _logger.error(f"Erro ao listar sugestões: {e}")
            return {"erro": str(e)}

    @http.route('/api/sugestoes', type='json', auth='public', methods=['POST'], cors='*')
    def post_sugestao(self, **kwargs):
        try:
            nome = kwargs.get("nome")
            descricao = kwargs.get("descricao")

            if not nome or not descricao:
                return {"erro": "Nome e Descrição são obrigatórios"}

            nova_sugestao = request.env["sugestao.melhoria"].sudo().create({
                "nome": nome,
                "descricao": descricao
            })

            return {
                "mensagem": "Sugestão salva com sucesso",
                "id": nova_sugestao.id
            }

        except Exception as e:
            _logger.error(f"Erro ao criar sugestão: {e}")
            return {"erro": str(e)}
