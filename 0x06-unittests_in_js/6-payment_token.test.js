const chai = require("chai");
const expect = chai.expect;

const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("should return a data object", async function () {
    try {
      const res = await getPaymentTokenFromAPI(true);
      console.log(res);
      expect(res.data).to.equal("Successful response from the API");
    } catch (err) {
      throw err;
    }
  });
});
