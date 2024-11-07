const currency = {
    USD: 1, //Based currency 
    PKR: 278.45,
    INR: 83.59,
    EUR: 0.94,
    CAD: 1.38,
    TRY: 32.51,
    LKR: 301.24,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    CNY: 7.24,
    AUD: 1.56,
    JPY: 154.6,
    GBP: 0.8,
  };
  document.getElementById(`Converter-form`).addEventListener('submit', function (e) {e.preventDefault()    
    let formCurrency = document.getElementById('from').value 
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value

    let formAmount = currency[formCurrency]
    let toAmount = currency[toCurrency]
    let baseAmount = amount/formAmount
    let convertedAmount = baseAmount*toAmount

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`
 })

