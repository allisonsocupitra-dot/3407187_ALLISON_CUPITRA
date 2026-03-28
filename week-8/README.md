# 📦 Semana 08 — Gestión de Inventario con Arrays
 
> 🎯 **Único entregable obligatorio** para aprobar la semana.
 
---
 
## 📂 Estructura del proyecto
 
```
week-8/
└── 3-proyecto/
    └── starter/
        ├── script.js   ← Código principal con las 6 secciones
        └── README.md   ← Este archivo
```
 
---
 
## 🏢 Dominio asignado
 
**Plataforma de Crowdfunding Inmobiliario — INVERSIÓN COLECTIVA REALTY**
 
El script modela el inventario de una plataforma donde inversores pueden
financiar proyectos inmobiliarios de forma colectiva. Cada campaña tiene
una meta de financiamiento, un monto ya recaudado y un estado (activo o cerrado).
 
---
 
## 🎯 Objetivo
 
Aplicar todos los métodos de arrays vistos en la semana para construir
un script de **gestión de inventario** adaptado al dominio asignado.
 
---
 
## ✅ Requisitos Funcionales implementados
 
### 1. Estructura de datos 🗂️
 
Array `campaings` con **5 proyectos inmobiliarios**. Cada objeto tiene:
 
| Propiedad | Tipo | Descripción |
|---|---|---|
| `id` | número | Identificador único |
| `name` | string | Nombre del proyecto |
| `category` | string | Tipo de proyecto (residencial, comercial…) |
| `location` | string | Ciudad del proyecto |
| `value` | número | Meta de financiamiento en USD |
| `funded` | número | Monto ya recaudado en USD |
| `active` | booleano | Si el proyecto acepta inversiones |
 
---
 
### 2. Métodos de mutación 🔧 (4 usados)
 
| Método | Función en el código | Qué hace |
|---|---|---|
| `push` | `addCampaings()` | Agrega un nuevo proyecto al final |
| `pop` | `removeLastCampaings()` | Elimina el último proyecto |
| `unshift` | `addPriorityCampaings()` | Agrega un proyecto urgente al inicio |
| `splice` | `removeByIndex()` | Elimina un proyecto por su posición |
 
---
 
### 3. Métodos de búsqueda 🔍 (2 usados)
 
| Método | Función en el código | Qué hace |
|---|---|---|
| `find` | `findByName()` | Busca un proyecto por nombre exacto |
| `filter` | `getActiveCampaings()` | Retorna solo los proyectos activos |
 
---
 
### 4. Métodos de iteración 🔁 (2 usados)
 
| Método | Dónde | Qué hace |
|---|---|---|
| `forEach` | Listado y reporte | Recorre e imprime cada proyecto formateado |
| `map` | Transformación | Extrae nombres y calcula montos pendientes |
 
---
 
### 5. Spread operator 📸
 
```js
const snapshot = [...campaings, { id: 99, name: "Proyecto Test", ... }];
```
 
Crea una copia del array con un elemento extra **sin modificar** el array original.
Se verifica que `campaings.length` no cambia después de crear el snapshot.
 
---
 
### 6. Reporte final con `console.log` 📋
 
El reporte muestra en orden:
 
1. Estado inicial del inventario (5 proyectos)
2. Cambios realizados con los métodos de mutación
3. Inventario actualizado después de las mutaciones
4. Resultado de búsqueda con `find`
5. Conteo de proyectos activos con `filter`
6. Demostración del spread operator
7. Transformaciones con `map`
8. Resumen final con totales
 
---
 
## 📊 Criterios de evaluación
 
| Criterio | Pts | Estado |
|---|---|---|
| Script ejecuta sin errores | 10 | ✅ |
| Mínimo 5 objetos con propiedades correctas | 5 | ✅ (5 proyectos, 7 propiedades c/u) |
| Demuestra ≥ 4 métodos de mutación | 10 | ✅ (`push`, `pop`, `unshift`, `splice`) |
| Demuestra ≥ 2 métodos de búsqueda/filtrado | 5 | ✅ (`find`, `filter`) |
| Demuestra `map` para transformar datos | 5 | ✅ (nombres + montos pendientes) |
| Spread operator usado correctamente | 5 | ✅ (snapshot inmutable) |
| Reporte final claro y bien etiquetado | 5 | ✅ |
| Código coherente con el dominio asignado | 10 | ✅ |
| Nombres descriptivos, formato correcto | 5 | ✅ |
| **Total** | **60** | ✅ |
 
---
 
## 🚀 Cómo ejecutar
 
```bash
# Desde la carpeta week-8/3-proyecto
node starter/script.js
```
 
No requiere instalación de dependencias externas.
 
---
 
## 👨‍💻 Autor
 
Estudiante — Semana 08 · Bootcamp JavaScript