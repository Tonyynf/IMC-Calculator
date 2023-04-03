function calcular() {
    let peso = document.getElementById('txtPeso')
    let altura = document.getElementById('txtAltura')
    let res = document.getElementById('res')

    if (peso.value.length == ' ' || altura.value.length == ' ') {
        alert("Não é possivel calcular, Está faltando dados!")
    } else {
        let IMC = peso.value / altura.value ** 2;
        let classe = ' ';

        if (IMC < 18.5) {
            classe = 'Abaixo do peso normal'
        } else if (IMC >= 18.5 || IMC <= 24.9) {
            classe = 'Peso normal'
        } else if (IMC >= 25 || IMC <= 29.9) {
            classe = 'Excesso de peso'
        } else if (IMC >= 30 || IMC <= 34.9) {
            classe = 'Obesidade classe I'
        } else if (IMC >= 35 || IMC <= 39.9) {
            classe = 'Obesidade classe II'
        } else if (IMC >= 40) {
            classe = 'Obesidade classe III'
        }


        res.innerHTML = `<br>O seu IMC é de ${IMC.toFixed(1)}, você está com ${classe}`
        res.style.font = "normal 12pt Arial"
        res.style.textAlign = "center";
    }
}