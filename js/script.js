/* 

let numberKM = parseInt(prompt("How many km do you have to travel?"));
let ageUser = parseInt(prompt("How old are you?"));
const priceKM = 0.21;

let priceTot = (numberKM * priceKM);

let discountUnder18 = ((priceTot * 20)/100);
let discountOver65 = ((priceTot * 40)/100);

let priceUnder18 = (priceTot - discountUnder18);
let priceOver65 = (priceTot - discountOver65);

if  (ageUser < 18)  {
    console.log(`il prezzo è: ${priceUnder18.toFixed(2)} €`);
}

else if (ageUser > 65)  {
    console.log(`il prezzo è: ${priceOver65.toFixed(2)} €`);
}

// else console.log(priceTot)

else console.log(`il prezzo è: ${priceTot.toFixed(2)} €`); 

*/


let numberKM = parseInt(document.getElementById('distanceKM').value);

const makeTiket = document.getElementById('btnTiket');

makeTiket.addEventListener('click',

    function () {
        document.getElementById('tiketPrice').innerHTML = `${numberKM}`;
    }

);


