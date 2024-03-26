const inputNumber = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

convertBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(inputNumber.value)

  if (inputNumber.value === '') {
    output.classList.remove('hidden')
    output.innerHTML = `
    <p>Please enter a valid number.</p>
    `
    output.classList.add('error')
    
    return
  } 
  
  if (inputNumber.value < 1) {
    output.classList.remove('hidden')
    output.innerHTML = `
    <p>Please enter a number greater than or equal to 1.</p>
    `
    output.classList.add('error')

    return
  } 
  
  if (inputNumber.value > 3999) {
    output.classList.remove('hidden')
    output.innerHTML = `
    <p>Please enter a number less than or equal to 3999.</p>
    `
    output.classList.add('error')

    return
  }
  //  else {
  //   output.classList.add('hidden')
  //   output.innerHTML = ''
  //   output.classList.remove('error')
  // }

  let numberArr = inputNumber.value.split('')
  console.log(numberArr)
  let convertedNumber

  switch (numberArr.length) {
    case 1:
      convertedNumber = unit(numberArr[0])
      break;
    case 2:
      convertedNumber = ten(numberArr[0]) + unit(numberArr[1])
      break;
    case 3:
      convertedNumber = hundred(numberArr[0]) + ten(numberArr[1]) + unit(numberArr[2])
      break;
    case 4:
      convertedNumber = thousand(numberArr[0]) + hundred(numberArr[1]) + ten(numberArr[2]) + unit(numberArr[3])
      break;
    default:
      return
  }

  console.log(convertedNumber)

  output.classList.remove('error')
  output.classList.remove('hidden')
  output.innerHTML = `
  <p>${convertedNumber}</p>
  `
})


const unit = (number) => {
  let roman

  switch (number) {
    case '0':
      roman = ''
      break;
    case '1':
      roman = 'I'
      break;
    case '2':
      roman = 'II'
      break;
    case '3':
      roman = 'III'
      break;
    case '4':
      roman = 'IV'
      break;
    case '5':
      roman = 'V'
      break;
    case '6':
      roman = 'VI'
      break;
    case '7':
      roman = 'VII'
      break;
    case '8':
      roman = 'VIII'
      break;
    case '9':
      roman = 'IX'
      break;
    default:
      roman = undefined  
  }

  return roman
}

const ten = (number) => {
  let roman

  switch (number) {
    case '0':
      roman = ''
      break;
    case '1':
      roman = 'X'
      break;
    case '2':
      roman = 'XX'
      break;
    case '3':
      roman = 'XXX'
      break;
    case '4':
      roman = 'XL'
      break;
    case '5':
      roman = 'L'
      break;
    case '6':
      roman = 'LX'
      break;
    case '7':
      roman = 'LXX'
      break;
    case '8':
      roman = 'LXXX'
      break;
    case '9':
      roman = 'XC'
      break;
    default:
      roman = undefined  
  }

  return roman
}

const hundred = (number) => {
  let roman

  switch (number) {
    case '0':
      roman = ''
      break;
    case '1':
      roman = 'C'
      break;
    case '2':
      roman = 'CC'
      break;
    case '3':
      roman = 'CCC'
      break;
    case '4':
      roman = 'CD'
      break;
    case '5':
      roman = 'D'
      break;
    case '6':
      roman = 'DC'
      break;
    case '7':
      roman = 'DCC'
      break;
    case '8':
      roman = 'DCCC'
      break;
    case '9':
      roman = 'CM'
      break;
    default:
      roman = undefined  
  }

  return roman
}

const thousand = (number) => {
  let roman

  switch (number) {
    case '1':
      roman = 'M'
      break;
    case '2':
      roman = 'MM'
      break;
    case '3':
      roman = 'MMM'
      break;
    default:
      roman = undefined  
  }

  return roman
}