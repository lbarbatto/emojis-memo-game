const emojis = [
    "👽",
    "👽",
    "👾",
    "👾",
    "🤖",
    "🤖",
    "💀",
    "💀",
    "👻",
    "👻",
    "👹",
    "👹",
    "🥸",
    "🥸",
    "😈",
    "😈"
];
let cartasViradas = [];
let jogadas = 0;

let emojisEmbaralhados = emojis.sort(() => 
    (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = emojisEmbaralhados[i];
    box.onclick = escolherCarta;
    document.querySelector(".game").appendChild(box);    
}

function escolherCarta() {
    if (cartasViradas.length < 2) {
        this.classList.add("cartaVirada");
        cartasViradas.push(this);
    }
    if (cartasViradas.length == 2) {
        setTimeout(compararCartas, 500);
    }
    
}

function compararCartas() {
    jogadas++;
    if (cartasViradas[0].innerHTML === cartasViradas[1].innerHTML) {
        cartasViradas[0].classList.add("cartaCerta");
        cartasViradas[1].classList.add("cartaCerta");
    } else {
        cartasViradas[0].classList.remove("cartaVirada");
        cartasViradas[1].classList.remove("cartaVirada");
    }

    cartasViradas = [];

    if (document.querySelectorAll(".cartaCerta").length === emojis.length) {
        alert(`PARABÉNS! VOÇÊ CONSEGUIU EM ${jogadas} JOGADAS!`);
    }
}

