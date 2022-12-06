const fs = require('fs');

const allFileContents = fs.readFileSync('data.txt','utf-8');
data = []
data.push([]);
allFileContents.split(/\r?\n/).forEach(line =>  {
    const regex = /\d/g;
    var matches = line.match(regex);
    if(matches==null)
    {
        data.push([]);
    }else{
        curNumber =""
        for(var i = 0;i<matches.length;i++)
        {
            curNumber = curNumber +matches[i]
        }
        data[data.length-1].push(Number(curNumber))
    }
});

dataSums = []
for(var i = 0;i<data.length;i++)
{
    var total = data[i].reduce((partialSum, a) => partialSum + a, 0);
    dataSums.push(total);
}

dataSums.sort(function(a, b){return a - b});
console.log(dataSums[dataSums.length-1]+dataSums[dataSums.length-2]+dataSums[dataSums.length-3])