import { Interp } from "./interp";
import { processScript , SyntaxParser } from "./compiler_main"


var fs = require('fs');


let ctx :Interp.Context = undefined
<<<<<<< HEAD
let script_filename = 'C:/dev/pInform/tests/language/test_3.txt'
=======
//let script_filename = 'C:/dev/pInform/tests/language/test_1.txt'
>>>>>>> 1d8df97466010ae69dca9af8007bc12407253807
//let script_filename = 'C:/dev/TS/pInform/tests/unit_test.txt'
let script_filename = 'tests/language/test_1.txt'
//let script_filename = process.argv[2]
if (fs.existsSync(script_filename) ) {
    var s = fs.readFileSync(script_filename,'utf8');
   ctx = processScript(s)
}
else{
    console.log("Script " + script_filename+" File Not found")
    throw "Script " + script_filename+" File Not found"
}
ctx.init()

//SyntaxParser.MatchSyntaxGoal(" init( ) ", (x) => {  ctx.all_query(x).map((s ) => { return s.toString() }), { depth: null } })
 

SyntaxParser.MatchSyntaxGoal(" main( ) ", (x) => { 
    let qq =[]
    qq = ctx.all_query(x); 
    //for(var i =0;i< 200;++i){  qq = ctx.all_query(x); }
    console.dir(qq.map((s ) => { return s.toString() }), { depth: null }) 
})


console.log('end');