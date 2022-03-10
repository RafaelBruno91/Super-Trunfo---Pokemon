var carta1 = {
    nome: "bulbasauro",
    imagem:
        "https://pp.netclipart.com/pp/s/113-1135309_wikipedia-pokemon-bulbasaur.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        vida: 9
    }
};
var carta2 = {
    nome: "pikachu",
    imagem:
        "https://d.wattpad.com/story_parts/843762872/images/15f787558ab065ed17643243106.jpg",
    atributos: {
        ataque: 10,
        defesa: 7,
        vida: 7
    }
};
var carta3 = {
    nome: "blastoise",
    imagem:
        "https://i.pinimg.com/originals/c9/48/6f/c9486fb7880f8f32ea4382992d4eb6cd.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        vida: 10
    }
};
var carta4 = {
    nome: "Charizard",
    imagem:
        "https://th.bing.com/th/id/OIP.yObHriw94m1E0ED4syhGkQHaH8?pid=ImgDet&rs=1",
    atributos: {
        ataque: 9,
        defesa: 5,
        vida: 8
    }
};
var carta5 = {
    nome: "Butterfree",
    imagem:
        "https://th.bing.com/th/id/R.7d80a87af173d6de7ac98732df6c89b8?rik=MZHxforELhswcw&pid=ImgRaw&r=0",
    atributos: {
        ataque: 7,
        defesa: 9,
        vida: 6
    }
};
var carta6 = {
    nome: "Pidgeot",
    imagem:
        "https://th.bing.com/th/id/OIP.pTDoIRqH2e3GkaY16VHybAHaG1?pid=ImgDet&rs=1",
    atributos: {
        ataque: 8,
        defesa: 6,
        vida: 7
    }
};
var carta7 = {
    nome: "Nidoqueen",
    imagem:
        "https://th.bing.com/th/id/OIP.1vzbn4zSSBL21WZr7cjgqQHaHr?pid=ImgDet&rs=1",
    atributos: {
        ataque: 7,
        defesa: 7,
        vida: 9
    }
};
var carta8 = {
    nome: "Nidoking",
    imagem:
        "https://img00.deviantart.net/9159/i/2016/302/2/3/030___nidoking_by_luigicuau10-da4nvy0.png",
    atributos: {
        ataque: 8,
        defesa: 8,
        vida: 9
    }
};
var carta9 = {
    nome: "Ninetales",
    imagem:
        "https://th.bing.com/th/id/R.124dd820e9a7193719097003d1b68dbb?rik=Abgk4SM%2bBmM6gQ&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20120515214446%2fvirtualarena%2fit%2fimages%2f9%2f98%2fNinetales.png&ehk=qbKDQ54bX7r26LX8jbcXfnoMrqmk%2fYQpX55pkN1A0d8%3d&risl=&pid=ImgRaw&r=0",
    atributos: {
        ataque: 9,
        defesa: 6,
        vida: 7
    }
};
var carta10 = {
    nome: "Persian",
    imagem:
        "https://th.bing.com/th/id/OIP.Kp-H5jxz5fuqRQIf37fNVwHaHa?pid=ImgDet&rs=1",
    atributos: {
        ataque: 8,
        defesa: 6,
        vida: 7
    }
};

var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(numeroCartaMaquina);

    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    var divResultado = document.getElementById("resultado");

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'> Venceu! </p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'> Perdeu! </p>";
    } else {
        htmlResultado = "<p class='resultado-final'> Empatou! </p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

/* faltou os desafios de: Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros */
