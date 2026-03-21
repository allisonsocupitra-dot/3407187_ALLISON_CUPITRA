
Copiar

# 📊 Proyecto Semana 06: Reporte con Bucles
 
Este es mi proyecto de la semana 06. Esta vez tocaba hacer un **reporte completo usando bucles** con `for...of` y `for` clásico, aplicado a mi dominio de **Crowdfunding Inmobiliario** 🏢.
 
---
 
## 🤔 ¿De qué trata?
 
Hice un script que genera un reporte de campañas de inversión inmobiliaria. Lista todas las campañas, las cuenta por categoría, calcula el promedio de financiación y al final indica cuáles están sobre o bajo ese promedio 📈.
 
Las campañas que usé fueron:
- 🏙️ **Centro Empresarial Platinum** – Comercial (100%)
- 🌊 **Villas del Mar - Cartagena** – Turístico (62%)
- 🌿 **Reserva de Bosque - Etapa 2** – Residencial (100%)
- 🏗️ **Torres del Lago** – Residencial (85%)
- 🏭 **Plaza Logística del Norte** – Comercial (45%)
- 🏖️ **Bahía Esmeralda - Etapa 1** – Turístico (30%)
 
---
 
## ⚙️ ¿Qué hice en cada sección?
 
1. **Datos del dominio** → definí un array con 6 campañas, cada una con nombre, categoría y porcentaje de financiación
2. **Listar con `for...of`** → recorro el array e imprimo cada campaña con su info básica
3. **Contar por categoría** → uso un `for...of` anidado para contar cuántas campañas hay por categoría
4. **Totales y promedio** → acumulo con `+=` y calculo el promedio dividiendo entre el total de campañas
5. **Máximo y mínimo** → recorro el array comparando valores para encontrar la campaña más y menos financiada
6. **Reporte con `for` clásico** → genero un reporte numerado usando el índice `i`, con un ternario encadenado para comparar contra el promedio
 
---
 
## 📂 Archivos
 
```
3-proyecto/
├── README.md        ← este archivo
├── starter/
│   └── script.js   ← mi código

```
 
---
 
## 🚀 Cómo correrlo
 
```bash
node starter/script.js
```
 
---
 
## 💡 Lo que aprendí
 
- Que los bucles anidados sirven para contar elementos por categoría sin mucho drama 😅
- A usar un acumulador con `+=` para ir sumando y luego calcular el promedio
- Que `items[0] ?? null` es la forma correcta de inicializar el máximo y mínimo
- Que el ternario encadenado (`? : ? :`) permite manejar 3 casos en una sola línea 👀
- Que el `for` clásico es útil cuando necesito el índice para numerar el reporte