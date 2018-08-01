/** Base interface for this test */
interface BooleanArray {
  
  /** Set element `i` to true
   *  @param {number} i
   */
  setItem(i:number): void;
  
  /** Set element `i` to false
   *  @param {number} i
   */
  clearItem(i:number): void;
  
  /** Toogle element `i`
   *  @param {number} i
   */
  toggleItem(i:number): void;

  /** Get value of element `i`
   *  @param {number} i
   */
  getItem(i:number): boolean;
  
}
interface BooleanArrayClass {
  /** Create a Boolen Array of size `size`, optionally select to initialize the array with `false` */
  new (size: number): BooleanArray;
}

type TestOption = {
  arraySize: number,
  access: number,
  repetition: number
};

declare class Tester {
  constructor(baClasses: BooleanArrayClass[], options: TestOption, performance: Performance);
  runTest(): number[];
}
