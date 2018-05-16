describe("Imprimir sumar5MonedasDe25Centavos()", function() {
  it("deberia imprimir por pantalla 1.25", function() {
    sumar5MonedasDe25Centavos();
    assert.equal(console.toString(), "1.25\n")
  });
})

