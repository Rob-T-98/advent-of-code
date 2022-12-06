const fs = require('fs');

//x = rock = 1 = A
//y = paper = 2 = B
//z = sizors = 3 = C
score = 0;
const allFileContents = fs.readFileSync('data.txt','utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    oppPlay = line.substring(0, 1);
    playerPlay = line.substring(2,3);
    if(playerPlay=="X")
    {
        if(oppPlay=="A")
        {
            score+=3;
        }
        if(oppPlay=="C")
        {
            score+=6
        }
        score+=1;
    }
    if(playerPlay=='Y'){
        if(oppPlay=='B')
        {
            score+=3
        }
        if(oppPlay=='A')
        {
            score+=6
        }
        score+=2
    }
    if(playerPlay=='Z')
    {
        if(oppPlay=="B")
        {
            score+=6
        }
        if(oppPlay=='C')
        {
            score+=3
        }
        score+=3
    }
});

console.log(score)