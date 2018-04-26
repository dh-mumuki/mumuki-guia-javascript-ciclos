describe("", function() {
  it("deberia imprimir cuatro veces la palabra Azul", function() {
    assert.ok(fakeConsole.toString()=== "AzulAzulAzulAzul")
  });
})