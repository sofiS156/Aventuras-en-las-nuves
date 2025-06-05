<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aventuras en las Nubes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #87CEEB; /* Color de fondo azul claro */
            margin: 0;
            padding: 0;
            color: #333;
        }
        header {
            text-align: center;
            padding: 20px;
            background-color: #ffffff;
        }
        h1 {
            color: #2E8B57; /* Color verde */
        }
        .slogan {
            font-size: 1.2em;
            color: #555555;
            margin-top: 10px;
        }
        nav {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
        }
        .container {
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
        .left-column {
            width: 60%;
        }
        .right-column {
            width: 35%;
            text-align: center;
        }
        .rec {
            background-color: #ffebcd; /* Color claro */
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        .flights-info {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }
        .search-box {
            background-color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .search-box input {
            flex: 1;
            padding: 10px;
            margin-right: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #ffffff;
            margin-top: 20px;
        }
        .contact {
            margin-top: 10px;
            font-size: 1em;
        }
    </style>
</head>
<body>

<header>
    <h1>Aventuras en las Nubes</h1>
    <div class="slogan">PIENSA, CREE, SUEÑA, Y... ¡ATRÉVETE A VIAJAR!</div>
</header>

<nav>
    <!-- Menú de Vuelos -->
    <div class="menu">
        
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=.05">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0; /* Fondo gris claro */
        }
        .search-container {
            display: flex; /* Usar flexbox para alinear en fila */
            justify-content: space-around; /* Espaciado entre elementos */
            align-items: center; /* Centrar verticalmente items */
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 1200px; /* Ancho máximo del contenedor */
            margin: 0 auto; /* Centrar contenedor horizontalmente */
        }
        .search-container h1 {
            flex-basis: 100%; /* Hacer que el título ocupe toda la fila */
            text-align: center; /* Centrar título */
            color: #2E8B57; /* Color del título */
            margin-bottom: 15px;
        }
        .form-group {
            display: flex;
            align-items: center;
            margin-right: 10px; /* Margen derecho entre campos */
        }
        .form-group label {
            margin-right: 5px; /* Margen derecho en etiquetas */
        }
        .form-group input,
        .form-group select {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            width: 100%; /* Ancho completo para inputs/selects */
            max-width: 160px; /* Ancho máximo para evitar desbordamiento */
        }
        .form-group button {
            padding: 10px 20px;
            background-color: #2E8B57; /* Color del botón */
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            max-width: fit-content; /* Ajusta el botón al contenido */
        }
        .form-group button:hover {
            background-color: #1f6f45; /* Color de botón al pasar el mouse */
        }
    </style>
</head>
<body>

<div class="search-container">

    <div class="form-group">
        <label for="trip-type">Viaje:</label>
        <select id="trip-type">
            <option value="sencillo">Sencillo</option>
            <option value="redondo">Redondo</option>
        </select>
    </div>

    <div class="form-group">
        <label for="passengers">Pasajeros:</label>
        <input type="number" id="passengers" value="1" min="1" max="10">
    </div>

    <div class="form-group">
        <label for="departure-date">Salida:</label>
        <input type="date" id="departure-date" value="2025-05-13">
    </div>

    <div class="form-group">
        <label for="return-date">Regreso:</label>
        <input type="date" id="return-date" value="2025-05-06">
    </div>

    <div class="form-group">
        <label for="from">Desde:</label>
        <input type="text" id="from" placeholder="Monterrey">
    </div>

    <div class="form-group">
        <label for="to">A:</label>
        <input type="text" id="to" placeholder="Oaxaca">
    </div>

    <div class="form-group">
        <label for="promo-code">Código:</label>
        <input type="text" id="promo-code" placeholder="Código">
    </div>

    <div class="form-group">
        <button type="button" onclick="buscarVuelos()">Buscar Vuelos</button>
    </div>
</div>

<script>
    function buscarVuelos() {
        // Obtener los valores de los campos del formulario
        const tripType = document.getElementById('trip-type').value;
        const passengers = document.getElementById('passengers').value;
        const departureDate = document.getElementById('departure-date').value;
        const returnDate = document.getElementById('return-date').value;
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const promoCode = document.getElementById('promo-code').value;

        // Simulación de la búsqueda de vuelos
        alert(`Buscando vuelos:\n
        Tipo de viaje: ${tripType}\n
        Pasajeros: ${passengers}\n
        Desde: ${from}\n
        A: ${to}\n
        Fecha de salida: ${departureDate}\n
        Fecha de regreso: ${returnDate}\n
        Código de promoción: ${promoCode}`);
    }
</script>

      </nav>
     
       <div class="flights-info">
            <h3>Ejemplo de Vuelo</h3>
            <p><strong>Salida:</strong> Ciudad de México</p>
            <p><strong>Destino:</strong> Nueva York</p>
            <p><strong>Día de Salida:</strong> 15 de Mayo 2025</p>
            <p><strong>Día de Regreso:</strong> 22 de Mayo 2025</p>
            <p><strong>Número de Pasajeros:</strong> 2</p>
            <p><strong>Costo:</strong> $1500</p>
        </div>
<div class="search-box">
            <select>
                <option value="" disabled selected>Buscar Vuelos</option>
                <option value="vuelo1">Vuelo a Europa</option>
                <option value="vuelo2">Vuelo a Asia</option>
                <option value="vuelo3">vuelo a España</option>
                <option value="vuelo4">vuelo a Roma</option>
            </select>
            <select>
                <option value="" disabled selected>Buscar Vacaciones</option>
                <option value="vacaciones1">Vacaciones en Cancún</option>
                <option value="vacaciones2">Vacaciones en París</option>
                <option value="vacaciones3">vacaciones en Nueva York</option>
                <option value="vacaciones4">vacaciones en Canada</opiton>
                <option value="vacaciones5">vacaciones en Corea del Sur</option>
                <option value="vacaciones6">vacaciones en Dubái</option>
             </select>
        </div>
    </div>

    <div class=right-column">
        <img src="imagen maquetacion htnl.png" width="500" height="460">
        
    </div>
<div>
<footer>
    <div>Mejores vuelos con Aventuras en las Nubes</div>
    <div><class="contact">Contáctanos: 9513425409</div>
</footer>

</body>
</html>