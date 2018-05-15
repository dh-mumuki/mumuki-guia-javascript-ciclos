describe("versos", function() {
  it("deberia imprimir los versos", function() {
    imprimirAzul()
    assert.equal(console.toString(), "Azul\nAzul\nAzul\nAzul\n")
  });
})

