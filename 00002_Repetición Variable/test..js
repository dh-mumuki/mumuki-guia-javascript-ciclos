describe("Imprimir imprimirAzul(3)", function() {
  it("deberia imprimir por pantalla Azul Azul Azul", function() {
    imprimirAzul(3);
    assert.equal(console.toString(), "Azul\n\Azul\n3\Azul\n")
  });
})

