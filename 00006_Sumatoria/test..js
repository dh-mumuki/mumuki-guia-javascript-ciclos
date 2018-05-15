describe("Imprimir sumatoriaHasta(5)", function() {
  it("deberia imprimir por pantalla 10", function() {
    sumatoriaHasta(5);
    assert.equal(console.toString(), "10\n")
  });
})

