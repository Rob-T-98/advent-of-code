const fs = require('fs');

var stack = [
    ["W","D","G","B","H","R","V"],
    ["J","N","G","C","R","F"],
    ["L","S","F","H","D","N","J"],
    ["J","D","S","V"],
    ["S","H","D","R","Q","W","N","V"],
    ["P","G","H","C","M"],
    ["F","J","B","G","L","Z","H","C"],
    ["S","J","R"],
    ["L","G","S","R","B","N","V","M"]
]

const allFileContents = fs.readFileSync('commands.txt','utf-8');

allFileContents.split(/\r?\n/).forEach(line =>  {
    const regex = /\d/g;
    var matches = line.match(regex);
    if(matches.length==4)
    {
        var num = matches[0]+""+matches[1];
        var numToMove = Number(num);
        var colFrom = matches[2];
        var colTo = matches[3];
    }else{
        var numToMove = matches[0];
        var colFrom = matches[1];
        var colTo = matches[2];
    }
    
    
    for(let i = 0; i< numToMove; i++)
    {
        var column = stack[colFrom-1];
        var lastItem = column.at(-1);
        stack[colTo-1].push(lastItem);
        stack[colFrom-1].splice(column.length -1,1)
    }
});

var answer = ""
for(const col of stack)
{
    answer = answer+ col.at(-1)
}
console.log(answer);
