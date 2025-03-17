var años=[];
var resultados_por_temporada;
var pilotoResult = {};
var color;
fetch('https://ergast.com/api/f1/drivers/sainz/results.xml')
  .then(response => response.text()) // Convert response to text
  .then(str => new window.DOMParser().parseFromString(str, "text/xml")) // Parse as XML
  .then(data => {
    console.log(data); // XML Document

    // Extracting specific data, e.g., races
    let races = data.getElementsByTagName("Race");
    for (let i = 0; i < races.length; i++) {
      let raceName = races[i].getElementsByTagName("RaceName")[0].textContent;
      let circuit = races[i].getElementsByTagName("CircuitName")[0].textContent;
      let position = races[i].getElementsByTagName("Position")[0]?.textContent || "N/A";

      console.log(`Race: ${raceName}, Circuit: ${circuit}, Position: ${position}`);
    }
  })
  .catch(error => console.error('Error fetching XML:', error));

   // XML Document
async function get_Data(numero) {
  try {
    const response = await fetch("../verstappen.json");
    const response2=await fetch("https://ergast.com/api/f1/drivers/sainz/results.json");
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const json2=await response2.json();
    console.log(json2);
     piloto = json.pilotos.find((p) => p.numero === numero);

    document.getElementById("driver-name-data").textContent = piloto.nombre;
    document.getElementById("equipo").textContent = piloto.equipo;
    document.getElementById("nacionalidad").textContent = piloto.nacionalidad;
    document.getElementById("numero").textContent = piloto.numero;
    document.getElementById("fecha").textContent = piloto.fecna;
    document.getElementById("temporadas").textContent = piloto.temporadas;
    document.getElementById("podios").textContent = piloto.podios;
    document.getElementById("drivers-photo-data").src = piloto.imagen;
    color=piloto.color;
    pilotoResult = piloto.resultados_mundial;
    años = Object.keys(pilotoResult);

    console.log(años);
    // Guardamos los años en F1 para usarlos en el gráfico

  

    // Calcular la edad del piloto
    const date1 = new Date(piloto.fecna);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    document.getElementById("edad").textContent = Math.floor(diffTime / (1000 * 60 * 60 * 24) / 365);

    // Llamamos a la función que actualiza el gráfico
    grafico_temporadas();
    barstats_func();

  } catch (error) {
    console.error(error.message);
  }
}

function recopilarinformaciontotal(numero) {  
   show("driver-presentation", numero);
}

function show(id, numero) {
  const foto_texto = document.getElementById(id);
  const texto = document.getElementById("drivers-data-main");

  // Mostrar la sección
  foto_texto.style.display = "block";

  // Fade out
  texto.style.transition = "opacity 0.5s ease";
  texto.style.opacity = "0";

  setTimeout(async () => {
    await get_Data(numero); // Cargar los datos antes de actualizar la UI

    texto.style.opacity = "1"; // Fade in
  }, 500);

  // Scroll suave
  document.getElementById("podios").scrollIntoView({ behavior: "smooth" });

  // Fade in para la imagen
  foto_texto.style.opacity = "0";
  setTimeout(() => {
    foto_texto.style.transition = "opacity 0.5s ease";
    foto_texto.style.opacity = "1";
  }, 10);
}

// Función para inicializar y actualizar el gráfico


