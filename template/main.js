function toggleMenu() {
  const element2 = document.getElementById("menu-link2");

  if (window.getComputedStyle(element2).display === "none") {
    element2.style.display = "block";
  } else {
    element2.style.display = "none";
  }
}

function mostrarInformacion(num) {
  fetch("https://query.wikidata.org/sparql?query=" + encodeURIComponent(`
    SELECT ?wins WHERE {
      wd:Q196149 ?p ?statement.
      ?statement ?ps ?wins.
      ?p wikibase:propertyType wikibase:Quantity;
         rdfs:label "wins"@en.
    }
  `) + "&format=json")
    .then(response => response.json())
    .then(data => {
      const wins = data.results.bindings[0]?.wins.value || "Unknown";
      console.log("Carlos Sainz Wins:", wins);
    })
    .catch(error => console.error("Error fetching data:", error));
  }  
  

// 1  -> Max Verstappen-
// 4  -> Lando Norris
// 5  -> Gabriel Bortoleto
// 7  -> Jack Doohan
// 10 -> Pierre Gasly
// 12 -> Andrea Kimi Antonelli
// 14 -> Fernando Alonso
// 16 -> Charles Leclerc
// 18 -> Lance Stroll
// 22 -> Yuki Tsunoda
// 23 -> Alexander Albon
// 27 -> Nico Hülkenberg
// 30 -> Liam Lawson
// 31 -> Esteban Ocon
// 44 -> Lewis Hamilton
// 55 -> Carlos Sainz Jr.
// 63 -> George Russell
// 81 -> Oscar Piastri
// 87 -> Oliver Bearman

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".boton-driver").forEach(button => {
      button.addEventListener("click", event => {
        let buttonValue = event.currentTarget.value; // Obtener el valor del botón clicado
        console.log("Button clicked:", buttonValue);
  
        // Acciones según el botón presionado
        switch (buttonValue) {
          case "1":
            console.log("Carlos Sainz seleccionado.");
            break;
          case "2":
            console.log("Max Verstappen seleccionado.");
            break;
          default:
            console.log("Otro piloto seleccionado.");
            break;
        }
      });
    });
  });
