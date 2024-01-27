// let son = 1.2



// console.log(Math.ceil(son));
// console.log(Math.min(12,23,324,435,));
// console.log(Math.pow(2,4));
// console.log(Math.random());

function random(min,max) {
    return Math.floor(Math.random() * (max - min  + 1) + min)
    
}
// console.log(random(1,10));


let miqdor = +prompt('necta msol iwlamoqcisz ?')

for (let i = 0; i < miqdor; i++) {
    let symbol = random(1,4)
    let son1 = random(100,1000)
    let son2 = random(1,100)
    if (symbol == 1) {
        let javob = prompt(`misolni yecing: ${son1} * ${son2} = ?`)
        if (javob == (son1 * son2)){
            alert('szning javob tori')
        }else{
            alert(`szning javob notori togri javob => ${son1 * son2} `)
        }
    }else if (symbol == 2) {
        let javob = prompt(`misolni yecing: ${son1} / ${son2} = ?`)
        if (javob == (son1 / son2)){
            alert('szning javob tori')
        }else{
            alert(`szning javob notori togri javob => ${son1 / son2} `)
        }
    }else if (symbol == 3) {
        let javob = prompt(`misolni yecing: ${son1} + ${son2} = ?`)
        if (javob == (son1 + son2)){
            alert('szning javob tori')
        }else{
            alert(`szning javob notori togri javob => ${son1 + son2} `)
        }
    }else if (symbol == 4) {
        let javob = prompt(`misolni yecing: ${son1} - ${son2} = ?`)
        if (javob == (son1 - son2)){
            alert('szning javob tori')
        }else{
            alert(`szning javob notori togri javob => ${son1 - son2} `)
        }
    }
}






