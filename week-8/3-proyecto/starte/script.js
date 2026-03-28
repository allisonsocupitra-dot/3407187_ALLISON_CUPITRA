// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

"use strict";
 
const DOMAIN_NAME     = "Plataforma Crowdfunding Inmobiliario";
const DOMAIN_PLATFORM_NAME = "INVERSIÓN COLECTIVA REALTY ";
const VALUE_LABEL = "proyectos";
 
// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================
 
const campaigns = [
  { id: 1, name: "Torre Nórdica",             category: "residencial", location: "Bogotá",       value: 120000, funded: 96000,  active: true  },
  { id: 2, name: "Plaza Comercial El Prado",  category: "comercial",   location: "Medellín",     value: 350000, funded: 350000, active: false },
  { id: 3, name: "Conjunto Reserva Verde",    category: "residencial", location: "Cali",         value: 85000,  funded: 42500,  active: true  },
  { id: 4, name: "Bodega Logística Norte",    category: "industrial",  location: "Barranquilla", value: 200000, funded: 60000,  active: true  },
  { id: 5, name: "Hotel Boutique Cartagena",  category: "hotelero",    location: "Cartagena",    value: 500000, funded: 475000, active: true  },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addCampaigns = (newCampaigns) => {
  campaigns.push(newCampaigns);
  console.log(`✅ Agregado: ${newCampaigns.name}`);
};

const removeLastCampaigns = () => {
  const removed = campaigns.pop();
  console.log(`🗑️  Eliminado (último): ${removed.name}`);
  return removed;
};

const addPriorityCampaigns = (priorityCampaigns) => {
  campaigns.unshift(priorityCampaigns);
  console.log(`⭐ Proyecto prioritario agregado: ${priorityCampaigns.name}`);
};

const removeByIndex = (index) => {
  const removed = campaigns.splice(index, 1)[0];
  console.log(`🗑️  Eliminado (índice ${index}): ${removed.name}`);
};

const getActiveCampaigns = () => {
  return campaigns.filter((project) => project.active === true);
};

const findByName = (name) => {
  return campaigns.find((project) => project.name === name);
};

const formatCampaigns = (campaigns) => {
  const pct    = ((campaigns.funded / campaigns.value) * 100).toFixed(1);
  const status = campaigns.active ? "🟢 Abierto" : "🔴 Cerrado";
  return `[${campaigns.id}] ${campaigns.name} | ${campaigns.category} — ${campaigns.location} | Financiado: ${pct}% | ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"═".repeat(55)}`);
console.log(`   DOMINIO: ${DOMAIN_NAME.toUpperCase()}`)
console.log(`\n${"═".repeat(55)}`);
console.log(`   REPORTE — ${DOMAIN_PLATFORM_NAME}`);
console.log(`${"═".repeat(55)}`);

console.log(`📋 Inventario inicial (${campaigns.length} ${VALUE_LABEL}):`);
campaigns.forEach((campaigns) => {
  console.log(`     ${formatCampaigns(campaigns)}`);
});
 
console.log("\n--- Operaciones de mutación ---\n");
 
addCampaigns({
  id: 6,
  name: "Parque Empresarial Sabana",
  category: "comercial",
  location: "Bogotá",
  value: 280000,
  funded: 15000,
  active: true,
});
 
addPriorityCampaigns({
  id: 0,
  name: "Residencial Urgente Pacífico",
  category: "residencial",
  location: "Buenaventura",
  value: 95000,
  funded: 5000,
  active: true,
});
 
removeByIndex(2);
 
removeLastCampaigns();
 
console.log("\n--- Inventario después de mutaciones ---\n");
campaigns.forEach((campaigns) => {
  console.log(`  ${formatCampaigns(campaigns)}`);
});
 
console.log("\n--- Búsqueda y filtrado ---\n");
 
const found = findByName("Bodega Logística Norte");
if (found) {
  console.log(`🔍 Proyecto encontrado: ${formatCampaigns(found)}`);
} else {
  console.log("🔍 Proyecto no encontrado.");
}
 
const activeCampaigns = getActiveCampaigns();
console.log(`📊 Proyectos activos: ${activeCampaigns.length} / ${campaigns.length}`);

const snapshot = [...campaigns, {
  id: 99,
  name: "Proyecto Test (solo snapshot)",
  category: "test",
  location: "N/A",
  value: 1000,
  funded: 0,
  active: false,
}];
console.log(`📸 Snapshot (con extra): ${snapshot.length} proyectos | items original: ${campaigns.length} (sin cambios)`);
 
console.log("\n--- Transformación con map ---\n");
 
const names = campaigns.map((campaigns) => campaigns.name);
console.log("📌 Nombres de proyectos:");
names.forEach((name) => console.log(`  - ${name}`));
 
const pending = campaigns.map((campaigns) => ({
  name: campaigns.name,
  pendiente: `USD ${(campaigns.value - campaigns.funded).toLocaleString("en-US")}`,
}));
console.log("\n💸 Monto pendiente por proyecto:");
pending.forEach((p) => console.log(`  - ${p.name}: ${p.pendiente}`));
 
console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${campaigns.length} ${VALUE_LABEL}`);
const activeCount = getActiveCampaigns().length;
console.log(`Activos: ${activeCount} | Inactivos: ${campaigns.length - activeCount}`);
 
console.log(`\n${"=".repeat(55)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(55)}\n`);