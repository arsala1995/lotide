

const assert = require('chai').assert;
const tail  = require('../tail');



describe("#tail", () => {
  it("returns Lighthouse Labs for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse Labs");
  });

  

});