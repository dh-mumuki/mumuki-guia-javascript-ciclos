describe("Imprimir pasitoAPasito()", function() {
  it("deberia imprimir 01234", function() {
    pasitoApasito();
    assert.equal(console.toString(), "0\n1\n2\n3\n4\n")
  });
})

