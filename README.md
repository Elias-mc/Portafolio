# 🧑‍💻 Elias.dev — Portafolio Personal

<div align="center">

![Portfolio Preview](./assets/preview.png)

**Portafolio web personal construido con React + Vite + Tailwind CSS**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-✉-orange?style=for-the-badge)](https://www.emailjs.com)

[Ver en vivo](https://elias-mc.github.io/Portafolio) · [Reportar un bug](https://github.com/Elias-mc/Portafolio/issues) · [LinkedIn](https://www.linkedin.com/in/elias-macay-b02753386/)

</div>

---

## 📋 Tabla de contenidos

- [🧑‍💻 Elias.dev — Portafolio Personal](#-eliasdev--portafolio-personal)
  - [📋 Tabla de contenidos](#-tabla-de-contenidos)
  - [🚀 Sobre el proyecto](#-sobre-el-proyecto)
  - [✨ Características](#-características)
  - [🛠 Tech Stack](#-tech-stack)
  - [📁 Estructura del proyecto](#-estructura-del-proyecto)
  - [🏁 Primeros pasos](#-primeros-pasos)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
  - [🔑 Variables de entorno](#-variables-de-entorno)
  - [📜 Scripts disponibles](#-scripts-disponibles)
  - [📬 Contacto](#-contacto)

---

## 🚀 Sobre el proyecto

Portafolio personal diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador frontend. El sitio combina una estética moderna con animaciones fluidas, un formulario de contacto funcional y diseño completamente responsive para mobile y desktop.

---

## ✨ Características

- **Diseño responsive** — adaptado para mobile, tablet y desktop con navegación hamburguesa en pantallas chicas
- **Animaciones de entrada** — cada sección se anima al entrar al viewport usando `IntersectionObserver`
- **Code Rain** — efecto visual de lluvia de código estilo Matrix, activable/desactivable
- **Carrusel de habilidades** — scroll automático con efecto fade en los bordes
- **Formulario de contacto animado** — con estados de carga, éxito y error, powered by EmailJS
- **Foto flotante** — animación CSS de flotación suave en la sección hero
- **Modal de contacto** — overlay con animaciones escalonadas de entrada

---

## 🛠 Tech Stack

| Tecnología | Uso |
|-----------|-----|
| **React 18** | UI y manejo de estado |
| **Vite** | Build tool y dev server |
| **Tailwind CSS 3** | Estilos y diseño responsive |
| **EmailJS** | Envío de emails desde el frontend sin backend |
| **CSS Animations** | Animaciones personalizadas con `@keyframes` |

---

## 📁 Estructura del proyecto

```
Portafolio/
├── public/
│   ├── perfil.jpg          # Foto de perfil
│   └── mapa.png            # Imagen del mapa en el footer
├── src/
│   ├── App.jsx             # Componente principal
│   ├── CodeRain.jsx        # Efecto Matrix
│   ├── Contacto.jsx        # Formulario de contacto con EmailJS
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🏁 Primeros pasos

### Prerrequisitos

- Node.js `>= 18`
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Elias-mc/Portafolio.git

# 2. Entrar al directorio
cd Portafolio

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🔑 Variables de entorno

El formulario de contacto usa **EmailJS**. Para configurarlo, reemplazá las siguientes constantes en `src/Contacto.jsx`:

```js
emailjs.sendForm(
  "TU_SERVICE_ID",    // ID del servicio en EmailJS
  "TU_TEMPLATE_ID",   // ID del template
  form.current,
  "TU_PUBLIC_KEY"     // Clave pública de tu cuenta
)
```

Podés obtener estas claves en [emailjs.com](https://www.emailjs.com) de forma gratuita.

---

## 📜 Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción en /dist
npm run preview   # Preview del build de producción
```

---

## 📬 Contacto

**Elias Macay**

- 🌐 Portfolio: [elias-mc.github.io/Portafolio](https://elias-mc.github.io/Portafolio)
- 💼 LinkedIn: [linkedin.com/in/elias-macay-b02753386](https://www.linkedin.com/in/elias-macay-b02753386/)
- 🐙 GitHub: [@Elias-mc](https://github.com/Elias-mc)
- 📧 Email: macayzamora1234@gmail.com
- 📍 Buenos Aires, Argentina

---

<div align="center">

Hecho con ❤️ por [Elias Macay](https://github.com/Elias-mc) — 2026

</div>