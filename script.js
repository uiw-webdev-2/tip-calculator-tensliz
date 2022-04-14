//function calcTip() {
 // var billAmount = document.getElementById('bill-amount').value;
 //var tipPercent = document.getElementById('tip-percent').value;
 //var tipAmount = document.getElementById('tip-amount').value;

 //var tipAmount = billAmount*tipPercent;
//}

//button.addEventListener('click', function() {
//tipAmount();
//})

/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
 const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
 
  return formattedValue;
};

 
button.addEventListener('click', function(){
let billAmount = document.getElementById('bill-amount').value;
let tipPercent = document.getElementById('tip-percent').value;
let tipAmount = document.getElementById('tip-amount').value = billAmount * tipPercent;
})
