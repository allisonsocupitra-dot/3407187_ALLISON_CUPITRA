# 🗂️ Proyecto Semana 05: Clasificador
 
Este es mi proyecto de la semana 05. Esta vez tocaba hacer un **clasificador** usando condicionales: `if/else`, operador ternario, `switch`, nullish coalescing `??` y optional chaining `?.`. El dominio sigue siendo **Crowdfunding Inmobiliario** 🏢.
 
---
 
## 🤔 ¿De qué trata?
 
Hice un script que clasifica un proyecto inmobiliario según su valor, estado y tipo. Al final muestra una ficha en consola con toda la info organizada. Lo más nuevo esta semana fue lo de `??` y `?.` que no los había usado antes 😅.
 
El proyecto que usé fue:
- 🏗️ **Torres del Lago** – Residencial, Melledin, Antioquia
 
---
 
## ⚙️ ¿Qué usé esta semana?
 
- 🔀 `if / else if / else` → para clasificar el proyecto según su valor numérico (Alto / Medio / Bajo)
- ❓ Operador ternario `? :` → para determinar si el proyecto está activo o inactivo, y si alcanzó la meta
- 🔄 `switch` → para clasificar el tipo de proyecto (Residencial, Comercial, Turístico)
- 🛡️ `??` nullish coalescing → para poner valores por defecto cuando algo es `null` o `undefined`
- 🔍 `?.` optional chaining → para acceder a propiedades de objetos que pueden no existir sin que explote el código 💥
 
---
 
## 📂 Archivos
 
```
5-proyecto/
├── README.md        ← este archivo
├── starter/
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
 
- Que `??` es diferente a `||`, porque `??` solo actúa cuando el valor es `null` o `undefined`, no con `false` o `0` 👀
- Que `?.` te salva la vida cuando intentas acceder a propiedades de algo que puede ser `null`
- A usar `switch` de forma limpia con `break` en cada caso
- Que el operador ternario es útil para cosas simples pero si se complica mucho mejor usar `if/else` 😂