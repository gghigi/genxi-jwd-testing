const expect = chai.expect;

describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      const result = headsOrTails();

      expect(result).to.equal('heads');
    });
  });
});
