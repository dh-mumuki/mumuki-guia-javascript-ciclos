describe("Imprimir imprirAzul(3)", function() {
  it("deberia imprimir Azul Azul Azul", function() {
    imprirAzul(3);
    assert.equal(console.toString(), "Azul\nAzul\nAzul\nAzul\n")
  });
})

