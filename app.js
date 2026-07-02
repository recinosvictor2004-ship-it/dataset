// Cargar dataset desde localStorage
let dataset = JSON.parse(localStorage.getItem("dataset")) || [];

// Guardar dataset
function guardar() {
  localStorage.setItem("dataset", JSON.stringify(dataset));
}

// Render cards
const cards = document.getElementById("cards");
const search = document.getElementById("search");
const filtro = document.getElementById("filtro");

function render() {
  const texto = search.value.toLowerCase();
  const categoria = filtro.value;

  cards.innerHTML = "";

  dataset
    .filter(c =>
      c.nombre.toLowerCase().includes(texto) &&
      (categoria === "Todos" || c.membresia === categoria)
    )
    .forEach(c => {
      cards.innerHTML += `
        <div class="card">
          <h3 contenteditable="true" data-id="${c.id_cliente}" data-campo="nombre">${c.nombre}</h3>
          <p contenteditable="true" data-id="${c.id_cliente}" data-campo="edad"><strong>Edad:</strong> ${c.edad}</p>
          <p contenteditable="true" data-id="${c.id_cliente}" data-campo="membresia"><strong>Membresía:</strong> ${c.membresia}</p>
          <p contenteditable="true" data-id="${c.id_cliente}" data-campo="peso_actual"><strong>Peso:</strong> ${c.peso_actual} kg</p>
          <p contenteditable="true" data-id="${c.id_cliente}" data-campo="objetivo"><strong>Objetivo:</strong> ${c.objetivo}</p>

          <button class="delete-btn" onclick="eliminarCliente(${c.id_cliente})">Eliminar</button>
        </div>
      `;
    });
}

search.addEventListener("input", render);
filtro.addEventListener("change", render);

// Agregar cliente
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const nuevo = {
    id_cliente: Date.now(),
    nombre: document.getElementById("nombre").value,
    edad: Number(document.getElementById("edad").value),
    membresia: document.getElementById("membresia").value,
    peso_actual: Number(document.getElementById("peso").value),
    objetivo: document.getElementById("objetivo").value
  };

  dataset.push(nuevo);
  guardar();
  render();
});

// Eliminar cliente
function eliminarCliente(id) {
  dataset = dataset.filter(c => c.id_cliente !== id);
  guardar();
  render();
}

// Edición inline
cards.addEventListener("blur", e => {
  if (e.target.dataset.id) {
    const id = Number(e.target.dataset.id);
    const campo = e.target.dataset.campo;
    const valor = e.target.innerText.replace(/.*:\s*/, "");

    const cliente = dataset.find(c => c.id_cliente === id);
    cliente[campo] = valor;

    guardar();
  }
}, true);

// Chart.js
function generarGrafico() {
  const conteo = {
    Básica: dataset.filter(c => c.membresia === "Básica").length,
    Premium: dataset.filter(c => c.membresia === "Premium").length,
    Elite: dataset.filter(c => c.membresia === "Elite").length
  };

  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["Básica", "Premium", "Elite"],
      datasets: [{
        label: "Clientes por membresía",
        data: Object.values(conteo),
        backgroundColor: [
          "rgba(0,234,255,0.7)",
          "rgba(255,0,119,0.7)",
          "rgba(155,77,255,0.7)"
        ],
        borderColor: [
          "var(--neon-blue)",
          "var(--neon-pink)",
          "var(--neon-purple)"
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: { ticks: { color: "#fff" } },
        x: { ticks: { color: "#fff" } }
      }
    }
  });
}

render();
generarGrafico();
