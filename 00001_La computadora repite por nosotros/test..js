describe("", function() {
  it("deberia imprimir cuatro veces la palabra Azul", function() {
    expect( console.log.calledOnce ).to.be("AzulAzulAzulAzul");
  });
})