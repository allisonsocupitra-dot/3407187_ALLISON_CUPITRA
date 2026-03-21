# 🏠 Proyecto Semana 02 - Ficha de Datos del Dominio

## ¿De qué trata este proyecto?

Este script muestra en consola una ficha de datos de mi dominio asignado: **Plataforma de Crowdfunding Inmobiliario** 💰

La idea es practicar el uso de variables, tipos de datos, typeof y conversiones en JavaScript.

---

## 🏢 Mi dominio

Trabajé con una plataforma llamada **INVERSIÓN COLECTIVA REALTY**, que permite a varias personas invertir juntas en proyectos de bienes raíces.

Creé la ficha de dos campañas:

- 🏗️ **Centro Empresarial Platinum** (ICR-001) - Edificio de oficinas, meta: $800.000.000
- 🌊 **Villas del Mar - Cartagena** (ICR-002) - Hotel turístico, meta: $600.000.000

---

## 📋 ¿Qué incluye el script?

- 🔤 Variables con los 4 tipos que pedían: `string`, `number`, `boolean` y `null`
- 🔍 Uso de `typeof` para verificar cada tipo
- 🔄 Conversiones explícitas con `String()` y `Number()`
- 💲 Separadores de miles con `_` en los números grandes (ej: `800_000_000`)
- ❌ El valor `null` para el gestor del proyecto que todavía no está asignado

---

## 📁 Estructura

```
3-proyecto/
├── README.md
└── starter/
    └── script.js
```

---

## 📝 Notas

- ⚠️ El `typeof null` devuelve `"object"` —  es un bug viejo de JavaScript
- 🔢 Usé `.toFixed(2)` para mostrar la rentabilidad de la segunda campaña con 2 decimales
- 🎓 Quise hacer dos porque quería practicar y hacer algo nuevo.
- ✅ Todos los booleanos tienen prefijo `is` como pedían (ej: `isGoalReached`)