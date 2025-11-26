let basic_sal = Number(prompt("Enter basic salary: "))
let benefits = Number(prompt("Enter benefits: "))

//15
function findNhif(gross){
    let nhif = 0
    if (gross >= 0 && gross <=5999) {
        nhif += 150
    } else if (gross >= 6000 && gross <=7999) {
        nhif += 300
    } else if (gross >= 8000 && gross <=11999) {
        nhif += 400
    } else if (gross >= 12000 && gross <=14999) {
        nhif += 500
    } else if (gross >= 15000 && gross <=19999) {
        nhif += 600
    } else if (gross >= 20000 && gross <=24999) {
        nhif += 750
    } else if (gross >= 25000 && gross <=29999) {
        nhif += 850
    } else if (gross >= 30000 && gross <=34999) {
        nhif += 900
    } else if (gross >= 35000 && gross <=39999) {
        nhif += 950
    } else if (gross >= 40000 && gross <=44999) {
        nhif += 1000
    } else if (gross >= 45000 && gross <=49999) {
        nhif += 1100
    } else if (gross >= 50000 && gross <=59999) {
        nhif += 1200
    } else if (gross >= 60000 && gross <=69999) {
        nhif += 1300
    } else if (gross >= 70000 && gross <=79999) {
        nhif += 1400
    } else if (gross >= 80000 && gross <=89999) {
        nhif += 1500
    } else if (gross >= 90000 && gross <=99999) {
        nhif += 1600
    } else if (gross >= 10000) {
        nhif += 1700
    } 
    return nhif
} 

//16
function findNssf(gross){
    let nssf = 0
    if (gross >= 18000){
        nssf += 0.6 * gross
    } else {
        nssf = 0
    }
    return nssf
}

//17
function getNhdf(gross){
    let nhdf = gross * 0.015
    return nhdf
}

//18
function findTaxableIncome(gross, NSSF, NHDF, NHIF){
    let taxable_income = gross - (NSSF + NHDF + NHIF)
    return taxable_income
}

//19
function findPaye(tax_inc) {
    let relief = 2400;
    let paye = 0;

    if (tax_inc <= 24000) {
        paye = tax_inc * 0.10;
    } 
    else if (tax_inc <= 32333) {
        paye = (24000 * 0.10) +
               (tax_inc - 24000) * 0.25;
    } 
    else if (tax_inc <= 500000) {
        paye = (24000 * 0.10) +
               (8333 * 0.25) +
               (tax_inc - 32333) * 0.30;
    } 
    else if (tax_inc <= 800000) {
        paye = (24000 * 0.10) +
               (8333 * 0.25) +
               (467667 * 0.30) +
               (tax_inc - 500000) * 0.325;
    } 
    else {
        paye = (24000 * 0.10) +
               (8333 * 0.25) +
               (467667 * 0.30) +
               (300000 * 0.325) +
               (tax_inc - 800000) * 0.35;
    }

    return paye - relief;
}


//20
function getNetSal(gross, nhif, nhdf, nssf, payee){
    let net_sal = gross - (nhif + nhdf + nssf + payee)
    return net_sal
}

//function calls
let gross_sal = basic_sal + benefits
let nhif = findNhif(gross_sal);
let nssf = findNssf(gross_sal);
let nhdf = getNhdf(gross_sal);
let taxable_income = (findTaxableIncome(gross_sal, nssf,nhdf,nhif))
let paye = findPaye(taxable_income);
let net_sal = getNetSal(gross_sal, nhif, nhdf, nssf, paye)

//logs
console.log("-----------------***Income-Calculator***-----------------")
console.log(`Gross Salary: KES.${gross_sal}`)
console.log(`NHIF: KES.${nhif}`)
console.log(`NHDF: KES.${nhdf}`)
console.log(`Taxable Income: KES.${taxable_income}`)
console.log(`Payee: KES.${paye}`)
console.log(`Net Salary: KES.${net_sal}`)
