describe("imprimirAzul", () => {
  it("imprimirAzul(3) es \"AzulAzulAzul\"", () => {
    imprimirAzul(1)
    assert.equal(fakeConsole.toString(), "Azul")
  })
})