// declaramos una funcion con el mismo nombre "formEuroToDollar"
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const oneEuroIs = {
    "JP": 127.9, /* japan yen */
    "USD": 1.2,  /* us dollar */
    "GBP": 0.8, /* british pound */
    /*1 EUR (Euro) = 1.2 USD (US Dollar) */
}


//2º parte:

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = (valueInEuro * oneEuroIs.USD);
    return valueInDollar;
}



const fromDollarToYen = function(valueInDollar){
     let valueInYen = Math.floor(((valueInDollar/(oneEuroIs.USD)) * oneEuroIs.JP);
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound =  Math.floor((valueInYen/oneEuroIs.JP) * (oneEuroIs.GBP));
    return valueInPound;
}



    // tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

