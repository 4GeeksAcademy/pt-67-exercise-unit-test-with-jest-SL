// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD
} 

const fromDollarToYen = (dollars) => {
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollars
} 

const fromYenToPound = (yens) => {
    return ((1/oneEuroIs.JPY) * yens) * oneEuroIs.GBP
} 

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}

// lo que yo queria hacer era usando los resultados obtenidos, conociendo sólo el varlo de euro, 
//dándole como input el Euro que es de lo que partimos y usando los resultados de cada moneda solicitada 
//en el ejercicio como input:

//const fromEuroToDollar = function (valeuInEuros) {
//    let valueInDollars = valeuInEuros * oneEuroIs.USD
  //  return valueInDollars
//};

//const fromDollarToYen = function (valueInDollars) {
//    let valueInYens = valueInDollars * oneEuroIs.JPY
//    return valueInYens
//}

//const fromYenToPound = function (valueInPounds) {
//    let valueInPounds = valueInYens * oneEuroIs.GBP
//    return valueInPounds
//}


