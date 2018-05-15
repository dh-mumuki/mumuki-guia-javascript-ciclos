describe("Imprimir PasitoAPasito()", function() {
  it("deberia imprimir la secuencia 01234", function() {
    pasitoApasito();
    assert.equal(console.toString(), "0\n1\n2\n3\n4\n")
  });
})

