const icones = {
  red: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  green: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  blue: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  orange: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}


const map = L.map('map').setView([-23.420999, -51.933056], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
/*CORES DOS MARCADORES: 
 VERDE: COLETA SELETIVA DE RECICLÁVEIS
 VERMELHO:DESCARTE DE LIXO ELETRÔNICO
 AZUL: DOAÇÃO E REUTILIZAÇÃO DE ROUPAS
 LARANJA: PARADAS DE ÔNIBUS ELÉTRICOS
*/
const pontos = [
  {
    nome: "Ecoponto Zona 7",
    endereco: "Av. Colombo, 5030 – Zona 7",
    tipo: "Coleta Seletiva",
    coordenadas: [-23.4105, -51.9332],
    cor: "green"
  },
  {
    nome: "Igreja Presbiteriana Renovada",
    endereco: "Av. Mauá, 1500 – Zona 1",
    tipo: "Doação de Roupas",
    coordenadas: [-23.4190, -51.9335],
    cor: "red"
  },
]
pontos.forEach(ponto => {
  const marcador = L.marker(ponto.coordenadas, {
    icon: icones[ponto.cor] || icones.blue // fallback se cor não existir
  }).addTo(map);
  //cria o pop up do marcador
  marcador.bindPopup(`
    <strong>${ponto.nome}</strong><br>
    <em>${ponto.tipo}</em><br>
    ${ponto.endereco}
  `);
});