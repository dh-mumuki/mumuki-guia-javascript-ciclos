describe("caloriasDeTrote(20)", function() {
  it("Un trote de 20 metros deberia retornar 15", function() {
    assert.equal(caloriasDeTrote(20), 15)
  });
})
describe("caloriasDeTrote(30)", function() {
  it("Un trote de 30 metros deberia retornar 30", function() {
    assert.equal(caloriasDeTrote(30), 30)
  });
})
describe("caloriasDeTrote(10)", function() {
  it("Un trote de 10 metros deberia retornar 5", function() {
    assert.equal(caloriasDeTrote(10), 5)
  });
})

