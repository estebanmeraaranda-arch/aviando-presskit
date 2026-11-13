const pptxgen = require('pptxgenjs');
const path = require('path');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';

// Paleta de color Cottagecore / Faestila
const C_BG_CREAM = 'FAF5EB';
const C_WHITE = 'FFFFFF';
const C_CARD = 'FFFDF9';
const C_PARCHMENT = 'F4ECDC';
const C_FOREST = '38503B';
const C_SAGE = '618264';
const C_CLAY = '9C6644';
const C_TEXT = '342D27';
const C_TEXT_MUTED = '6B5E53';
const C_GOLD = 'D4A373';
const C_BORDER = 'E5DAC7';

// -------------------------------------------------------------
// SLIDE 1: PORTADA
// -------------------------------------------------------------
const slide1 = pptx.addSlide();
slide1.background = { color: C_BG_CREAM };

// Marco sutil
slide1.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 0.5, w: 12.33, h: 6.5,
  fill: { color: C_CARD },
  line: { color: C_BORDER, width: 1.5 }
});

// Logo del juego
slide1.addImage({
  path: path.join(__dirname, 'images', 'logo-aviando.jpg'),
  x: 1.2, y: 1.2, w: 4.8, h: 4.8
});

// Título y detalles
slide1.addText('AVIANDO', {
  x: 6.2, y: 1.6, w: 6.0, h: 1.0,
  fontSize: 48, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide1.addText('Videojuego 3D de Sigilo, Vuelo y Escape', {
  x: 6.2, y: 2.6, w: 6.0, h: 0.5,
  fontSize: 20, fontFace: 'Calibri', italic: true, color: C_CLAY
});

slide1.addShape(pptx.ShapeType.line, {
  x: 6.2, y: 3.2, w: 5.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

slide1.addText([
  { text: 'Estudio: ', options: { bold: true, color: C_FOREST } },
  { text: 'Faestila Studio\n', options: { color: C_TEXT } },
  { text: 'Institución: ', options: { bold: true, color: C_FOREST } },
  { text: 'Universidad de San Buenaventura Cali\n\n', options: { color: C_TEXT } },
  { text: 'Integrantes:\n', options: { bold: true, color: C_CLAY } },
  { text: '• Fabián Simancas — ', options: { bold: true } },
  { text: 'Desarrollo, Lógica y Mecánicas\n' },
  { text: '• Esteban Mera — ', options: { bold: true } },
  { text: 'Product Owner & Diseño de Escenarios\n' },
  { text: '• Camila — ', options: { bold: true } },
  { text: 'Arte, Concept Art, UI y Modelado 3D' }
], {
  x: 6.2, y: 3.4, w: 6.0, h: 3.0,
  fontSize: 14, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.2
});

// -------------------------------------------------------------
// SLIDE 2: CONCEPTO DE JUEGO
// -------------------------------------------------------------
const slide2 = pptx.addSlide();
slide2.background = { color: C_BG_CREAM };

slide2.addText('CONCEPTO DE JUEGO', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide2.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Tarjeta 1: Premisa Narrativa
slide2.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 6.8, h: 2.3,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.1
});
slide2.addText('Premisa Narrativa', {
  x: 1.1, y: 1.7, w: 6.2, h: 0.4,
  fontSize: 18, fontFace: 'Georgia', bold: true, color: C_CLAY
});
slide2.addText('Tras 6 años encerrado en su jaula, un pequeño pájaro cautivo decide emprender su plan de escape. La casa es un entorno vertical lleno de obstáculos, muebles altos y rincones secretos que deberá explorar para conquistar su libertad.', {
  x: 1.1, y: 2.1, w: 6.2, h: 1.5,
  fontSize: 13, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.2
});

// Tarjeta 2: Conflicto & Retos
slide2.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 4.1, w: 6.8, h: 2.7,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.1
});
slide2.addText('El Conflicto & Dinámicas', {
  x: 1.1, y: 4.3, w: 6.2, h: 0.4,
  fontSize: 18, fontFace: 'Georgia', bold: true, color: C_CLAY
});
slide2.addText([
  { text: '• Gestión de Estamina: ', options: { bold: true, color: C_FOREST } },
  { text: 'Volar consume energía; requiere planear y aterrizar en puntos seguros.\n' },
  { text: '• Cámaras de Vigilancia: ', options: { bold: true, color: C_FOREST } },
  { text: 'Sistemas ópticos que alertan si el ave cruza su campo de visión.\n' },
  { text: '• Karmen (La Dueña): ', options: { bold: true, color: C_FOREST } },
  { text: 'Patrulla constante con visión directa y aguda audición ante cualquier choque o ruido.' }
], {
  x: 1.1, y: 4.8, w: 6.2, h: 1.8,
  fontSize: 13, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.3
});

// Imagen Gameplay 1
slide2.addImage({
  path: path.join(__dirname, 'images', 'c1.png'),
  x: 7.9, y: 1.5, w: 4.6, h: 2.5
});
slide2.addText('Pruebas de desplazamiento y sustentación 3D en Unity', {
  x: 7.9, y: 4.05, w: 4.6, h: 0.3,
  fontSize: 10, italic: true, align: 'center', color: C_TEXT_MUTED
});

// Imagen Gameplay 2
slide2.addImage({
  path: path.join(__dirname, 'images', 'c2.png'),
  x: 7.9, y: 4.4, w: 4.6, h: 2.2
});

// -------------------------------------------------------------
// SLIDE 3: PITCH
// -------------------------------------------------------------
const slide3 = pptx.addSlide();
slide3.background = { color: C_BG_CREAM };

slide3.addText('PITCH DEL JUEGO', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide3.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Quote Box
slide3.addShape(pptx.ShapeType.rect, {
  x: 0.8, y: 1.5, w: 11.5, h: 0.9,
  fill: { color: C_PARCHMENT }, line: { color: C_SAGE, width: 1.5 }
});
slide3.addText('«Dominar el vuelo y la inercia para navegar el espacio tridimensional, burlar a la dueña y coordinar el escape con los aliados de la casa.»', {
  x: 1.0, y: 1.5, w: 11.1, h: 0.9,
  fontSize: 15, fontFace: 'Georgia', italic: true, bold: true, color: C_FOREST, align: 'center'
});

// Imagen destacada (ave frente a la pluma de stamina)
slide3.addImage({
  path: path.join(__dirname, 'images', 'u3.jpg'),
  x: 0.8, y: 2.6, w: 5.4, h: 4.2
});

// 4 Pilares del Pitch
const pilares = [
  { t: '1. Físicas de Vuelo e Inercia', d: 'Sustentación, gravedad y control tridimensional realista que desafía al jugador.' },
  { t: '2. Gestión de Estamina', d: 'Cada aleteo cuenta. Descansa en repisas o recolecta plumas doradas para mejorar el rendimiento.' },
  { t: '3. Cooperación Animal', d: 'El ave despierta a la Tortuga con impactos calculados para abrir puertas y derribar obstáculos.' },
  { t: '4. Tensión y Sigilo Puro', d: 'Detección acústica por colisiones y conos de visión directa de la vigilante Karmen.' }
];

pilares.forEach((p, idx) => {
  const yPos = 2.6 + idx * 1.05;
  slide3.addShape(pptx.ShapeType.roundRect, {
    x: 6.5, y: yPos, w: 5.8, h: 0.95,
    fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.08
  });
  slide3.addText(p.t, {
    x: 6.7, y: yPos + 0.1, w: 5.4, h: 0.3,
    fontSize: 14, fontFace: 'Georgia', bold: true, color: C_CLAY
  });
  slide3.addText(p.d, {
    x: 6.7, y: yPos + 0.38, w: 5.4, h: 0.5,
    fontSize: 11.5, fontFace: 'Calibri', color: C_TEXT
  });
});

// -------------------------------------------------------------
// SLIDE 4: ARTE (CONCEPT ART & NIVEL)
// -------------------------------------------------------------
const slide4 = pptx.addSlide();
slide4.background = { color: C_BG_CREAM };

slide4.addText('ARTE & DISEÑO DE NIVEL', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide4.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Concept art sheet (s5.png)
slide4.addImage({
  path: path.join(__dirname, 'images', 's5.png'),
  x: 0.8, y: 1.5, w: 5.0, h: 5.2
});

// Storyboards y renders
slide4.addImage({
  path: path.join(__dirname, 'images', 'u1.png'),
  x: 6.1, y: 1.5, w: 3.1, h: 1.8
});
slide4.addImage({
  path: path.join(__dirname, 'images', 'u2.png'),
  x: 9.3, y: 1.5, w: 3.1, h: 1.8
});

// Leyenda del diseño de nivel
slide4.addShape(pptx.ShapeType.roundRect, {
  x: 6.1, y: 3.4, w: 6.3, h: 3.3,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.1
});

slide4.addText('Componentes del Escenario & Estilo', {
  x: 6.3, y: 3.6, w: 5.9, h: 0.35,
  fontSize: 16, fontFace: 'Georgia', bold: true, color: C_CLAY
});

slide4.addText([
  { text: '• Mapa Interior: ', options: { bold: true, color: C_FOREST } },
  { text: 'Sala principal, cocina, baño, habitación privada y escalera a la 2da planta.\n' },
  { text: '• Verticalidad: ', options: { bold: true, color: C_FOREST } },
  { text: 'Lámparas colgantes, repisas de libros y muebles altos sirven de refugio.\n' },
  { text: '• Coleccionables (Plumas): ', options: { bold: true, color: C_FOREST } },
  { text: 'Puntos de recompensa distribuidos por zonas peligrosas.\n' },
  { text: '• Estética Cottagecore / Rústica: ', options: { bold: true, color: C_FOREST } },
  { text: 'Materiales nobles (Adler Dark Wood, mármol) combinados con iluminación cálida en tiempo real.' }
], {
  x: 6.3, y: 4.05, w: 5.9, h: 2.5,
  fontSize: 12, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.3
});

// -------------------------------------------------------------
// SLIDE 5: FICHA DE PERSONAJES
// -------------------------------------------------------------
const slide5 = pptx.addSlide();
slide5.background = { color: C_BG_CREAM };

slide5.addText('FICHA DE PERSONAJES', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide5.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Imagen completa de la ficha a la izquierda
slide5.addImage({
  path: path.join(__dirname, 'images', 'ficha-personajes.jpg'),
  x: 0.8, y: 1.5, w: 3.3, h: 5.2
});

// Columnas de personajes
const chars = [
  {
    n: 'El Pájaro (Protagonista)',
    edad: '6 años', esp: 'Ave cautiva',
    desc: 'Muy ágil en el aire pero de resistencia limitada. Gasta estamina al volar y saltar. Recolecta plumas doradas para aumentar su reserva de vuelo.',
    anim: 'Idle (respirando), salto, caída, choque y aleteo sostenido.'
  },
  {
    n: 'La Tortuga (Aliada)',
    edad: '40 años', esp: 'Reptil acorazado',
    desc: 'Compañera indispensable. Su caparazón pesado sirve de impulso y ariete para derribar muebles y desbloquear puertas. Requiere que el ave choque con ella para despertarla.',
    anim: 'Durmiendo, en alerta e impacto contra puertas.'
  },
  {
    n: 'Karmen / La Dueña (Antagonista)',
    edad: '75 años', esp: 'Humana vigilante',
    desc: 'Figura imponente que supervisa la casa para mantener el orden. Posee un amplio cono de visión y reacciona de inmediato ante sonidos de colisiones.',
    anim: 'Caminata constante en ruta, alerta a ruidos extraños y persecución.'
  }
];

chars.forEach((c, idx) => {
  const yPos = 1.5 + idx * 1.75;
  slide5.addShape(pptx.ShapeType.roundRect, {
    x: 4.4, y: yPos, w: 8.0, h: 1.65,
    fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.08
  });
  slide5.addText(c.n, {
    x: 4.6, y: yPos + 0.1, w: 7.6, h: 0.3,
    fontSize: 15, fontFace: 'Georgia', bold: true, color: C_CLAY
  });
  slide5.addText([
    { text: `Edad: ${c.edad} | Especie: ${c.esp}\n`, options: { bold: true, color: C_FOREST, fontSize: 11 } },
    { text: `${c.desc}\n`, options: { color: C_TEXT, fontSize: 11 } },
    { text: `Animaciones / Expresiones: `, options: { bold: true, color: C_TEXT_MUTED, fontSize: 10.5 } },
    { text: c.anim, options: { italic: true, color: C_TEXT_MUTED, fontSize: 10.5 } }
  ], {
    x: 4.6, y: yPos + 0.45, w: 7.6, h: 1.1,
    fontFace: 'Calibri', lineSpacingMultiple: 1.15
  });
});

// -------------------------------------------------------------
// SLIDE 6: MECÁNICAS Y DIAGRAMA UI
// -------------------------------------------------------------
const slide6 = pptx.addSlide();
slide6.background = { color: C_BG_CREAM };

slide6.addText('MECÁNICAS & DIAGRAMA DE UI', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide6.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Diagrama de bucle de juego
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 11.5, h: 1.3,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.08
});
slide6.addText('Core Loop de Jugabilidad', {
  x: 1.0, y: 1.6, w: 11.0, h: 0.3,
  fontSize: 15, fontFace: 'Georgia', bold: true, color: C_CLAY
});
slide6.addText('Vuelo & Exploración  ➔  Gasto de Estamina  ➔  Aterrizaje en Puntos Altos  ➔  Choque con Tortuga (Desbloqueo)  ➔  Evasión de Karmen', {
  x: 1.0, y: 2.0, w: 11.0, h: 0.6,
  fontSize: 13, fontFace: 'Calibri', bold: true, color: C_FOREST, align: 'center'
});

// Box UI Elements
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 3.0, w: 5.6, h: 3.7,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.08
});
slide6.addText('Elementos de Interfaz (HUD)', {
  x: 1.0, y: 3.2, w: 5.2, h: 0.35,
  fontSize: 16, fontFace: 'Georgia', bold: true, color: C_CLAY
});
slide6.addText([
  { text: '• Medidor de Estamina: ', options: { bold: true, color: C_FOREST } },
  { text: 'Barra dinámica circular sobre el ave que se vacía con el aleteo sostenido y titila en estado de fatiga.\n\n' },
  { text: '• Indicador de Alerta de Karmen: ', options: { bold: true, color: C_FOREST } },
  { text: 'Ícono de ojo/sonido de 3 fases: Normal (blanco), Alerta por Ruido (amarillo) y Contacto Visual (rojo).\n\n' },
  { text: '• Contador de Plumas: ', options: { bold: true, color: C_FOREST } },
  { text: 'Muestra las plumas coleccionadas en el nivel para upgrades de resistencia.\n\n' },
  { text: '• Retícula de Apuntado de Picada: ', options: { bold: true, color: C_FOREST } },
  { text: 'Guía visual sutil para impactar con precisión a la tortuga o sobre superficies seguras.' }
], {
  x: 1.0, y: 3.65, w: 5.2, h: 2.9,
  fontSize: 12, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.2
});

// Espacio para diagrama de mockup
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 6.7, y: 3.0, w: 5.6, h: 3.7,
  fill: { color: C_PARCHMENT }, line: { color: C_SAGE, width: 1.5, dashType: 'dash' }, r: 0.08
});
slide6.addText('[ Espacio Reservado para Diagrama de UI / Mockup ]\n\nAquí puedes insertar la captura de pantalla con los elementos de HUD y retícula superpuestos sobre el modelo 3D del personaje.', {
  x: 7.0, y: 4.2, w: 5.0, h: 1.8,
  fontSize: 13, fontFace: 'Georgia', italic: true, color: C_TEXT_MUTED, align: 'center'
});

