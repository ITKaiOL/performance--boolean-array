/// <reference path="base.d.ts" />
export class Tester {
  private baClasses: BooleanArrayClass[];
  private baClassesIndex: number[];
  private options: TestOption;
  private performance: Performance;
  
  constructor(baClasses: BooleanArrayClass[], options: TestOption, performance: Performance) {
    this.baClasses = baClasses;
    this.options = options;
    this.baClassesIndex = [];
    let n = baClasses.length;
    while(n--) {
      this.baClassesIndex[n] = n;
    }
    this.performance = performance;
  }
  runTest(): number[] {
    // initialize average timers
    let timers = <number[]>[];
    let i = this.baClasses.length;
    while(i--) {
      timers[i] = 0;
    }
    
    let n = this.options.repetition;
    while(n--) {
      let oneTimers = this.runOnce();
      i = this.baClasses.length;
      while(i--) {
        timers[i] += oneTimers[i];
      }
    }
    i = this.baClasses.length;
    while(i--) {
      timers[i] /= this.baClasses.length;
    }
    return timers;
  }
  /** Generate a pool of random value to avoid generating random numbers during performance measurement */
  private getRandomPool(size: number): number[] {
    let r = <number[]>[];
    while(size--) {
      r.push(Math.random());
    }
    return r;
  }
  private runOnce(): number[] {
    const RANDOM_POOL_SIZE = 32768;
    
    // shuffle class list to be fair
    this.shuffleClassesIndex();
    
    // create Arrays
    let booleanArrays = <BooleanArray[]>[];
    for(let index of this.baClassesIndex) {
      booleanArrays.push(new this.baClasses[index](this.options.arraySize));
    }
    
    // initialize timers
    let timers = <number[]>[];
    let i = this.baClasses.length;
    while(i--) {
      timers[i] = 0;
    }
    
    // calculate number of access
    let n = this.options.access * this.options.arraySize;
    
    // prepare variables
    let item: number, rand: number, time0: number, time1: number;
    while(n) {
      let sub_n = Math.min(RANDOM_POOL_SIZE/2, n);
      n -= sub_n;
      // Measure performance in batch
      let random_pool = this.getRandomPool(RANDOM_POOL_SIZE);
      for(i = 0; i < booleanArrays.length; ++i) {
        let random_pool_index = 0;
        let sub_n_copy = sub_n;
        time0 = this.performance.now();
        while(sub_n_copy--) {
          item = Math.floor(random_pool[random_pool_index++] * this.options.arraySize);
          rand = random_pool[random_pool_index++];
          if(rand < 0.2) {
              booleanArrays[i].setItem(item);
          } else if(rand < 0.4) {
              booleanArrays[i].clearItem(item);
          } else if(rand < 0.7) {
              booleanArrays[i].toggleItem(item);
          } else {
              booleanArrays[i].getItem(item);
          }         
        }
        time1 = this.performance.now();
        timers[this.baClassesIndex[i]] += (time1 - time0);
      }
    }
    return timers;
  }
  private shuffleClassesIndex() {
    let newClassesIndex = <number[]>[];
    for(let c of this.baClassesIndex) {
      let i = Math.floor(Math.random() * (newClassesIndex.length+1));
      newClassesIndex.splice(i, 0, c);
    }
    this.baClassesIndex = newClassesIndex;
  }
}
