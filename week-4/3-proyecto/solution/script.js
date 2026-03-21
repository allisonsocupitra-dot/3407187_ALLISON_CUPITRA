// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 TU DOMINIO: Adapta cada TODO al dominio
//    que te fue asignado por el instructor.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe
//    ser única y coherente con tu dominio.
//    Usa dominios no asignables como referencia
//    conceptual, pero NO copies valores.
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "Plataforma Crowdfunding Inmobiliario";

const DOMAIN_PLATFORM_NAME = "INVERSIÓN COLECTIVA REALTY ";

const itemName1 = "Centro Empresarial Platinum";
const itemName2 = "Villas del Mar - Cartagena";
const itemName3 = "Reserva de Bosque - Etapa 2";


const campaignType1 = "Comercial";
const campaignType2 = "Turístico";
const campaignType3 = "Residencial";

const campaignCode1 = "ICR-001";
const campaignCode2 = "ICR-002";
const campaignCode3 = "ICR-003";


const companyDescription1 = "Bogotá está creciendo hacia arriba, y Centro Empresarial Platinum está justo en esa dirección. \n Un proyecto diseñado para inversionistas que entienden que el tiempo es el activo más valioso.";
const companyDescription2 = "Cartagena no necesita presentación. Sus playas, su historia y su magnetismo la convierten en el \ndestino turístico más deseado de Colombia y uno de los más visitados de América Latina";
const companyDescription3 = "es la segunda fase de un consolidado proyecto inmobiliario de uso residencial, \nubicado en un entorno natural de alto valor paisajístico. Tras el cierre exitoso de la Etapa 1, esta nueva \nfase representa una oportunidad de inversión respaldada por una demanda comprobada y un mercado en crecimiento."

const totalProperty1 = 1_000_000_000;
const totalProperty2 = 30_000_000_000;
const totalProperty3 = 50_000_000_000;

const isGoalReached1 = true;
const isGoalReached2 = false;
const isGoalReached3 = true;

// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = DOMAIN_PLATFORM_NAME.trim();


const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();


const codePrefix1 =  campaignCode1.slice(0, 3);
const codePrefix2 =  campaignCode2.slice(0, 3);

// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix1 = campaignCode1.startsWith(codePrefix1);
const hasValidPrefix2 = campaignCode2.startsWith(codePrefix2);

const descriptionIsRelevant1 = companyDescription1.includes("Inversion");
const descriptionIsRelevant2 = companyDescription2.includes("Colombia");


const hasValidSuffix1 = campaignCode1.endsWith("001");
const hasValidSuffix2 = campaignCode2.endsWith("002");

const isHighGoal1 = totalProperty1 > 10_000_000_000;
const isHighGoal2 = totalProperty2 > 10_000_000_000;
const isTourismCategory1 = campaignType1.toLowerCase().includes("turístico");
const isTourismCategory2 = campaignType2.toLowerCase().includes("turístico");

// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard1 = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ${DOMAIN_PLATFORM_NAME.toUpperCase()}
${separator}
Nombre de la campaña:      ${itemName1}
Categoría de la campaña:   ${campaignType1}
Código:      ${campaignCode1}
Prefijo:     ${codePrefix1}
Valor total de la meta  esperada:       ${totalProperty1}
¿Alcanzó la meta?:      ${isGoalReached1 ? "si" : "no"}

${subSeparator}
Descripción:
${companyDescription1}
${separator}
`;

console.log(mainCard1);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix1}'?: ${hasValidPrefix1}`);
console.log(`¿Descripción contiene 'Inversion'?: ${descriptionIsRelevant1}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix1}`);
console.log(`¿La meta es alta (mayor a 10 mil millones)?: ${isHighGoal1}`);
console.log(`¿La categoría es turística?: ${isTourismCategory1}`);
console.log("");

// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const mainCard2 = `
${separator}
Nombre de la campaña:      ${itemName2}
Categoría de la campaña:   ${campaignType2}
Código:      ${campaignCode2}
Prefijo:     ${codePrefix2}
Valor total de la meta  esperada:       ${totalProperty2}
¿Alcanzó la meta?:      ${isGoalReached2 ? "si" : "no"}

${subSeparator}
Descripción:
${companyDescription2}
${separator}
`;

// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix2}'?: ${hasValidPrefix2}`);
console.log(`¿Descripción contiene 'Colombia'?: ${descriptionIsRelevant2}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix2}`);
console.log(`¿La meta es alta (mayor a 10 mil millones)?: ${isHighGoal2}`);
console.log(`¿La categoría es turística?: ${isTourismCategory2}`);
console.log("");

// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo proyecto disponible: ${itemName3} (${campaignCode3})`;
console.log(notification);
console.log("");

const platform = "Crowdfunding";
console.log(platform.length); 

const empty = "";
console.log(empty.length); // 0

const sentence = "Inversión Inmobiliaria";
console.log(sentence.length);

const word1 = "Apartamentos";
//             012345

console.log(word1[0]); // 'A'
console.log(word1[1]); // 'p'
console.log(word1[2]); // 'a'
console.log(word1[3]); // 'r'
console.log(word1[4]); // 't'
console.log(word1[5]); // 'a'

const word2 = "Inversión";
const lastChar = word2[word2.length - 1];
console.log(lastChar); // 'n'