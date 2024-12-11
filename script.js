// Cotação das moedas
const USD = 5.99;
const EUR = 6.27;
const GBP = 7.64;

const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const form = document.querySelector('form');
const footer = document.querySelector('main footer')
const descriptionFooter = document.getElementById('description')
const resultFooter = document.getElementById('result')

// Manipulando o input "amount" para receber apenas números.
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault();

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
  }
};

// Converte a moeda escolhida para real BRL
function convertCurrency(amount, price, symbol) {
  try {
    descriptionFooter.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    
    const result = price * amount;
    
    resultFooter.textContent = `${result.toFixed(2).replace('.', ',')} Reais`

    footer.classList.add('show-result')
  } catch (error) {
    console.log('nada')
  }
}

// Formata a moeda para o real BRL (R$ 0,00).
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: "currency",
    currency: "BRL",
  })
}