const app = require("../app.js");
describe("Palindrom", () => {
  it("should be a palindrom", () => {
    expect(app.isPalindrom("kayak")).toEqual(true);
  });
  it("should not be a palindrom", () => {
    expect(app.isPalindrom("coco")).toEqual(false);
  })
});
describe("Moderator", ()=>{
    it("contain a forbidden word", ()=>{
        expect(app.containForbiddenWords("Vous êtes nuls")).toEqual(true)
    })
    it("contain a forbidden word", ()=>{
        expect(app.containForbiddenWords("Vous êtes nus")).toEqual(false)
    })
    
})
