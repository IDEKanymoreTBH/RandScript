import { lexer } from './lexer';
import { parseProgram } from './ast';
import { evaluate, environment } from './interpreter';
const runCodeButton = document.getElementById("runCode");
runCodeButton.addEventListener("click", function(){
    let code = document.getElementById("editor").value;
    console.log("Code: " + code);
    const tokens = lexer(code);
    const ast = parseProgram(tokens);
    evaluate(ast[0], environment);
    document.getElementById("output").textContent = JSON.stringify(environment);
}); 