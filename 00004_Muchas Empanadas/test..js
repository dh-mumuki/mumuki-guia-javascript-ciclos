describe("Imprimir sumarMonedasDe25(5)", function() {
  it("deberia imprimir por pantalla 1.25", function() {
    sumarMonedasDe25(5);
    assert.equal(console.toString(), "1.25\n")
  });
})

