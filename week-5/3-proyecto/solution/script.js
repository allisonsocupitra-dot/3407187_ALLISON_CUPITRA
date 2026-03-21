// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Proyecto Torres del Lago";   
const elementStatus = "active";                   
const elementValue = 85;                          
const elementType = "Residencial";                
const goalAchieved = false;                        
const totalProperty = 1_000_000_000;
const localInformation = "Melledin, Antioquia"; 
const elementInfo = null;
const projectManager = null; 

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;
if (elementValue >= 70) {
  classification = "Alto";
} else if (elementValue >= 40) {
  classification = "Medio";
} else {
  classification = "Bajo";
}

let projectValue;
if (totalProperty >= 50_000_000_000) {
  projectValue = "alto valor";
} else if (totalProperty >= 20_000_000_000) {
  projectValue = "valor medio";
} else {
  projectValue = "bajo valor";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";
let goalStatus = goalAchieved ? "Objetivo alcanzado" : "Objetivo no alcanzado";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";
switch (elementType) {
   case "Residencial": typeLabel = "Proyecto Residencial";
   break;
   case "Comercial": typeLabel = "Proyecto Comercial"; 
   break;
   case "Turístico": typeLabel = "Proyecto Turístico";
   break;
   default: typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = projectManager ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";
const status = goalAchieved ?? true;

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.localInformation ?? "Ubicación no especificada";
const safeCity = elementInfo?.ciudad ?? "Ciudad no especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("PLATAFORMA CROWFUNDING INMOBILIARIO");
console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("-".repeat(40));
console.log(`Nombre de la campaña: ${elementName}`);
console.log(`Clasificación: ${classification}`);
console.log(`Valor del proyecto: ${projectValue}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Objetivo: ${goalStatus}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ciudad: ${safeCity}`);
console.log(`Información adicional: ${safeProperty}`);
console.log(`Gerente del proyecto: ${displayName}`);
console.log("-".repeat(40));