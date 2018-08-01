/// <reference path="base.d.ts" />

/** A wrapper of the imported classes */
namespace testerDOM {
    
  export const runTest = (TesterClasses: BooleanArrayClass[], size: number, access: number, repetition: number): number[] => {
    let t = new Tester(TesterClasses, { arraySize: size, access: access, repetition: repetition }, performance);
    let result = t.runTest();
    return result;
  }
  export const updateView = (size: number, access: number, repetition: number, result: number[]) => {
    let div = document.createElement('div');
    div.className = "result";
    
    let p = document.createElement('p');
    p.appendChild(document.createTextNode("Testing size = " + size + " access = " + access + " repetition = " + repetition));
    div.appendChild(p);
        
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th, td;
    th = document.createElement('th');
    th.appendChild(document.createTextNode(''));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('time'));
    tr.appendChild(th);
    table.appendChild(tr);
    
    let cases = ['boolean','boolean, prefilled','bitvector','bitvector, prefilled'];
    for(let r = 0; r < result.length; ++r) {
      tr = document.createElement('tr');
      td = document.createElement('td');
      td.appendChild(document.createTextNode(cases[r]));
      tr.appendChild(td);
      
      td = document.createElement('td');
      td.appendChild(document.createTextNode(result[r].toFixed(1) + "ms"));
      tr.appendChild(td);
      table.appendChild(tr);
    }
    div.appendChild(table);
    document.getElementById('container').appendChild(div);
  };
  
}
