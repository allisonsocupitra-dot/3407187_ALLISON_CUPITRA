# 📁 Semana 07 — Librería de Funciones Reutilizables
 
> 🎯 **Único entregable obligatorio** para aprobar la semana.
 
---
 
## 📂 Estructura del proyecto
 
```
week-7/
└── 3-proyecto/
    └── starter/
        ├── script.js   ← Código principal con las 6 secciones
        └── README.md   ← Este archivo
```
 
---
 
## 🏢 Dominio asignado
 
**Plataforma de Crowdfunding Inmobiliario — INVERSIÓN COLECTIVA REALTY**
 
El script modela una plataforma donde inversores pueden financiar proyectos
inmobiliarios de forma colectiva. Cada proyecto tiene una meta de
financiamiento, un monto ya recaudado y un estado (abierto o cerrado).
 
---
 
## 🎯 Objetivo
 
Construir una **librería de funciones reutilizables** aplicada al dominio
asignado. Cada función:
 
- Está bien nombrada y describe su propósito
- Recibe información por parámetros
- Devuelve un valor con `return`
- Está separada del código que produce efectos (`console.log`)
 
---
 
## ✅ Secciones implementadas
 
### Sección 1 — Datos del dominio 🗂️
 
Define las constantes globales y el array `campaigns` con 5 proyectos
inmobiliarios reales del dominio.
 
| Constante | Valor | Descripción |
|---|---|---|
| `CURRENCY` | `"USD"` | Moneda de la plataforma |
| `MIN_INVESTMENT` | `500` | Inversión mínima por proyecto |
| `PLATFORM_FEE` | `0.02` | Comisión del 2% de la plataforma |
 
Cada proyecto tiene: `id`, `name`, `category`, `location`, `value` (meta),
`funded` (recaudado) y `active`.
 
---
 
### Sección 2 — Función de formato 🖨️
 
```js
const formatItem = (project) => { ... }
```
 
Arrow function que recibe un proyecto y devuelve un string formateado con:
- Nombre del proyecto
- Categoría y ciudad
- Porcentaje financiado (calculado internamente)
- Estado 🟢 Abierto / 🔴 Cerrado
 
---
 
### Sección 3 — Función de cálculo (pura) 🧮
 
```js
const calculateValue = (amount, annualRate = 0.12, years = 1) => { ... }
```
 
Función **pura**: mismo input siempre produce el mismo output.
Calcula el **retorno estimado** de una inversión usando interés compuesto
y descuenta la comisión de la plataforma.
 
- `amount` — monto invertido en USD
- `annualRate` — tasa anual (por defecto 12%)
- `years` — plazo en años (por defecto 1)
 
---
 
### Sección 4 — Función de validación ✔️
 
```js
const isValid = (project) => { ... }
```
 
Recibe un proyecto y devuelve `true` o `false` según dos reglas del dominio:
 
1. El proyecto debe estar **activo**
2. El monto pendiente debe ser **mayor o igual** al mínimo de inversión
 
---
 
### Sección 5 — Función con parámetro por defecto 💱
 
```js
const formatWithDefault = (amount, label = VALUE_LABEL, currency = CURRENCY, showFee = false) => { ... }
```
 
Formatea un monto monetario con etiqueta y moneda personalizables.
Usa **4 parámetros con valor por defecto** significativos para el dominio.
Si `showFee` es `true`, muestra también el valor neto tras descontar la comisión.
 
---
 
### Sección 6 — Reporte usando callbacks 📋
 
Genera el reporte final usando `forEach` para recorrer los datos.
Las funciones de las secciones anteriores se pasan **como callbacks**:
 
| Callback usado | Propósito |
|---|---|
| `formatItem` | Mostrar cada proyecto en el listado |
| `isValid` | Contar proyectos disponibles para invertir |
| `calculateValue` | Acumular el retorno estimado total |
| `formatWithDefault` | Mostrar el resumen con formato de moneda |
 
---
 
## 📊 Criterios de evaluación
 
| Criterio | Pts | Estado |
|---|---|---|
| Script ejecuta sin errores | 20 | ✅ |
| Al menos 3 funciones declaradas | 15 | ✅ (4 funciones) |
| Todas usan `return` correctamente | 15 | ✅ |
| Al menos 2 arrow functions | 15 | ✅ (todas son arrow functions) |
| Al menos 1 parámetro por defecto | 10 | ✅ (4 parámetros con defecto) |
| Al menos 1 función usada como callback | 15 | ✅ (4 callbacks en forEach) |
| Dominio coherente + clean code | 10 | ✅ |
| **Total** | **100** | ✅ |
 
---
 
## ▶️ Cómo ejecutar
 
```bash
node script.js
```
 
No requiere instalación de dependencias externas.
 
---
 
## 👨‍💻 Autor
 
Estudiante — Semana 07 · Bootcamp JavaScript