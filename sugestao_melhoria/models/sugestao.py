from odoo import models, fields

class SugestaoMelhoria(models.Model):
    _name = 'sugestao.melhoria' 
    _description = 'Sugestão de Melhoria'

    nome = fields.Char(string="Nome", required=True)
    descricao = fields.Text(string="Descrição", required=True)
    data_envio = fields.Datetime(string="Data de Envio", default=fields.Datetime.now)
