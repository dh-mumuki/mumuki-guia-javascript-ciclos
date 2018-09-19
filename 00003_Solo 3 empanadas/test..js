describe("Calcular sumar5MonedasDe25Centavos()", function() {
  it("deberia devolver por pantall 1.25", function() {
    sumar5MonedasDe25Centavos()
    assert.equal(console.toString(), "1.25\n")
  });
})

