# 🏋️ Sistema de Dataset para Gimnasio  
### Autor: Victor Recinos

Este proyecto implementa los cuatro ejercicios solicitados en la actividad de manejo de datasets, generación con IA, validación, visualización dinámica y CRUD con persistencia.  
El dominio elegido es **Gimnasio**, y todos los datos representan clientes, membresías y objetivos de entrenamiento.

---

# 🟠 Ejercicio 1 — Diseño del Dataset

### ✔ Dominio: Gimnasio  
Se definieron los siguientes campos:

| Campo | Tipo | Restricciones | Obligatorio |
|------|------|---------------|-------------|
| id_cliente | ID numérico | entero ≥1 | Sí |
| nombre | Texto | 3–40 caracteres | Sí |
| edad | Número | 15–70 | Sí |
| fecha_registro | Fecha | formato YYYY-MM-DD | Sí |
| membresia | Categoría | Básica, Premium, Elite | Sí |
| peso_actual | Número | 40–200 kg | Sí |
| objetivo | Texto corto | 5–50 caracteres | No |

Se crearon 5 registros de muestra válidos.

---

# 🟣 Ejercicio 2 — Generación y Validación con IA

### ✔ Generación con One‑Shot Prompt  
Se generaron 25 registros adicionales usando IA, basados en los 5 registros iniciales.

### ✔ Validación programática  
Se implementó la función:

```js
validarDataset()
La validación cubre:

ID válido

Edad en rango

Membresía permitida

Peso dentro de límites

Fecha con formato correcto

Se documentaron los errores encontrados y se corrigieron.

#  🔵 Ejercicio 3 — Visualización Dinámica
La interfaz incluye:

### ✔ Cards generadas dinámicamente
Cada cliente se muestra con:

Nombre

Edad

Membresía

Peso

Objetivo

### ✔ Búsqueda en tiempo real
Filtra por nombre mientras el usuario escribe.

✔ Filtro por categoría
Permite mostrar solo clientes con membresía:

Básica

Premium

Elite

### ✔ Gráfico con Chart.js
Se muestra un gráfico de barras con el conteo de clientes por membresía.

# 🟢 Ejercicio 4 — Persistencia y CRUD
Se añadió funcionalidad completa:

### ✔ Persistencia
El dataset se guarda automáticamente en localStorage.

### ✔ Crear
Formulario para agregar nuevos clientes.

### ✔ Eliminar
Botón para borrar registros desde las cards.

✔ Editar inline
Al hacer clic en un campo, se convierte en un input editable.

# 📝 Prompt One‑Shot utilizado (escrito por mí)
Este es el prompt que utilicé para generar los 25 registros adicionales con IA:

Quiero que generes 25 registros nuevos para un dataset de clientes de un gimnasio.
Aquí tienes la estructura y 5 registros de ejemplo. Respeta exactamente los tipos, rangos y categorías.

Estructura del dataset:

id_cliente: número entero ≥1

nombre: texto 3–40 caracteres

edad: número entre 15 y 70

fecha_registro: fecha YYYY-MM-DD

membresia: Básica | Premium | Elite

peso_actual: número entre 40 y 200

objetivo: texto corto 5–50 caracteres

Registros de ejemplo:  
(Incluí los 5 registros iniciales aquí)

Instrucción final:  
Genera 25 registros nuevos, válidos, variados y sin repetir nombres.

# 📬 Contacto
Email: tuemail@ejemplo.com

GitHub: https:

LinkedIn: https:

© 2026 — Victor Recinos
Este proyecto forma parte de mi formación como desarrollador web y mi práctica en ingeniería de prompts, validación de datos y construcción de interfaces dinámicas.