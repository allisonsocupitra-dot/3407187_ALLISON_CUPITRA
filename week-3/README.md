# 📁 Proyecto Semana 03: Calculadora de Dominio
 
Este es mi proyecto de la semana 03 del curso. La idea es hacer una calculadora usando JavaScript aplicada a un dominio específico. A mi me tocó el dominio de **Crowdfunding Inmobiliario** (básicamente una plataforma donde varias personas invierten juntas en propiedades 🏢).
 
---
 
## 🤔 ¿De qué trata?
 
Hice una calculadora que simula cómo funcionaría una plataforma donde los inversionistas ponen plata en proyectos inmobiliarios. Con el código puedo calcular cuánto porcentaje le toca a cada uno, cuánto gana de arriendo y si puede o no invertir según unas condiciones.
 
Las campañas que usé fueron:
- 🏙️ **Centro Empresarial Platinum** – meta de $1.000.000.000
- 🌊 **Villas del Mar - Cartagena** – meta de $30.000.000.000
 
---
 
## ⚙️ ¿Qué operadores usé?
 
- ➕ Aritméticos (`+`, `-`, `*`, `/`) → para calcular porcentajes y arriendos
- 📦 Asignación compuesta (`+=`) → para ir acumulando las ganancias poco a poco
- 🔍 Comparación estricta (`===`) → para validar si el proyecto ya está financiado
- 🧠 Lógicos (`&&`, `!`) → para verificar si el inversionista puede invertir o no
 
---
 
## 📂 Archivos
 
```
week-3
├── README.md        ← este archivo
├── 3-proyecto/
└──  starter/
│   └── script.js   ← mi código
└── solution/
    └── script.js   ← el del profe (no lo copié jaja)
```
 
---
 
## 🚀 Cómo correrlo
 
```bash
node starter/script.js
```
 
---
 
## 💡 Lo que aprendí
 
- A usar `===` en vez de `==` (casi siempre me equivocaba con eso 😅)
- A usar `+=` para acumular valores sin repetir código
- A organizar el código en secciones con `console.log()` para que se entienda bien la salida
- A usar `1_000_000` para que los números grandes sean más fáciles de leer 👀