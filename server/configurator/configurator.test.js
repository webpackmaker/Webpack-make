const { expect } = require('chai');

const {
  buildExports,
  buildScript,
  listPackageImports
} = require('./functions');

describe('configuration generator', () => {
  describe('buildExports', () => {
    it('should respond with an error if Answers is undefined', () => {
      expect(buildExports()).to.equal(null);
    });

    it('should respond with an error if Answers is not an object', () => {
      expect(buildExports('hello, world')).to.equal(null);
    });

    it('should input a valid object and return a valid object', () => {
      const postBody = {
        answers: { 0: '/build', 1: 'index.js', 2: '/dist', 3: 'bundle.js' }
      };
      const result = buildExports(postBody);

      expect(result).to.not.equal(null);
      expect(typeof result).to.equal('object');
      expect(result.output.filename).to.equal(postBody[2]);
    });
  });

  describe('buildScript', () => {
    it('should respond with null if Answers is undefined', () => {
      expect(buildScript()).to.equal(null);
    });

    it('should input a valid object and return a valid string', () => {
      const postBody = {
        answers: { 0: '/build', 1: 'index.js', 2: '/dist', 3: 'bundle.js' }
      };
      const result = buildScript(postBody);
      expect(result).to.not.equal(null);
      expect(typeof result).to.equal('string');
      expect(result.length).to.be.at.least(
        'npm install --save-dev webpack'.length
      );
    });
  });

  describe('listPackageImports', () => {
    it('should respond with null if Answers is undefined', () => {
      expect(listPackageImports()).to.equal(null);
    });

    it('should input a valid object and return an array', () => {
      const postBody = {
        answers: { 0: '/build', 1: 'index.js', 2: '/dist', 3: 'bundle.js' }
      };
      const result = listPackageImports(postBody);
      expect(result).to.not.equal(null);
      expect(Array.isArray(result)).to.equal(true);
      expect(result[0]).to.equal('path');
    });
  });
});
