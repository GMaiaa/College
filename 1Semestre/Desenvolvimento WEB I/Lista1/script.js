function aplicacao(deposito){
  var valorFinal = parseInt(deposito) + parseInt(deposito) * 0.013
  alert("Valor após 1 mês de aplicação será de: " + valorFinal)
}

function pagamento(horas, valorHora, desconto){
  var salario = parseInt(horas) * parseInt(valorHora)
  var porcentagem = parseInt(desconto) / 100
  var pagamento = salario - salario * porcentagem
  alert("O valor a receber é de: R$" + pagamento )

}

function newSalary(salario){
  var reajuste = parseInt(salario) + parseInt(salario) * 0.15
  alert("O novo salário é de:\n" + reajuste)
}

function idade(anoNascimento, anoAtual){
  var idade = parseInt(anoAtual) - parseInt(anoNascimento)
  var idadeFutura = idade + 17 
  alert("Sua idade é: " + idade + "\nSua idade daqui 17 anos será: " + idadeFutura)
}


function converter(celsius){
  var fahrenheit = (9 * parseInt(celsius) + 160) / 5 
  alert("A temperatura em Fahrenheit é de:" + fahrenheit)
}

function alterar(num1, num2){
  var aux = num1
  num1 = num2
  num2 = aux
  alert("X = " + num1 + "\nY = " + num2 )
}

function idade(anoNascimento, anoAtual){
  var idade = parseInt(anoAtual) - parseInt(anoNascimento)
  var idadeFutura = idade + 17 
  alert("Sua idade é: " + idade + "\nSua idade daqui 17 anos será: " + idadeFutura)
}

function volume(comprimento, largura, altura){
  var volume = parseInt(comprimento) * parseInt(largura) * parseInt(altura)
  alert("Volume é igual a: " + volume)
}
  
  function division(number){

  
    var div1 = parseFloat(number) / 2
    var div2 = parseFloat(number) / 3
    var div3 = parseFloat(number) / 4
    var div4 = parseFloat(number) / 5
  
    alert(number + "/ 2 = " + div1 + "\n" 
    + number + "/ 3 = " + div2 + "\n" 
    + number + "/ 4 = " + div3 + "\n" 
    + number + "/ 5 = " + div4)
  }
  
  