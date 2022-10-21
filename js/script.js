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

const makeTiket = document.getElementById('btnTiket');

makeTiket.addEventListener('click',

    function () {

        // Varibles 
        let nameUser = document.querySelector('[name=nameUser]').value;
        let numberKM = parseInt(document.getElementById('distanceKM').value);
        const priceKM = 0.21;

        const age = document.getElementById('ageUser').value;
        const ageMin = document.getElementById('ageUnder18').value;
        // const ageBase = document.getElementById('ageAdult').value;
        const ageMax = document.getElementById('ageOver65').value;

        let priceTot = (numberKM * priceKM);

        let discountUnder18 = ((priceTot * 20)/100);
        let discountOver65 = ((priceTot * 40)/100);

        let priceUnder18 = (priceTot - discountUnder18);
        let priceOver65 = (priceTot - discountOver65);

        if  (age == ageMin)  {
            // console.log(`il prezzo è: ${priceUnder18.toFixed(2)} €`);
            document.getElementById('tiketPrice').innerHTML = (`il prezzo è: ${priceUnder18.toFixed(2)} €`);
        }
        
        else if (age == ageMax)  {
            // console.log(`il prezzo è: ${priceOver65.toFixed(2)} €`);
            document.getElementById('tiketPrice').innerHTML = (`il prezzo è: ${priceOver65.toFixed(2)} €`);
        } else  {
            document.getElementById('tiketPrice').innerHTML = (`il prezzo è: ${priceTot.toFixed(2)} €`);                                 
        }
        
        // else console.log(`il prezzo è: ${priceTot.toFixed(2)} €`); 


        document.getElementById('customerName').innerHTML = nameUser;
        // document.getElementById('tiketPrice').innerHTML = `${numberKM}`;
    }

);


