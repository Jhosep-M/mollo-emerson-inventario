# mollo-emerson-inventario

## Nombre completo del estudiante
Emerson Raphael Mollo Isla 
Luis Hidalgo Pedraza 

## Descripción breve del sistema
Aplicación frontend para la gestión de inventario tecnológico de una pequeña empresa. Permite registrar equipos mediante un formulario y visualizar dinámicamente los registros en la misma página. Los datos se almacenan temporalmente en el estado de React durante la ejecución de la aplicación (sin backend ni base de datos).

## Funcionalidades implementadas
- Encabezado reutilizable con props (`titulo` y `subtitulo`).
- Formulario de registro con Nombre, Marca, Categoría (Laptop | Monitor | Periférico | Impresora | Red | Otros), Precio, Stock y Estado, más botón "Registrar equipo".
- Manejo de campos con `useState`, `value`, `onChange` y `onSubmit` (sin recarga, con `preventDefault` y limpieza de campos).
- Estado principal en `App.jsx`: `const [equipos, setEquipos] = useState([]);` que conserva registros anteriores con spread (`[...equipos, nuevoEquipo]`).
- Listado dinámico con `map()` y `key`, componente `Equipo` por registro.
- Mensaje condicional "No existen equipos registrados." cuando no hay datos.
- Validaciones: Nombre obligatorio, Marca obligatoria, Categoría obligatoria, Precio mayor a 0, Stock igual o mayor a 0.
- Mensajes en interfaz: "Complete correctamente los campos obligatorios." y "Equipo registrado correctamente."
- Estado con renderizado condicional: `true` → Disponible, `false` → No disponible.
- Diseño básico con Bootstrap.

## Tecnologías utilizadas
React, Vite, JavaScript, Bootstrap, Git y GitHub.

## Instrucciones básicas para ejecutar el proyecto
```bash
npm install
npm run dev
```
Luego abrir la URL que muestra Vite (por defecto `http://localhost:5173`).

## Estructura esperada
```
mollo-emerson-inventario/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx
│   │   ├── FormularioEquipo.jsx
│   │   └── Equipo.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Flujo de datos en React
FormularioEquipo (estado local) → nuevo equipo → función por props (`onAgregarEquipo`) → estado principal en App.jsx (`setEquipos`) → `map()` → componente Equipo.
