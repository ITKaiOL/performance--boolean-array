/// <reference path="base.d.ts" />
/** A wrapper of the imported classes */
var testerDOM;
(function (testerDOM) {
    testerDOM.runTest = function (TesterClasses, size, access, repetition) {
        var t = new Tester(TesterClasses, { arraySize: size, access: access, repetition: repetition }, performance);
        var result = t.runTest();
        return result;
    };
    testerDOM.updateView = function (size, access, repetition, result) {
        var div = document.createElement('div');
        div.className = "result";
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Testing size = " + size + " access = " + access + " repetition = " + repetition));
        div.appendChild(p);
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var th, td;
        th = document.createElement('th');
        th.appendChild(document.createTextNode(''));
        tr.appendChild(th);
        th = document.createElement('th');
        th.appendChild(document.createTextNode('time'));
        tr.appendChild(th);
        table.appendChild(tr);
        var cases = ['boolean', 'boolean, prefilled', 'bitvector', 'bitvector, prefilled'];
        for (var r = 0; r < result.length; ++r) {
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
})(testerDOM || (testerDOM = {}));
//# sourceMappingURL=browser-test.js.map