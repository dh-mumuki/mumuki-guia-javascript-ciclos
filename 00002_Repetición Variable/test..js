describe("Imprimir imprimirAzul(3)", function() {
  it("deberia imprimir Azul Azul Azul", function() {
    imprimirAzul(3);
    assert.equal(console.toString(), "Azul\nAzul\nAzul\n")
  });
});
describe("Imprimir imprimirAzul(4)", function() {
  it("deberia imprimir Azul Azul Azul Azul", function() {
    imprimirAzul(4);
    assert.equal(console.toString(), "Azul\nAzul\nAzul\nAzul")
  });
});




