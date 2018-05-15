describe("versos", function() {
  it("deberia imprimir los versos", function() {
        expect( console.log.calledOnce ).to.be.true;
    expect( console.log.calledWith('Azul') ).to.be.true;
  });
})

