describe("imprimirAzul", () => {
  it("imprimirAzul(3) es \"AzulAzulAzul\"", () => {
    imprimirAzul(3);
    assert.equal(console.toString(), "AzulAzulAzul")
  })
})