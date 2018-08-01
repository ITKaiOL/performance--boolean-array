/// <reference path="base.d.ts" />
export class BooleanList implements BooleanArray {
  protected list: boolean[];
  
  constructor(size: number) {
    this.list = Array(size);
  }
  
  setItem(n: number) {
    this.list[n] = true;
  }
  
  clearItem(n: number) {
    this.list[n] = false;
  }
  
  toggleItem(n: number) {
    // !undefined gives true
    this.list[n] = !this.list[n];
  }
  
  getItem(n: number): boolean {
    // !!undefined gives false
    return !!this.list[n];
  }
}

export class BooleanListPreFilled extends BooleanList {
  constructor(size: number) {
    super(size);
    let i = this.list.length;
    while(i--) {
      this.list[i] = false;
    }
  }
}