// -------------------------------------------------------------
// SLIDE 7: CONTROLES
// -------------------------------------------------------------
const slide7 = pptx.addSlide();
slide7.background = { color: C_BG_CREAM };

slide7.addText('CONTROLES (GAMEPAD)', {
  x: 0.8, y: 0.6, w: 11.5, h: 0.6,
  fontSize: 32, fontFace: 'Georgia', bold: true, color: C_FOREST
});

slide7.addShape(pptx.ShapeType.line, {
  x: 0.8, y: 1.2, w: 11.5, h: 0,
  line: { color: C_SAGE, width: 2 }
});

// Diagrama del mando
slide7.addImage({
  path: path.join(__dirname, 'images', 'controles-diagrama.png'),
  x: 0.8, y: 1.6, w: 6.2, h: 5.1
});

// Mapeo detallado de controles
slide7.addShape(pptx.ShapeType.roundRect, {
  x: 7.3, y: 1.6, w: 5.1, h: 5.1,
  fill: { color: C_CARD }, line: { color: C_BORDER, width: 1 }, r: 0.08
});
slide7.addText('Mapeo de Botones', {
  x: 7.6, y: 1.8, w: 4.5, h: 0.35,
  fontSize: 16, fontFace: 'Georgia', bold: true, color: C_CLAY
});

