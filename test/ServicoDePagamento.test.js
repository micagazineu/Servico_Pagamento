const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', function() {
  let servico;

  beforeEach(function() {
    servico = new ServicoDePagamento();
  });

  it('deve realizar um pagamento com categoria padrão quando valor <= 100', function() {
    const pagamento = servico.pagar('1234', 'Empresa A', 50.00);
    assert.strictEqual(pagamento.categoria, 'padrão');
    assert.strictEqual(pagamento.valor, 50.00);
  });

  it('deve realizar um pagamento com categoria cara quando valor > 100', function() {
    const pagamento = servico.pagar('0987-7656-3475', 'Samar', 156.87);
    assert.strictEqual(pagamento.categoria, 'cara');
    assert.strictEqual(pagamento.valor, 156.87);
  });

  it('deve consultar o último pagamento realizado', function() {
    servico.pagar('1111', 'Empresa 1', 10.00);
    servico.pagar('2222', 'Empresa 2', 200.00);
    
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.codigoBarras, '2222');
    assert.strictEqual(ultimo.empresa, 'Empresa 2');
    assert.strictEqual(ultimo.categoria, 'cara');
  });

  it('deve retornar null se não houver pagamentos', function() {
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo, null);
  });
});
