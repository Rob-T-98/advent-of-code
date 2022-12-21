const fs = require('fs')

var characters = []

score = 0

fs.readFile('./data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error({ error })
    }
    const arrayData = data.split('\r\n')

    arrayData.forEach(element => {
        var index = Math.round((element.length) / 2);        
        var comp1 = element.substr(0, index); // Gets the first part
        var comp2 = element.substr(index);

        for (var i = 0; i < comp2.length; i++) {
            character = comp2.charAt(i);
            if(comp1.indexOf(character)>-1)
            {
                characters.push(character)
                
            }
        }
    });
    
    var uniqueCharacters = [...new Set(characters)];

    uniqueCharacters.forEach(element =>{
        if(element == element.toLowerCase())
        {
            score +=element.charCodeAt(0) - 96
            console.log(element.charCodeAt(0) - 96+" "+element)
        }else{
            score += element.toLowerCase().charCodeAt(0)- 96+26
            console.log(element.toLowerCase().charCodeAt(0)- 96+26+" "+element)
        }
    })
    /*
    
    */

    console.log(score);
})

