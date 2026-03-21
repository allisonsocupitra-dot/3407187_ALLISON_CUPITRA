# 📝 Proyecto Semana 04: Generador de Mensajes de Dominio
 
Este es mi proyecto de la semana 04 del curso. Esta vez tocaba hacer un **generador de mensajes** en consola usando métodos de string y template literals. El dominio sigue siendo el mismo de siempre, **Crowdfunding Inmobiliario** 🏢.
 
---
 
## 🤔 ¿De qué trata?
 
Básicamente hice un script que genera fichas de campañas de inversión inmobiliaria y las muestra en consola. Lo más importante era usar template literals en vez de concatenar con `+` (eso me costó un poco al principio 😅).
 
Las campañas que usé fueron:
- 🏙️ **Centro Empresarial Platinum** (`ICR-001`)
- 🌊 **Villas del Mar - Cartagena** (`ICR-002`)
- 🌿 **Reserva de Bosque - Etapa 2** (`ICR-003`)
 
---
 
## ⚙️ Métodos de string que usé
 
- 🔠 `toUpperCase()` / `toLowerCase()` → para poner nombres en mayús o minús según tocara
- ✂️ `trim()` → para quitar espacios del nombre de la plataforma
- 🔍 `includes()`, `startsWith()`, `endsWith()` → para validar códigos y descripciones
- 🔪 `slice()` → para sacar el prefijo del código de cada campaña
- 🔁 `repeat()` → para hacer los separadores de `=====` fácil y rápido
 
---
 
## 📂 Archivos
 
```
4-proyecto/
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
 
- Que los template literals con backticks hacen la vida mucho más fácil que andar concatenando 😂
- Que `trim()` es útil cuando los strings tienen espacios de más
- A validar strings con `startsWith` y `endsWith` en vez de hacerlo a mano
- Que `repeat()` es perfecto para hacer separadores sin repetir código 👀