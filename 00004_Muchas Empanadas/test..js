describe("Imprimir sumarMonedasDe25(6)", function() {
  it("deberia imprimir por pantalla  1.50", function() {
    sumarMonedasDe25(6);
    assert.equal(console.toString(), "1.5\n")
  });
})

