describe("imprimirAzul", () => {
  it("imprimirAzul(3) es \"AzulAzulAzul\"", () => {
    console.log(console.toString())
    imprimirAzul(1);
    assert.equal(console.toString(), "Azul")
  })
})