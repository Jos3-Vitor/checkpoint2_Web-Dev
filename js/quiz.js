alert("Seja bem-vindo ao Quiz")

const perguntas = [
    {
    pergunta: "1- Qual èe o principal material utilizado em quadros de bicicleta de alta performance?\na)Aço\nb)Aluminio\nc)Fibra de carbono\nd)Madeira",
    resposta: "C"
},{
    pergunta:"2- O que significa MTB no contexto de ciclismo?\na)Mountain Trekking Bike\nb) Mountain Trail Bike\nc) Mountain Terrain Bike\nd) Mountain Bike",
    resposta:"D)"
},{
    pergunta:"3- Qual componente é responsável por controlar as marchas em uma bicicleta?\na) Pedal\nb) Freio\nc) Câmbio\nd) Corrente",
    resposta:"C"
},{
    pergunta:"4- Qual é o tipo de bicicleta mais adequado para competições de velocidade em pistas pavimentadas?\na) BMX\nb) Speed/Road Bike\nc) Mountain Bike\nd) Híbrida",
    resposta:"B"
},{
    pergunta:"Em uma bicicleta, qual parte é acionada diretamente pelo ciclista para mover a corrente?\na) Pneu\nb) Pedal\nc) Selim\nd) Guidão",
    resposta:"B"
}
]

let acertos = 0;

//percorredo as perguntas

for (let i = 0; i< perguntas.length; i++){
    const respostaUsuario = prompt(perguntas[i].pergunta)

if(respostaUsuario.toLowerCase()==perguntas[i].resposta.toLowerCase()){
    acertos++
}
}

//mostrando resultado 

document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)

function trocar(cor){
    document.body.style.background = cor;
}