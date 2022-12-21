const fs = require('fs')

const shape = { rock: 1, paper: 2, scissors: 3};
const outcome = { win: 6, draw: 3, lose: 0}

const calculateScore = (array) => {
    const [input1, input2] = array
    const { rock, paper, scissors } = shape
    const { win, draw, lose } = outcome

    if (input1 === 'A') { //rock
        switch(input2) {
        case 'X':         
            return lose + scissors
        case 'Y':         
            return draw + rock
        case 'Z':         
            return win + paper
        }
    } else if (input1 === 'B') { // paper
        switch(input2) {
        case 'X':                
            return lose + rock
        case 'Y':                
            return draw + paper
        case 'Z':                
            return win + scissors
    }
    } else if (input1 === 'C') { // scissors
        switch(input2) {
        case 'X':                
            return lose + paper
        case 'Y':                
            return draw + scissors
        case 'Z':                
            return win + rock
    }
  }
}


fs.readFile('./resultsInput.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error({ error })
    }
    const arrayData = data.split('\r\n')
    const scoresArray = []

    for (let i = 0; i < arrayData.length; i++) {
        const element = arrayData[i];
        const subArray = element.split(' ');
        scoresArray.push(calculateScore(subArray))
    
    }

    const result = scoresArray.reduce((a, b) => a + b, 0)
    console.log(result)
  
})