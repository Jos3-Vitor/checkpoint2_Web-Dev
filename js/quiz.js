alert("Seja bem-vindo ao Quiz")

const perguntas = [
    {
        pergunta: "1- Qual é o principal material utilizado em quadros de bicicleta de alta performance?\na) Aço\nb) Alumínio\nc) Fibra de carbono\nd) Madeira",
        resposta: "C"
    },
    {
        pergunta: "2- O que significa MTB no contexto de ciclismo?\na) Mountain Trekking Bike\nb) Mountain Trail Bike\nc) Mountain Terrain Bike\nd) Mountain Bike",
        resposta: "D"
    },
    {
        pergunta: "3- Qual componente é responsável por controlar as marchas em uma bicicleta?\na) Pedal\nb) Freio\nc) Câmbio\nd) Corrente",
        resposta: "C"
    },
    {
        pergunta: "4- Qual é o tipo de bicicleta mais adequado para competições de velocidade em pistas pavimentadas?\na) BMX\nb) Speed/Road Bike\nc) Mountain Bike\nd) Híbrida",
        resposta: "B"
    },
    {
        pergunta: "5- Em uma bicicleta, qual parte é acionada diretamente pelo ciclista para mover a corrente?\na) Pneu\nb) Pedal\nc) Selim\nd) Guidão",
        resposta: "B"
    },
    {
        pergunta: "6- Qual é a função do freio a disco em uma bicicleta?\na) Melhorar a aerodinâmica\nb) Reduzir o peso total da bicicleta\nc) Proporcionar frenagem mais eficiente\nd) Aumentar a velocidade",
        resposta: "C"
    },
    {
        pergunta: "7- Qual acessório é essencial para a segurança do ciclista?\na) Luvas\nb) Capacete\nc) Sapatilhas\nd) Óculos de sol",
        resposta: "B"
    },
    {
        pergunta: "8- O que significa a sigla 'BMX' no contexto do ciclismo?\na) Bicycle Moto Cross\nb) Bike Mountain Extreme\nc) Bicycle Mountain Xtreme\nd) Bike Moto Xtreme",
        resposta: "A"
    },
    {
        pergunta: "9- Qual componente conecta o guidão à roda dianteira?\na) Garfo\nb) Quadro\nc) Selim\nd) Corrente",
        resposta: "A"
    },
    {
        pergunta: "10- Em ciclismo, o que é 'cadência'?\na) A velocidade máxima atingida\nb) A força aplicada nos pedais\nc) O número de rotações dos pedais por minuto\nd) A pressão dos pneus",
        resposta: "C"
    }
];


let acertos = 0;

//percorredo as perguntas

for (let i = 0; i < perguntas.length; i++) {
    const respostaUsuario = prompt(perguntas[i].pergunta)

    if (respostaUsuario.toLowerCase() == perguntas[i].resposta.toLowerCase()) {
        acertos++
    }
}

//mostrando resultado 

document.getElementById("msg").innerHTML = alert(`Você acertou ${acertos} de ${perguntas.length} perguntas`)

function trocar(cor) {
    document.body.style.background = cor;
}