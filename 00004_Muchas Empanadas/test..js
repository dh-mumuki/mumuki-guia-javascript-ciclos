describe("Imprimir sumarMonedasDe25(5)", function() {
  it("deberia imprimir por pantalla 1.25", function() {
    sumarMonedasDe25(5);
    assert.equal(console.toString(), "1.25\n")
  });
    it("deberia imprimir por pantalla 1.50", function() {
    sumarMonedasDe25(6);
    assert.equal(console.toString(), "1.50\n")
  });
})

