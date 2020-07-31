convert = () => {
  const decimal = parseInt(document.getElementsByClassName('decimal-field')[0].value)
  console.log(decimal)
  
  if (decimal === 0) document.getElementsByClassName('binary-field')[0].value = 0

  else if (!decimal) return alert('Enter a number')

  document.getElementsByClassName('binary-field')[0].value = turnIntoBinary(decimal)

}

turnIntoBinary = num => {
  let binary = ''

  while (num != 0){
          binary += num % 2
          num = Math.floor(num/2)
  }


  return binary.split("").reverse().join("")
}