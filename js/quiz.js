alert("Seja bem-vindo ao Quiz")

const perguntas =  [
    {
        pergunta: "1- Qual é o principal material utilizado em quadros de bicicleta de alta performance?\na) Aço\nb) Alumínio\nc) Fibra de carbono\nd) Madeira",
        resposta: "c"
    },
    {
        pergunta: "2- O que significa MTB no contexto de ciclismo?\na) Mountain Trekking Bike\nb) Mountain Trail Bike\nc) Mountain Terrain Bike\nd) Mountain Bike",
        resposta: "d"
    },
    {
        pergunta: "3- Qual componente é responsável por controlar as marchas em uma bicicleta?\na) Pedal\nb) Freio\nc) Câmbio\nd) Corrente",
        resposta: "c"
    },
    {
        pergunta: "4- Qual é o tipo de bicicleta mais adequado para competições de velocidade em pistas pavimentadas?\na) BMX\nb) Speed/Road Bike\nc) Mountain Bike\nd) Híbrida",
        resposta: "b"
    },
    {
        pergunta: "5- Em uma bicicleta, qual parte é acionada diretamente pelo ciclista para mover a corrente?\na) Pneu\nb) Pedal\nc) Selim\nd) Guidão",
        resposta: "b"
    },
    {
        pergunta: "6- Qual é o nome da peça responsável por conectar o pedal à coroa da bicicleta?\na) Selim\nb) Guidão\nc) Pedivela\nd) Câmbio",
        resposta: "c"
    },
    {
        pergunta: "7- O que o termo 'suspensão dianteira' se refere em uma bicicleta?\na) Freios mais avançados\nb) Amortecedor na roda traseira\nc) Amortecedor na roda dianteira\nd) Sistema de marchas",
        resposta: "c"
    },
    {
        pergunta: "8- Qual destes é um tipo comum de freio de bicicleta?\na) Freio a disco\nb) Freio a motor\nc) Freio a ar\nd) Freio a vácuo",
        resposta: "a"
    },
    {
        pergunta: "9- Qual equipamento de segurança é recomendado para todos os ciclistas?\na) Câmbio\nb) Capacete\nc) Selim\nd) Roda extra",
        resposta: "b"
    },
    {
        pergunta: "10- Qual é a vantagem principal de uma bicicleta com marchas?\na) Aumentar a velocidade máxima\nb) Facilitar subir morros e andar em terrenos planos\nc) Melhorar a aerodinâmica\nd) Melhorar a frenagem",
        resposta: "b"
    }
];

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