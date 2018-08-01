/// <reference path="base.d.ts" />
export class BitVector implements BooleanArray {
  protected vectors: number[];
  
  constructor(size: number) {
    this.vectors = Array(size >> 5);
  }
  
  setItem(n: number) {
    this.vectors[n >> 5] |= (1 << (n & 0x1F));
  }
  
  clearItem(n: number) {
    this.vectors[n >> 5] &= ~(1 << (n & 0x1F));
  }
  
  toggleItem(n: number) {
    this.vectors[n >> 5] ^= (1 << (n & 0x1F));
  }
  
  getItem(n: number): boolean {
    // undefined & any gives 0
    return ((this.vectors[n >> 5] & (1 << (n & 0x1F))) != 0);
  }
}

export class BitVectorPreFilled extends BitVector {
  constructor(size: number) {
    super(size);
    let i = this.vectors.length;
    while(i--) {
      this.vectors[i] = 0;
    }
  }
}
