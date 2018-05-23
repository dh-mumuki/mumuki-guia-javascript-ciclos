describe("Imprimir caloriasDeTrote(30)", function() {
  it("deberia imprimir por pantalla 35", function() {
    caloriasDeTrote(35);
    assert.equal(console.toString(), "6\n")
  });
})

