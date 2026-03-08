// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: Reemplaza cada TODO con datos
//    coherentes con el dominio que te fue asignado.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio asignado.
//    Implementaciones copiadas serán detectadas.
//
// Adapta cada TODO al contexto de tu dominio asignado.
// Los ejemplos en este archivo usan dominios NO asignables.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================
const DOMAIN_NAME = "Plataforma Crowdfunding Inmobiliario";

const DOMAIN_PLATFORM_NAME = "INVERSIÓN COLECTIVA REALTY ";

const itemName1 = "Centro Empresarial Platinum";
const itemName2 = "Villas del Mar - Cartagena";

const campaignCode1 = "ICR-001";
const campaignCode2 = "ICR-002";

const totalInvestors1 = 2000; 
const totalInvestors2 = 1500;

const averageInvestment1 = 500_000; 
const averageInvestment2 = 400_000;

const minInvestment1 = 200_000;
const minInvestment2 = 150_000;

const itemCategory1 = "Oficinas - Uso comercial";
const itemCategory2 = "Hoteles - Uso turístico";

const itemQuantity1 = 800_000_000; 
const itemQuantity2 = 600_000_000; 

const isGoalReached1 = true;
const isGoalReached2 = false;

const projectManager1 = null; 
const projectManager2 = null; 


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("");
console.log("===========================");
console.log(`MI DOMINIO: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log("===========================");
console.log(`FICHA DE CAMPAÑAS: ${DOMAIN_PLATFORM_NAME}`);
console.log("===========================");
console.log("");
console.log("");

console.log("===========================");
console.log(`DATOS DE LA CAMPAÑA: ${itemName1}`);
console.log("===========================");
console.log("");
console.log("");


console.log(`Nombre de la Campaña:    ${itemName1}`);
console.log(`Código de la Campaña:    ${campaignCode1}`);
console.log(`Categoría de la Campaña: ${itemCategory1}`);
console.log('Inversionistas:', totalInvestors1);
console.log(`Meta de Recaudo:     `, itemQuantity1);
console.log(`Aporte Promedio:      `, averageInvestment1);
console.log(`Aporte Mínimo:      `, minInvestment1);
console.log('Rentabilidad Esperada', averageInvestment1 * 0.145);
console.log(`Total a recibir: `, averageInvestment1 + 72500); 
console.log(`Meta Alcanzada: ${isGoalReached1}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log(`--- Tipos de datos de ${itemName1} ---`);
console.log("");

console.log("typeof itemName:      ", typeof itemName1);
console.log("typeof itemCategory:  ", typeof itemCategory1);
console.log("typeof itemQuantity:  ", typeof itemQuantity1);
console.log("typeof isGoalReached: ", typeof isGoalReached1);
console.log("typeof minInvestment: ", typeof minInvestment1);
console.log("typeof projectManager:", typeof projectManager1);
console.log("");

// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");
console.log("");

const goalAsText = String(itemQuantity1);
console.log("Meta como texto:           ", goalAsText);
console.log("typeof (convertido):       ", typeof goalAsText);

// Convertimos el boolean a número (1 = alcanzada, 0 = no alcanzada)
const goalAsNumber = Number(isGoalReached1);
console.log("Meta alcanzada como número:", goalAsNumber);
console.log("typeof (convertido):       ", typeof goalAsNumber);

const goalText = String(totalInvestors1);
console.log("¿Cuantos inversionistas hay?:        ", goalText);
console.log("typeof (convertido):       ", typeof goalText);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Gestor del proyecto:", projectManager1);
console.log("typeof null:        ", typeof projectManager1);   // "object" ← bug histórico de JS
console.log("¿Es null?:          ", projectManager1 === null);  
console.log("");
console.log("");

console.log("===========================");
console.log(`DATOS DE LA CAMPAÑA: ${itemName2}`);
console.log("===========================");
console.log("");
console.log("");

console.log(`Nombre de la Campaña:    ${itemName2}`);
console.log(`Código de la Campaña:    ${campaignCode2}`);
console.log(`Categoría de la Campaña: ${itemCategory2}`);
console.log('Inversionistas:', totalInvestors2);
console.log(`Meta de Recaudo:     `, itemQuantity2);
console.log(`Aporte Promedio:      `, averageInvestment2);
console.log(`Aporte Mínimo:      `, minInvestment2);
// El .toFixed(2) limita el resultado a 2 decimales
console.log('Rentabilidad Esperada', (averageInvestment2 * 0.145).toFixed(2));
console.log(`Total a recibir: `, averageInvestment2 + 58000); 
console.log(`Meta Alcanzada: ${isGoalReached2}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log(`--- Tipos de datos de ${itemName1} ---`);
console.log("");

console.log("typeof itemName:      ", typeof itemName2);
console.log("typeof itemCategory:  ", typeof itemCategory2);
console.log("typeof itemQuantity:  ", typeof itemQuantity2);
console.log("typeof isGoalReached: ", typeof isGoalReached2);
console.log("typeof projectManager:", typeof projectManager2);
console.log("");

// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");
console.log("");

const goalAsText2 = String(itemQuantity2);
console.log("Meta como texto:           ", goalAsText2);
console.log("typeof (convertido):       ", typeof goalAsText2);

// Convertimos el boolean a número (1 = alcanzada, 0 = no alcanzada)
const goalAsNumber2 = Number(isGoalReached2);
console.log("Meta alcanzada como número:", goalAsNumber2);
console.log("typeof (convertido):       ", typeof goalAsNumber2);

const goalText2 = String(totalInvestors2);
console.log("¿Cuantos inversionistas hay?:        ", goalText2);
console.log("typeof (convertido):       ", typeof goalText2);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Gestor del proyecto:", projectManager2);
console.log("typeof null:        ", typeof projectManager2);    // "object" ← bug histórico de JS
console.log("¿Es null?:          ", projectManager2 === null);  
console.log("");
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("¡Tu dinero construye el futuro, un ladrillo a la vez!");
console.log("===========================");