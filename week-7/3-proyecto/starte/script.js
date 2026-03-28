// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================
const DOMAIN_NAME     = "Plataforma Crowdfunding Inmobiliario";
const DOMAIN_PLATFORM_NAME = "INVERSIÓN COLECTIVA REALTY ";
const VALUE_LABEL     = "monto invertido";
const CURRENCY        = "USD";
const MIN_INVESTMENT  = 500;    // inversión mínima por proyecto
const PLATFORM_FEE    = 0.02;   // comisión de la plataforma: 2 %

const campaigns = [
  {
    id: 1,
    name: "Torre Nórdica",
    category: "residencial",
    location: "Bogotá",
    value: 120000,   // meta de financiamiento en USD
    funded: 96000,   // monto ya recaudado
    active: true,
  },
  {
    id: 2,
    name: "Plaza Comercial El Prado",
    category: "comercial",
    location: "Medellín",
    value: 350000,
    funded: 350000,
    active: false,   // ya cerrado (meta alcanzada)
  },
  {
    id: 3,
    name: "Conjunto Reserva Verde",
    category: "residencial",
    location: "Cali",
    value: 85000,
    funded: 42500,
    active: true,
  },
  {
    id: 4,
    name: "Bodega Logística Norte",
    category: "industrial",
    location: "Barranquilla",
    value: 200000,
    funded: 60000,
    active: true,
  },
  {
    id: 5,
    name: "Hotel Boutique Cartagena",
    category: "hotelero",
    location: "Cartagena",
    value: 500000,
    funded: 475000,
    active: true,
  },
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (project) => {
  const pct = ((project.funded / project.value) * 100).toFixed(1);
  const status = project.active ? "🟢 Abierto" : "🔴 Cerrado";
  return `🏢 ${project.name} | ${project.category} — ${project.location} | Financiado: ${pct}% | ${status}`;
}

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (amount, annualRate = 0.12, years = 1) => {
 const net = amount * (1 - PLATFORM_FEE);
 const future = net * Math.pow (1 + annualRate, years);
 return +future.toFixed(2)
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (project) => {
  const remaining = project.value - project.funded;
  return project.active === true && remaining >= MIN_INVESTMENT;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (amount, label = VALUE_LABEL, currency = CURRENCY, showFee = false) => {
  const formatted = `${label}: ${currency} ${amount.toLocaleString("en-US")}`;
  if (showFee) {
    const net = +(amount * (1 - PLATFORM_FEE)).toFixed(2);
    return `${formatted}  (neto tras comisión: ${currency} ${net.toLocaleString("en-US")})`;
  }
  return formatted;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(55)}`);
console.log(`   DOMINIO: ${DOMAIN_NAME.toUpperCase()}`)
console.log(`\n${"═".repeat(55)}`);
console.log(`   REPORTE — ${DOMAIN_PLATFORM_NAME}`);
console.log(`${"═".repeat(55)}`);
 
if (campaigns.length === 0) {
  console.log("\n⚠️  No hay proyectos registrados.");
} else {
 
  console.log("\n📋 Proyectos en plataforma:");
  campaigns.forEach((project, index) => {
    console.log(`  ${index + 1}. ${formatItem(project)}`);
  });
 
  let validCount = 0;
  campaigns.forEach((project) => {
    if (isValid(project)) {
      validCount++;
    }
  });
  console.log(`\n✅ Proyectos disponibles para invertir: ${validCount} / ${campaigns.length}`);
 
  let totalFunded = 0;
  campaigns.forEach((project) => {
    totalFunded += calculateValue(project.funded);
  });
  console.log("\n💰 " + formatWithDefault(totalFunded, "Retorno estimado total (1 año, 12% anual)", CURRENCY, true));
 
  let totalGoal = 0;
  campaigns.forEach((project) => {
    totalGoal += project.value;
  });
  console.log("🎯 " + formatWithDefault(totalGoal, "Meta total de financiamiento"));
}
 
console.log(`\n${"═".repeat(55)}\n`);