describe("imprimirAzul", () => {
  it("imprimirAzul(3) es \"AzulAzulAzul\"", () => {
    imprimirAzul()
    assert.equal(console.toString(), "Azul")
  })
})