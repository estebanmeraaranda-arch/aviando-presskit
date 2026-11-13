# Guía y Ficha Completa para Publicar «Aviando» en Itch.io
**Estudio:** Faestila Studio  
**Página del juego:** `https://faestilaestudio.itch.io/aviando`

---

## 1. Configuración General (Edit Game)

* **Title:** `Aviando`
* **Short description / Tagline:**  
  *«Un videojuego 3D de sigilo, gestión de estamina y físicas de vuelo tridimensional. Burlar la mirada de Karmen, despierta a la tortuga y conquista tu libertad.»*
* **Classification:** `Games`
* **Kind of project:** `Downloadable` (o `HTML` si exportan WebGL de Unity).
* **Release status:** `In development` / `Prototype` (Beta Académica).
* **Pricing:** `$0 or donate` (Free / Gratis con opción de donar).

---

## 2. Contenido de la Descripción (HTML para pegar directo en itch.io)

Puedes copiar y pegar este bloque directamente en el editor de descripción de itch.io (cambiando a modo código HTML `</>` o usando el editor visual):

```html
<div style="text-align: center;">
  <h2>🕊️ ¿Lograrás escapar de la casa sin ser descubierto?</h2>
  <p><em>«Aviando» es un videojuego 3D de exploración aérea, físicas de inercia y sigilo desarrollado en Unity por Faestila Studio (Universidad de San Buenaventura Cali).</em></p>
</div>

<hr />

<h3>📖 La Historia</h3>
<p>
  Tras <strong>6 años encerrado</strong> en su jaula, un pequeño pájaro cautivo decide que es momento de emprender su plan de escape. La casa es un entorno vertical inmenso lleno de obstáculos, muebles altos y secretos... pero el camino a la libertad no será fácil: la vigilante dueña, <strong>Karmen (75 años)</strong>, patrulla incansablemente cada pasillo con aguda audición y estricta vigilancia visual.
</p>

<hr />

<h3>🎮 Características Principales</h3>
<ul>
  <li><strong>Físicas de Vuelo e Inercia 3D:</strong> Domina la sustentación, las corrientes de aire, el planeo y calcula tus descensos en picada sobre superficies altas.</li>
  <li><strong>Gestión de Estamina:</strong> Aletear agota tu energía. Encuentra repisas seguras para descansar o recolecta las <em>Plumas Doradas</em> para aumentar tu capacidad de vuelo.</li>
  <li><strong>Cooperación Animal Inter-especies:</strong> Eres un ave frágil y no puedes abrir puertas solo. Busca a tu aliada, la <em>Tortuga</em>, y embístela en picada para despertarla y usar su caparazón como ariete.</li>
  <li><strong>Tensión y Sigilo Puro:</strong> Evita el cono de visión directa de Karmen y cuida de no generar ruidos bruscos o derribar objetos que puedan alertarla.</li>
  <li><strong>Estética Cottagecore & Iluminación Cálida:</strong> Ambientación acogedora con texturas de madera oscura (Adler Dark Wood), mármol y luz volumétrica en tiempo real.</li>
</ul>

<hr />

<h3>🕹️ Controles (Soporte para Mando / Gamepad)</h3>
<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="text-align: left; padding: 6px; border-bottom: 2px solid #ccc;">Botón / Control</th>
    <th style="text-align: left; padding: 6px; border-bottom: 2px solid #ccc;">Acción</th>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Stick Izquierdo (L)</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Moverse / Dirección de vuelo (Pitch y Yaw)</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Stick Derecho (R)</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Control libre de cámara 3D</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Botón A / Cruz</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Saltar / Aletear (consume estamina)</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Gatillo R2 / RT</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Acelerar / Picada rápida</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Gatillo L2 / LT</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Frenar / Modo planeo sustentado</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Botón B / Círculo</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Embestida en picada (despertar a la Tortuga)</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Botón X / Cuadrado</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Interactuar / Recolectar pluma de estamina</td>
  </tr>
  <tr>
    <td style="padding: 6px; border-bottom: 1px solid #eee;"><strong>Botón Y / Triángulo</strong></td>
    <td style="padding: 6px; border-bottom: 1px solid #eee;">Vista rápida / Enfocar la posición de Karmen</td>
  </tr>
</table>

<hr />

<h3>👥 Equipo de Desarrollo — Faestila Studio</h3>
<p>
  Proyecto desarrollado para la entrega académica de <strong>Videojuegos 3D</strong> en la <em>Universidad de San Buenaventura Cali</em> por:
</p>
<ul>
  <li><strong>Fabián Simancas:</strong> Programación, lógicas de físicas de vuelo y mecánicas.</li>
  <li><strong>Esteban Mera:</strong> Product Owner, diseño de escenarios y visión de proyecto.</li>
  <li><strong>Camila:</strong> Arte conceptual, modelado 3D, identidad y UI.</li>
</ul>

<p>
  🌐 <strong>Presskit Oficial & Recursos de Prensa:</strong> <a href="https://aviando-presskit-dqih.vercel.app/" target="_blank">aviando-presskit-dqih.vercel.app</a><br />
  📸 <strong>Instagram Oficial:</strong> <a href="https://www.instagram.com/faestila011studio/" target="_blank">@faestila011studio</a>
</p>
```

---

## 3. Metadata y Categorización en Itch.io

* **Genre:** `Adventure` (Aventura) / `Simulation` (Simulación) / `Stealth` (Sigilo).
* **Tags recomendados:**
  * `3D`, `Physics`, `Stealth`, `Flight`, `Bird`, `Unity`, `Third Person`, `Atmospheric`, `Cozy`, `Short`, `Singleplayer`, `Cute`.
* **Custom noun (Download button):** `Play Beta` o `Descargar Beta`.

---

## 4. Recursos Visuales para Subir (Archivos listos en la carpeta)

1. **Cover Image (Portada - 630x500 px min):**
   * Usar: `images/logo-aviando.jpg` o una composición del ave roja con la pluma.
2. **Screenshots (Capturas - min 3):**
   * `images/u3.jpg` (Ave en mesa de ajedrez frente a la pluma dorada).
   * `images/u2.png` (Sala y comedor con luz cálida de lámparas).
   * `images/u1.png` (Separador de ambientes y muros de Adler Dark Wood).
   * `images/s5.png` (Hoja de concept art con Karmen, el mapa y la jaula).
   * `images/ficha-personajes.jpg` (Bocetos a lápiz del Pájaro, la Tortuga y Karmen).
3. **Banner / Background Image (Fondo temático):**
   * Usar un tono crema rústico `#FAF5EB` o el degradado de `images/header.png`.
