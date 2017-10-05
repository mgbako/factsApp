(function () {
  'use strict'

  var fact_body = document.querySelector('#fact_body')
  var fact_text = document.querySelector('#fact_text')
  var numberInput = document.querySelector('#number')

  numberInput.addEventListener('input', fectNumber)

  function fectNumber () {
    let number = numberInput.value
    console.log(numberInput.value)
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://numbersapi.com/' + number)

    xhr.onload = function () {
      if (this.status == 200 && number !== '') {
        fact_body.style.display = 'block'
        fact_text.innerText = this.responseText
      }
    }
    xhr.send()
  }
}())
