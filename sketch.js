let xBolinha = 300;

let yBolinha = 200;

let diametro = 20;

let raio = diametro / 2;

let velocidadeXBolinha = 6;

let velocidadeYBolinha = 6;

let larguraRaquete = 10;

let alturaRaquete = 90;

let xRaqueteEsquerda = 10;

let yRaqueteEsquerda = 150;

let xRaqueteDireita = 580;

let yRaqueteDireita = 150;

let velocidadeYRaqueteDireita;

let meusPontos = 0;

let pontosOponente = 0;

function setup() {

  createCanvas(600, 400);

}

function draw() {

  background(0);

  

  // Bolinha

  mostraBolinha();

  movimentaBolinha();

  verificaColisaoBorda();

  

  // Raquetes

  mostraRaquete(xRaqueteEsquerda, yRaqueteEsquerda);

  movimentaRaqueteEsquerda();

  verificaColisaoRaquete(xRaqueteEsquerda, yRaqueteEsquerda);

  

  mostraRaquete(xRaqueteDireita, yRaqueteDireita);

  movimentaRaqueteDireita();

  verificaColisaoRaquete(xRaqueteDireita, yRaqueteDireita);

  

  // Placar

  incluiPlacar();

  marcaPonto();

}

function mostraBolinha() {

  circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha() {

  xBolinha += velocidadeXBolinha;

  yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda() {

  if (yBolinha + raio > height || yBolinha - raio < 0) {

    velocidadeYBolinha *= -1;

  }

}

function mostraRaquete(x, y) {

  rect(x, y, larguraRaquete, alturaRaquete);

}

function movimentaRaqueteEsquerda() {

  if (keyIsDown(UP_ARROW)) {

    yRaqueteEsquerda -= 10;

  }

  if (keyIsDown(DOWN_ARROW)) {

    yRaqueteEsquerda += 10;

  }

  yRaqueteEsquerda = constrain(yRaqueteEsquerda, 0, height - alturaRaquete);

}

function movimentaRaqueteDireita() {

  velocidadeYRaqueteDireita = yBolinha - yRaqueteDireita - alturaRaquete / 2 - 30;

  yRaqueteDireita += velocidadeYRaqueteDireita;

  yRaqueteDireita = constrain(yRaqueteDireita, 0, height - alturaRaquete);

}

function verificaColisaoRaquete(x, y) {

  if (xBolinha - raio < x + larguraRaquete && xBolinha + raio > x &&

      yBolinha + raio > y && yBolinha - raio < y + alturaRaquete) {

    velocidadeXBolinha *= -1;

  }

}

function incluiPlacar() {

  textAlign(CENTER);

  textSize(16);

  fill(255);

  text(meusPontos, 278, 26);

  text(pontosOponente, 321, 26);

}

function marcaPonto() {

  if (xBolinha > width) {

    meusPontos += 1;

    resetBolinha();

  }

  if (xBolinha < 0) {

    pontosOponente += 1;

    resetBolinha();

  }

}

function resetBolinha() {

  xBolinha = width / 2;

  yBolinha = height / 2;

  velocidadeXBolinha *= -1;

}





