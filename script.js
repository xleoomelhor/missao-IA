const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é a favor da COTA RACIAL?",
        alternativas: [
            "Sim, com certeza!",
            "Não, um vexame!"
        ]
    },
    {
        enunciado: "Você acredita que o sistema de cotas é justo?",
        alternativas: [
            "Sim, pois serve muito bem como uma inclusão e compensação histórica.",
            "Não! A Cota Racial demonstra inferioridade a certas etnias/raças em inclusões sociais e profissionais, aonde pessoas ganham sem mérito próprio.",
        ]
    },
    {
        enunciado: "Para você, as Cotas para as universidades irão ajudar a diminuir o racismo e discriminação?",
        alternativas: [
            "Sim, pois com essas oportunidades poderão incluir outras pessoas a grandes instituições de ensino a fim de terem uma boa educação e consequentemente diminuir a discriminação.",
            "Não. Mesmo tendo oportunidades para se adentrarem a grandes instituições de ensino, isso não diminuiria a discriminação social, e também, de certo modo, poderia até aumentar a discriminação."
        ]
    },
    {
        enunciado: "Você utilizaria o sistema de Cotas Raciais?",
        alternativas: [
            "Sim, pois me beneficiaria bastante e justo.",
            "Não, pois não me beneficiaria e/ou não acho muito justo."
        ]
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual.alternativas);
}

function mostraAlternativas(alternativas) {
    for (const alternativa of alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativaSelecionada) {
    historiaFinal += alternativaSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049... Isso acabará!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "É isso, obrigado!";
}

mostraPergunta();