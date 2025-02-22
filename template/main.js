function toggleMenu(){  
    const element2 = document.getElementById('menu-link2');
    
    if (window.getComputedStyle(element2).display === 'none') {
        element2.style.display = 'block';
    } else {
        element2.style.display = 'none';
    }

}
// 1  -> Max Verstappen
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

function prueba(){
    document.querySelectorAll("#boton-driver").forEach(button => {//de todos los botones con mismo id obtiene el pulsado
        button.addEventListener("click", (event) => {
            console.log("Button clicked:", event.target.innerText);//imprime el nombre
            console.log("Button value:", event.target.value);//imprime el value
        });
    });
  
}