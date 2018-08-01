(function() {
  const { testerNODE } = require("./dist/node-test.js");
  
  const accesses = [1, 4, 16];
  const repetition = 12;
  const sizes = [4096, 16384, 65536];

  console.log("==== First run ============================");
  
  sizes.forEach(size => {
    accesses.forEach(access => {
      testerNODE.runTest(size, access, repetition);
    });
  });
  
  console.log("==== Second run ===========================");

  sizes.forEach(size => {
    accesses.forEach(access => {
      testerNODE.runTest(size, access, repetition);
    });
  });

}());
