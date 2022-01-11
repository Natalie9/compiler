const scanner = require("./index");

function testRecognizeNumber() {
    console.assert(scanner('2') === true)
    console.assert(scanner('2342342') === true, '2342342')
    console.assert(scanner('2.3')=== true)
    console.assert(scanner('3e+3')=== true)
    console.assert(scanner('3e3')=== true)
    console.assert(scanner('3sdfs')=== false)
    console.assert(scanner('abab')=== false, 'abab')
}

testRecognizeNumber()
