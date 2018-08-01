import { performance } from "perf_hooks";

import { BooleanList, BooleanListPreFilled } from "./booleanList.js";
import { BitVector, BitVectorPreFilled } from "./bitVector.js";
import { Tester } from "./tester.js";

export namespace testerNODE {
  
  const TesterClasses = [ BooleanList, BooleanListPreFilled, BitVector, BitVectorPreFilled ];
  
  export const runTest = (size: number, access: number, repetition: number) => {
    console.log("Testing size = " + size + " access = " + access + " repetition = " + repetition);
    let t = new Tester(TesterClasses, { arraySize: size, access: access, repetition: repetition }, performance);
    let result = t.runTest();
    console.log("                   |   time   ");
    console.log("==============================");
    let cases = ['boolean','boolean prefilled','bitvector','bitvector prefilled'];
    for(let r = 0; r < result.length; ++r) {
      console.log((cases[r]+"                   ").substring(0,19) + "|" +
                  ("         "+result[r].toFixed(1)).substr(-8) + 'ms');
    }
    console.log();
  };
  
}
