// declaramos una funcion con el mismo nombre "formEuroToDollar"
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))



const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};
console.log(fromEuroToDollar(15));

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}



    // tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

