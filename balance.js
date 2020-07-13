const calcEndNetBalance = (startMonthOpeningSum, interestRate, taxFreeLimit, taxRate, monthsComplete, numMonths) => {
    const oneMonthInterest = startMonthOpeningSum * (interestRate/100)
    const endMonthGrossBalance = startMonthOpeningSum + oneMonthInterest
    const monthTax = endMonthGrossBalance > taxFreeLimit ? (taxRate/100) * (endMonthGrossBalance-taxFreeLimit) : 0
    const endMonthNetBalance = endMonthGrossBalance - monthTax
    monthsComplete = monthsComplete + 1

    return endNetBalance = monthsComplete === numMonths ? endMonthNetBalance : calcEndNetBalance(endMonthNetBalance, interestRate, taxFreeLimit,taxRate, monthsComplete, numMonths)
     
}

const balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {

    const endNetBalance = calcEndNetBalance(openingSum, interestRate, taxFreeLimit, taxRate, 0, numMonths)
    console.log(endNetBalance)
    return endNetBalance

}

module.exports = balance;

