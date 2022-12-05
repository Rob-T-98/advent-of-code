const fs = require('fs');

var stack = [
    ["W","D","G","B","H","R","v"],
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
    const regex = /\d+/;
    var numToMove = line.match(/\d+/)[0];
    var colFrom = line.match(/\d+/)[1];
    var colTo = line.match(/\d+/)[2];
    console.log(line.matchAll(regex));
  });
