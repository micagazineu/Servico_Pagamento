class ServicoDePagamento {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const categoria = valor > 100.00 ? 'cara' : 'padrão';
    const novoPagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria
    };
    this.pagamentos.push(novoPagamento);
    return novoPagamento;
  }

  consultarUltimoPagamento() {
    if (this.pagamentos.length === 0) {
      return null;
    }
    return this.pagamentos[this.pagamentos.length - 1];
  }
}

module.exports = ServicoDePagamento;
