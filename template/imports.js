function grafico_temporadas() {
  
    var ctx = document.getElementById("resultados_por_temporada").getContext("2d");
  // Si el gráfico ya existe, lo destruimos antes de crearlo de nuevo
  if (resultados_por_temporada) {
    resultados_por_temporada.destroy();
  }

  resultados_por_temporada = new Chart(ctx, {
    type: "line",
    data: {
      labels: años, // Correctly updated years
      datasets: [{
        label: "Podios",//completar en el json podios, victorias y poles
        data: Object.values(pilotoResult),
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: false,
        tension:0,
        stepSize: 1,
        responsive: true
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,  // This prevents the axis from starting at 0
          min: 1  ,
          max: 24,
          ticks: {
            stepSize: 1, // Ensures steps of 1
            
             
          }
        },

        

      }
    }
  });

}
var barstats;
function barstats_func() {
    
  
    var ctx = document.getElementById("barstats").getContext("2d");
  // Si el gráfico ya existe, lo destruimos antes de crearlo de nuevo
  if (barstats) {
    barstats.destroy();
  }

  barstats = new Chart(ctx, {   
    type: "bar",
    data: {
      labels: ["Podios", "Victorias", "Poles"],
      datasets: [{
        label: "Estadisticas",
        data: [piloto.podios, piloto.victorias, piloto.poles],
        backgroundColor: [
            
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        borderWidth: 1
      }]
    },
    options: {   
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });
    barstats.update();

}