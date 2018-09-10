/*
  Builds the "module.exports" section.
  - Expected input: Object 
  - Expected output: Object 
  - If an issue arises, set the object to null
*/
function buildExports(answers) {
  if (!answers || typeof answers !== 'object') return null;
  try {
    // Note: Make sure to match the keys on strings, not numbers;
    //    otherwise, Node.js seems to flip out and throw an error
    let entryFile = answers['0'];
    let entryDirectory = answers['1'];
    let outputFile = answers['2'];
    let outputDirectory = answers['3'];

    let moduleExports = {
      entry: entryDirectory + entryFile,
      output: {
        path: outputDirectory,
        filename: outputFile
      }
    };

    return moduleExports;
  } catch (error) {
    return null;
  }
}

/*
    Builds the "npm install" section.
    - Expected input: Object 
    - Expected output: String 
    - If an issue arises, set the string to null
*/
function buildScript(answers) {
  if (!answers || typeof answers !== 'object') return null;

  let result = 'npm install --save-dev webpack';

  return result;
}

/*
    Creates an array of package names that the file will need to import.
    - Expected input: Object 
    - Expected output: Array 
    - If an issue arises, set the array to null
*/
function listPackageImports(answers) {
  if (!answers || typeof answers !== 'object') return null;

  let result = ['path'];

  return result;
}

module.exports = {
  buildExports,
  buildScript,
  listPackageImports
};
