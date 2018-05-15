describe("Imprimir Azul", function() {
  it("deberia imprimir Azul 4 veces", function() {
    imprimirAzul4();
    assert.equal(console.toString(), "Azul\nAzul\nAzul\nAzul\n")
  });
})

