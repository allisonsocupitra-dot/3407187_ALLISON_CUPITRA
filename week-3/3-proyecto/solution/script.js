// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================


console.log("");
console.log("=== PLATAFORMA CROWDFUNDING INMOBILIARIO === || === CALCULOS DE INVERSIÓN COLECTIVA REALTY ===");
console.log("");

console.log("=== CAMPAÑAS ===");
console.log("");
const campaign1 = "Centro Empresarial Platinum";
const totalProperty1 = 1_000_000_000;
const campaign2 = "Villas del Mar - Cartagena";
const totalProperty2 = 30_000_000_000;
console.log("");
console.log("Campaña 1:", campaign1);
console.log("Valor total de la meta  esperada:", totalProperty1);
console.log("Campaña 2:", campaign2);
console.log("Valor total de la meta  esperada:", totalProperty2);
console.log("");

console.log("=== INVERSIONISTAS ===");
console.log("");
const investors1 = "Andres Zapato";
const investors2 = "Maria Perez";
console.log("Inversionista Andres Zapato:", investors1);
console.log("Inversionista Maria Perez:", investors2);
console.log("");

console.log("=== APORTE ===");
console.log("");
const contribution1 = 100_000_000;
const contribution2 = 200_000_000;
console.log("Aporte Andres Zapato:", contribution1);
console.log("Aporte Maria Perez:", contribution2);
console.log("");

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================

console.log("=== PORCENTAJE DE PARTICIPACIÓN ===");
console.log("");
const percentage1 = (contribution1 / totalProperty1) * 100;
const percentage2 = (contribution2 / totalProperty2) * 100;

console.log("Porcentaje de participación Andres Zapato:", percentage1.toFixed(0) + "%");
console.log("Porcentaje de participación Maria Perez:", percentage2.toFixed(0) + "%");
console.log("");

console.log("=== ARRIENDO MENSUAL NETO ===");
console.log("");
const totalMonthlyRent = 6_000_000;
const netMonthlyRent1 = (totalMonthlyRent * percentage1) / 100;
const netMonthlyRent2 = (totalMonthlyRent * percentage2) / 100;
console.log("Arriendo mensual neto Andres Zapato:", netMonthlyRent1.toFixed(0));
console.log("Arriendo mensual neto Maria Perez:", netMonthlyRent2.toFixed(0));
console.log("");

//===========================================================
//SECCION 3: Asignacion compuesta
//===========================================================

console.log("=== GANANCIAS SI VENDEN EN 1.200M ===");
console.log("");

console.log("Ganancias de Andres:");
console.log("")
let revenueAndres = 0;
let monthlyRent1 = 300_000;
revenueAndres += monthlyRent1 * 12 * 5;
console.log("Por arriendos 5 años:", revenueAndres); 
revenueAndres += 20_000_000;
console.log("Con ganancia por venta:", revenueAndres);
revenueAndres += 50_000_000;
console.log("Total recibido:", revenueAndres); 
let profitability = ((revenueAndres - 50_000_000) / 50_000_000) * 100;
console.log("Rentabilidad total (%):", profitability + "%"); 
console.log("");

console.log("Ganancias de Maria:");
console.log("");
let revenueMaria = 0;
let monthlyRent2 = 600_000;
revenueMaria += monthlyRent2 * 12 * 5;
console.log("Por arriendos 5 años:", revenueMaria); 
revenueMaria += 40_000_000;
console.log("Con ganancia por venta:", revenueMaria);
revenueMaria += 100_000_000;
console.log("Total recibido:", revenueMaria);
profitability = ((revenueMaria - 100_000_000) / 100_000_000) * 100;
console.log("Rentabilidad total (%):", profitability + "%");
console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================

console.log("VALIDACION DEL INVERSIONISTA ANDRES");
console.log("");
const totalCollected1 = 100_000_000;
const metaProject1 = 1_000_000_000;
let daysMora1 = 3;
const isReady1 = totalCollected1 === metaProject1;
const latePayments1 = daysMora1 > 0;
console.log("¿El proyecto está 100% financiado?", isReady1);
console.log("¿Hay pagos atrasados?", latePayments1);
console.log("");


console.log("VALIDACION DEL INVERSIONISTA MARIA");
console.log("");
const totalCollected2 = 500_000_000;
const metaProject2 = 1_000_000_000;
let daysMora2 = 0;
const isReady2 = totalCollected2 === metaProject2;
const latePayments2 = daysMora2 > 0;
console.log("¿El proyecto está 100% financiado?", isReady2);
console.log("¿Hay pagos atrasados?", latePayments2);
console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== VALIDACION PARA PODER INVERTIR ===");
console.log("");

console.log("Inversionista Andres Zapato:");
console.log("");
const activeInvestor1 = true;
const minimumAmount1 = 5_000_000;
const maximumAmount1 = 500_000_000;
const canInvest1 = activeInvestor1 && contribution1 >= minimumAmount1 && contribution1 <= maximumAmount1 && !latePayments1;
console.log("¿Puede invertir?", canInvest1);
console.log("");

console.log("Inversionista Maria Perez:");
console.log("");
const activeInvestor2 = true;
const minimumAmount2 = 5_000_000;
const maximumAmount2 = 500_000_000;
const canInvest2 = activeInvestor2 && contribution2 >= minimumAmount2 && contribution2 <= maximumAmount2 && !latePayments2;
console.log("¿Puede invertir?", canInvest2);
console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");
console.log("");
console.log("Nombre del proyecto:", campaign1);
console.log("Valor total de la meta esperada:", totalProperty1);
console.log("Inversionista:", investors1);
console.log("Aporte realizado:", contribution1);
console.log("Porcentaje de participación:", percentage1.toFixed(0) + "%");
console.log("Arriendo mensual neto:", netMonthlyRent1.toFixed(0));
console.log("Ganancias totales estimadas:", revenueAndres.toFixed(0));
console.log("Rentabilidad total (%):", profitability.toFixed(2) + "%");
console.log("¿Puede invertir?", canInvest1);
console.log("");

console.log("Nombre del proyecto:", campaign2);
console.log("Valor total de la meta esperada:", totalProperty2);
console.log("Inversionista:", investors2);
console.log("Aporte realizado:", contribution2);
console.log("Porcentaje de participación:", percentage2.toFixed(0) + "%");
console.log("Arriendo mensual neto:", netMonthlyRent2.toFixed(0));
console.log("Ganancias totales estimadas:", revenueMaria.toFixed(0));
console.log("Rentabilidad total (%):", profitability.toFixed(2) + "%");
console.log("¿Puede invertir?", canInvest2);
console.log("");
