function subtrair(number1, number2) {
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    if (number1 > number2) {
        alert(`O resultado é ${number1 - number2}`)
    }
    else {
        resultado = number2 - number1
        alert(`O resultado é ${number2 - number1}`)
    }

}

function ordenar(valor1, valor2, valor3, valor4) {
    valor1 = parseInt(valor1)
    valor2 = parseInt(valor2)
    valor3 = parseInt(valor3)
    valor4 = parseInt(valor4)


    if (valor4 < valor1) {
        alert(`${valor4}, ${valor1}, ${valor2}, ${valor3} `)
    }
    else if (valor4 > valor1 && valor4 < valor2) {
        alert(`${valor1}, ${valor4}, ${valor2}, ${valor3}`)
    }
    else if (valor4 > valor2 && valor4 < valor3) {
        alert(`${valor1}, ${valor2}, ${valor4}, ${valor3}`)
    }
    else{
        alert(`${valor1}, ${valor2}, ${valor3}, ${valor4}`)
    }
    
}

function novoSalario(codCargo, salario) {
    codCargo = parseInt(codCargo)
    salario = parseFloat(salario)

    switch (codCargo) {
        case 1:
            alert(`Seu cargo é Escriturário e seu novo salario é de R$ ${salario + salario * 0.5}`)
            break;
        case 2:
            alert(`Seu cargo é Secretário e seu novo salario é de R$ ${salario + salario * 0.35}`)
            break;
        case 3:
            alert(`Seu cargo é Caixa e seu novo salario é de R$ ${salario + salario * 0.2}`)
            break;
        case 4:
            alert(`Seu cargo é Gerente e seu novo salario é de R$ ${salario + salario * 0.1}`)
            break;
        default:
            alert("Código do cargo inválida.")

    }
}

function media(nota1, nota2, nota3, nota4, nota5) {
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)
    nota4 = parseFloat(nota4)
    nota5 = parseFloat(nota5)
    var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

    if (media >= 6) {
        alert(`Média = ${media}\nAprovado`)
    }
    else {
        alert(`Média = ${media}\n Reprovado`)
    }
}

function menu(option) {
    option = parseInt(option)

    switch (option) {
        case 1:
            alert("Cadastrar")
            break;
        case 2:
            alert("Alterar")
            break;
        case 3:
            alert("Excluir")
            break;
        case 4:
            alert("Pesquisar")
            break;
        default:
            alert("Opção inexistente")
    }

}