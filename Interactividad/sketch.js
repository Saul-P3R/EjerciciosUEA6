let frase = "";
let fraseX;
let targetX;
let textoColor;
let bgColor;
let animando = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
  textAlign(CENTER, CENTER);

  // Valores iniciales
  frase = "Presiona una tecla del 1 al 0";
  fraseX = width / 2;
  targetX = width / 2;
  textoColor = color(0);
  bgColor = color(220);
}

function draw() {
  background(bgColor);

  // Animación: mueve frase hacia el centro
  if (animando) {
    fraseX -= (fraseX - targetX) * 0.1; // suaviza el movimiento
    if (abs(fraseX - targetX) < 1) {
      fraseX = targetX;
      animando = false;
    }
  }

  fill(textoColor);
  text(frase, fraseX, height / 2);
}

function keyPressed() {
  let nueva = "";

  switch (key) {
    case '1':
      nueva = "Jhonatan Joestar";
      break;
    case '2':
      nueva = "Josep Joestar";
      break;
    case '3':
      nueva = "Jotaro Kujo";
      break;
    case '4':
      nueva = "Josuke Higashitaka";
      break;
    case '5':
      nueva = "Giorno Giovanna";
      break;
    case '6':
      nueva = "Jolyne Joestar";
      break;
    case '7':
      nueva = "Jhony Joestar";
      break;
    case '8':
      nueva = "Gyro Zeppeli";
      break;
    case '9':
      nueva = "Gappy";
      break;
    case '0':
      nueva = "Jodio Joestar";
      break;
  }

  if (nueva !== "") {
    frase = nueva;
    fraseX = width + 300; // empieza fuera de pantalla
    textoColor = color(random(255), random(255), random(255));
    bgColor = color(random(255), random(255), random(255));
    animando = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  targetX = width / 2;
}