slide7.addText([
  { text: '• Stick Izquierdo (L): ', options: { bold: true, color: C_FOREST } },
  { text: 'Movimiento / Dirección de vuelo.\n' },
  { text: '• Stick Derecho (R): ', options: { bold: true, color: C_FOREST } },
  { text: 'Control de cámara 3D libre.\n' },
  { text: '• Botón A: ', options: { bold: true, color: C_FOREST } },
  { text: 'Saltar / Aletear (gasta estamina).\n' },
  { text: '• Gatillo R2 (RT): ', options: { bold: true, color: C_FOREST } },
  { text: 'Acelerar / Picada rápida.\n' },
  { text: '• Gatillo L2 (LT): ', options: { bold: true, color: C_FOREST } },
  { text: 'Frenar en el aire / Modo planeo.\n' },
  { text: '• Botón B: ', options: { bold: true, color: C_FOREST } },
  { text: 'Embestir / Despertar tortuga.\n' },
  { text: '• Botón X: ', options: { bold: true, color: C_FOREST } },
  { text: 'Interactuar / Recolectar pluma.\n' },
  { text: '• Botón Y: ', options: { bold: true, color: C_FOREST } },
  { text: 'Localizar a Karmen (enfoque rápido).\n' },
  { text: '• Start: ', options: { bold: true, color: C_FOREST } },
  { text: 'Pausa y menú de configuración.' }
], {
  x: 7.6, y: 2.25, w: 4.5, h: 4.3,
  fontSize: 11.5, fontFace: 'Calibri', color: C_TEXT, lineSpacingMultiple: 1.25
});

// -------------------------------------------------------------
// GUARDAR PRESENTACIÓN
// -------------------------------------------------------------
const outputPath = path.join(__dirname, 'Aviando_Presentacion.pptx');
pptx.writeFile({ fileName: outputPath }).then(fileName => {
  console.log(`✅ Presentación generada exitosamente en: ${fileName}`);
}).catch(err => {
  console.error("❌ Error generando presentación:", err);
});
