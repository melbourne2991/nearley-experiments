// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

const append = (a, b) => (d) => d[a].concat([d[b]]);
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "FunctionDeclaration$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FunctionDeclaration$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FunctionDeclaration", "symbols": ["FunctionDeclaration$string$1", "_", "Name", "_", "Args", "_", "FunctionDeclaration$string$2"], "postprocess":  (d) => ({
          name: d[2],
          args: d[4]
        }) },
    {"name": "Args", "symbols": [{"literal":"("}, "_", {"literal":")"}]},
    {"name": "Args", "symbols": [{"literal":"("}, "_", "ArgsList", "_", {"literal":")"}], "postprocess": (d) => d[2]},
    {"name": "ArgsList", "symbols": ["Name"]},
    {"name": "ArgsList", "symbols": ["ArgsList", "_", {"literal":","}, "_", "Name"], "postprocess": append(0, 4)},
    {"name": "Name", "symbols": ["_name"], "postprocess": id},
    {"name": "_name", "symbols": [/[a-zA-Z_]/], "postprocess": id},
    {"name": "_name", "symbols": ["_name", /[a-zA-Z_]/], "postprocess": (d) => d[0] + d[1]}
]
  , ParserStart: "FunctionDeclaration"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
