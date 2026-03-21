// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [tu dominio asignado]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
console.log("");
console.log("=== PLATAFORMA CROWDFUNDING INMOBILIARIO ===")
console.log("");
console.log("---- INVERSIÓN COLECTIVA REALTY ---- ")
console.log("");
const campaigns = [
  { name: "Centro Empresarial Platinum",   category: "Comercial",    value: 100 },
  { name: "Villas del Mar - Cartagena",    category: "Turístico",    value: 62  },
  { name: "Reserva de Bosque - Etapa 2",   category: "Residencial",  value: 100 },
  { name: "Torres del Lago",               category: "Residencial",  value: 85  },
  { name: "Plaza Logística del Norte",     category: "Comercial",    value: 45  },
  { name: "Bahía Esmeralda - Etapa 1",     category: "Turístico",    value: 30  },
];

const categories = ["Comercial", "Turístico", "Residencial"];
const valueLabel = "% financiación";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");
console.log("");
let lineNumber = 0;
for (const campaign of campaigns) {
  lineNumber++;
  console.log(`${lineNumber}. ${campaign.name} — ${campaign.category} — ${valueLabel}: ${campaign.value}%`);
}
console.log("");
 
// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");
console.log("");
for (const category of categories) {
  let count = 0;
  for(const campaign of campaigns) {
     if (campaign.category === category) count++;
  }
  console.log(`${category}: ${count} Campañas(s)`);
}
console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");
console.log("");
let totalValue = 0;
for (const campaign of campaigns) {
  totalValue += campaign.value;
}
const averageValue = campaigns.length > 0 ? totalValue / campaigns.length : 0;
console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);
console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");
console.log("");
let maxCampaign = campaigns[0] ?? null;
let minCampaign = campaigns[0] ?? null;
if (campaigns.length > 0)  {
  for (const campaign of campaigns)  {
  if (campaign.value > maxCampaign.value) maxCampaign = campaign;
  if (campaign.value < minCampaign.value) minCampaign = campaign
  }
  console.log(`Mayor ${valueLabel}: ${maxCampaign?.name} (${maxCampaign?.value}%)`);
  console.log(`Menor ${valueLabel}: ${minCampaign?.name} (${minCampaign?.value}%)`);
}
console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");
console.log("");
for (let i = 0; i < campaigns.length; i++) {
  const campaign = campaigns[i];
  const comparison = campaign.value > averageValue ? "Sobre el promedio" : campaign.value === averageValue ? "En el promedio exacto" : "Bajo el promedio";
  console.log(`${i + 1}. ${campaign.name} —  ${campaign.value}% - ${comparison}`);
}
console.log("");
console.log("=== FIN DEL REPORTE ===");
console.log("");