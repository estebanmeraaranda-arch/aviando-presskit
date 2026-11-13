# Aviando — Documentación y Contexto General del Proyecto

> Documento de contexto integral para Claude / Asistente IA sobre el videojuego **Aviando**, desarrollado por **Faestila Studio** (Universidad de San Buenaventura Cali).

---

## 1. Ficha Técnica y Equipo

* **Título:** Aviando
* **Estudio Desarrollador:** Faestila Studio
* **Institución:** Universidad de San Buenaventura Cali (Entrega Académica de Videojuegos 3D)
* **Motor:** Unity 3D (Universal Render Pipeline - URP) / Plataforma: PC
* **Fecha de Lanzamiento (Beta Académica):** Jueves 12 de noviembre de 2026
* **Sitio Web Oficial / Presskit:** [aviando-presskit.vercel.app](https://aviando-presskit.vercel.app/)
* **Itch.io:** [faestilaestudio.itch.io](https://faestilaestudio.itch.io/)
* **Instagram Oficial:** [@faestila011studio](https://www.instagram.com/faestila011studio/)
* **Contacto de Prensa:** faestilastudio@gmail.com
* **Estética y Dirección Artística:** *Cottagecore* rústica, paleta botánica cálida, maderas oscuras (*Adler Dark Wood*), mármol y luz cálida de interiores.

### Integrantes y Roles:
* **Fabián Simancas:** Equipo de Desarrollo — Lógica, ejecución técnica, físicas de vuelo y programación de mecánicas.
* **Esteban Mera:** Product Owner — Visión del proyecto, diseño de la estructura de escenarios, priorización de tareas.
* **Camila:** Equipo de Desarrollo — Identidad visual, arte conceptual (concept art), recursos visuales, UI y modelos 3D.

---

## 2. Premisa Narrativa y Concepto Central

* **Logline:** Videojuego 3D en tercera persona enfocado en **sigilo, gestión de estamina y físicas de vuelo tridimensional** en un entorno cerrado (*indoor*).
* **Historia:** Tras 6 años cautivo en una jaula dentro de una enorme casa de estilo rústico/tradicional, un pájaro rojo decide escapar aprovechando que la jaula quedó mal cerrada.
* **Objetivo:** Recorrer las diferentes habitaciones de la casa de forma vertical y sigilosa, evitando ser detectado por la dueña (**Karmen**), recolectando plumas doradas para mejorar su resistencia y colaborando con otros animales cautivos (como la **Tortuga**) para abrirse paso hacia el exterior.
* **Quote / Frase del Pitch:**
  > *«Dominar el vuelo y la inercia para navegar el espacio tridimensional, burlar a la dueña y coordinar el escape con los aliados de la casa.»*

---

## 3. Pilares de Jugabilidad (Core Pillars)

1. **Físicas de Vuelo e Inercia:** 
   - Vuelo libre en 3D que simula sustentación, resistencia del aire, gravedad y planeo.
   - Posibilidad de realizar maniobras aéreas, picadas y aterrizajes en superficies elevadas (lámparas, repisas, muebles altos).
2. **Gestión de Estamina:**
   - Aletear y ascender consume una barra de energía (estamina).
   - El jugador debe posarse en puntos seguros para recuperarla o planear sin aleteo para conservar inercia.
   - Existen **Plumas Doradas** coleccionables distribuidas por la casa que restauran la estamina y amplían la capacidad máxima de vuelo.
3. **Cooperación Animal Inter-especies:**
   - El pájaro es demasiado ligero y frágil para romper puertas o mover muebles pesados.
   - Debe encontrar a la **Tortuga** (dormida en el suelo o terrario), embestirla en picada para despertarla, y coordinar para que ella actúe como ariete derribando obstáculos.
4. **Sigilo, Tensión y Detección Acústica/Visual:**
   - **Karmen (La Dueña)** patrulla activamente las habitaciones. Cuenta con un amplio cono de visión y un sistema de audición que detecta choques, impactos contra paredes o muebles tirados.
   - **Cámaras de seguridad** instaladas en la casa vigilan ángulos muertos y activan alertas si el ave vuela frente a su sensor.

---

## 4. Fichas de Personajes

### A. El Pájaro (Protagonista)
* **Tipo:** Protagonista jugable.
* **Edad:** 6 años.
* **Especie:** Ave cautiva (plumaje rojo/modificable por skins).
* **Descripción:** Pequeño, ágil y decidido a escapar.
* **Mecánica clave:** Gasta estamina al volar/saltar. Recolecta plumas para aumentar su reserva de estamina.
* **Animaciones:** Idle (respirando), aleteo, salto, planeo, choque y caída.
* **Expresiones:** Normal, asustado y fatigado.

### B. La Tortuga (Aliada)
* **Tipo:** Aliado.
* **Edad:** 40 años.
* **Especie:** Reptil.
* **Descripción:** Compañera resistente con un caparazón pesado que sirve como ariete para derribar y abrir puertas.
* **Mecánica clave:** Permanece dormida en el terrario o suelo. El jugador debe chocar con ella en picada para despertarla e indicarle el objetivo a embestir.
* **Animaciones:** Durmiendo, en alerta e impacto contra puertas/muebles.
* **Expresiones:** Dormida, alerta e impacto.

### C. La Dueña / Karmen (Antagonista)
* **Tipo:** Antagonista principal (IA).
* **Edad:** 75 años.
* **Especie:** Humana.
* **Descripción:** Mujer imponente con gafas, cabello recogido y vestimenta tradicional que mantiene la disciplina y el cautiverio en la casa.
* **Mecánica clave:** Patrulla rutas constantes. Reacciona a la visión directa del ave y a ruidos de choques/colisiones en el entorno.
* **Animaciones:** Caminata en ruta de patrulla, alerta ante ruidos extraños, búsqueda activa y captura/pérdida de interés.
* **Expresiones:** Seria, escuchando y alerta.

---

## 5. Diseño de Nivel y Escenario

* **Estructura de la Casa:**
  * **Sala / Comedor:** Área abierta con mesa de mármol, tablero de ajedrez, lámparas colgantes y separadores de madera (*Adler Dark Wood*).
  * **Cocina:** Obstáculos de muebles, vajilla rompible que genera ruido.
  * **Baño:** Espacio cerrado con superficies resbaladizas y ventanas altas.
  * **Habitación de Karmen:** Área de alto riesgo donde se encuentran las jaulas y llaves.
  * **Escalera al segundo piso:** Conexión vertical con corrientes de aire y zonas de vigilancia.
* **Verticalidad:** El juego incentiva a permanecer en las alturas (lámparas, marcos de cuadros, estantes) para no ser visto por Karmen, planificando cada trayecto antes de agotar la estamina.

---

## 6. Mapeo de Controles (Gamepad / Mando)

| Botón / Control | Acción en el Juego |
| :--- | :--- |
| **Stick Izquierdo (L)** | Movimiento terrestre / Dirección de vuelo (Pitch y Yaw) |
| **Stick Derecho (R)** | Control libre de cámara en 3D |
| **Botón A / Cruz** | Saltar / Aletear para ganar altitud (consume estamina) |
| **Gatillo Derecho (R2 / RT)** | Acelerar / Vuelo en picada rápida |
| **Gatillo Izquierdo (L2 / LT)** | Frenar en el aire / Modo planeo sustentado |
| **Botón B / Círculo** | Embestir en picada (para despertar a la Tortuga) |
| **Botón X / Cuadrado** | Interactuar / Recolectar plumas y activar palancas |
| **Botón Y / Triángulo** | Vista rápida / Localizar la posición actual de Karmen |
| **Start / Pause** | Menú de pausa y configuración |

---

## 7. Elementos de Interfaz (HUD)

1. **Barra de Estamina:** Medidor dinámico en arco sobre el ave que disminuye con el aleteo sostenido y titila en rojo al agotarse.
2. **Indicador de Alerta de Karmen:** Ícono de 3 estados (Blanco: Tranquila, Amarillo: Escuchó un ruido, Rojo: Contacto visual y persecución).
3. **Contador de Plumas Doradas:** Indica el progreso de recolección en el nivel.
4. **Retícula sutil de apuntado:** Asiste al jugador al calcular trayectorias de choque hacia la tortuga o repisas angostas.

---

## 8. Recursos y Archivos del Repositorio

* **`Aviando_Presentacion.pptx`**: Presentación completa de diapositivas en formato 16:9 con diseño Cottagecore.
* **`generate-powerpoint.js`**: Script en Node.js que genera la presentación automáticamente con la librería `pptxgenjs`.
* **`generate-custom.js`**: Script generador y pulidor del HTML del Presskit.
* **`cottagecore-theme.css`**: Hoja de estilos con paleta botánica cálida, tipografías Cinzel/Lora/Quicksand y layout responsive.
* **`vercel.json` & `package.json`**: Configuración de despliegue continuo en Vercel apuntando al directorio `build/`.
* **Directorio `images/`**:
  * `logo-aviando.jpg`: Logotipo oficial del videojuego.
  * `logo.png`: Logotipo del estudio (Faestila 011).
  * `favicon.ico` / `favicon.png`: Iconos oficiales generados a partir del ave.
  * `ficha-personajes.jpg`: Bocetos a mano de El Pájaro, La Tortuga y Karmen.
  * `controles-diagrama.png`: Mapeo visual del mando.
  * `s5.png` / `s4.png`: Hojas de concept art con el mapa de la casa, cámaras y villana.
  * `u1.png`, `u2.png`: Renders de interiores de Unity (materiales de madera e iluminación cálida).
  * `u3.jpg`: Captura in-game del pájaro sobre la mesa de ajedrez frente a la pluma de estamina.
