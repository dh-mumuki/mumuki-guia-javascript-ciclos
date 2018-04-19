describe("imprimirAzul", () => {
  it("imprimirAzul(3) es \"AzulAzulAzul\"", () => {
    imprimirAzul(3);
    assert.equal(console.toString(), "AzulAzulAzul");
  })
  it("imprimirAzul(5) es \"AzulAzulAzul\"", () => {
      imprimirAzul(5);
    assert.equal(console.toString(),"AzulAzulAzulAzulAzul");
  })

})