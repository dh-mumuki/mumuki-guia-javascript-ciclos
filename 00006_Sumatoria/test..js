describe("Imprimir sumatoriaHasta(4)", function() {
  it("deberia imprimir por pantalla 6", function() {
    sumatoriaHasta(4);
    assert.equal(console.toString(), "6\n")
  });
})

