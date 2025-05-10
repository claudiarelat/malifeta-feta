let tasks = [
  {
    name: "Aprendre com es fan les peticions al servidor amb JavaScript",
    completed: true,
    id: 1,
  },
  { name: "Comprar pinso", completed: true, id: 2 },
   { name: "Anar a l'últim concert d'Smoking Souls", completed: true, id: 3 },
  { name: "Posar una rentadora de llençols", completed: false, id: 4 },
  { name: "Anar al Mercadona", completed: false, id: 5 },
 
  {
    name: "Acabar de llegir la novel·la de fantasia",
    completed: false,
    id: 7,
  }
];

const llista = document.querySelector(".js_llista");

// function pintarTasques() {
//     for (const task of tasks) {
//         llista.innerHTML += `<li class="js_tasca">
//             <input type="checkbox" class="js_checkbox" id="${task.id}" ${task.completed ? "checked" : ""}>
//             <label for="${task.id}">${task.name}</label>`
//           } 
        
// }

function pintarTasques() {
  llista.innerHTML = ""; // Neteja la llista abans de tornar a pintar
  for (const task of tasks) {
    llista.innerHTML += `
      <li class="js_tasca">
        <input type="checkbox" class="js_checkbox" id="${task.id}" ${task.completed ? "checked" : ""}>
        <label for="${task.id}" class="${task.completed ? "llesta" : ""}">${task.name}</label>
      </li>`;
  }
}

function tasquesFetes(event) {

  // Ens assegurem que l'element clicat sigui un checkbox
  if (event.target.type !== "checkbox") return;

  const taskId = parseInt(event.target.id); // Obtenim l'ID de la tasca
  if (!taskId) return; // Si no s'ha trobat cap ID, sortim de la funció

  const task = tasks.find((task) => task.id === taskId); // Busquem la tasca amb l'ID corresponent

  task.completed = event.target.checked; // Actualitzem la propietat completed de la tasca
  
  const label = event.target.nextElementSibling; // Obtenim l'etiqueta associada al checkbox
  label.classList.toggle("llesta", task.completed); // Afegim o traiem la classe "llesta" segons el valor de completed

};



pintarTasques();

llista.addEventListener("click", tasquesFetes);