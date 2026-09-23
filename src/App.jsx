import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import FormularioEquipo from "./components/FormularioEquipo.jsx";
import Equipo from "./components/Equipo.jsx";

function App() {
  const [equipos, setEquipos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [esError, setEsError] = useState(false);

  const agregarEquipo = (nuevoEquipo) => {
    if (!nuevoEquipo) {
      setMensaje("Complete correctamente los campos obligatorios.");
      setEsError(true);
      return;
    }
    setEquipos([...equipos, nuevoEquipo]);
    setMensaje("Equipo registrado correctamente.");
    setEsError(false);
  };

  return (
    <div className="container mt-4">
      <Encabezado
        titulo="Inventario Tecnológico"
        subtitulo="Control de equipos disponibles"
      />

      <FormularioEquipo onAgregarEquipo={agregarEquipo} />

      {mensaje !== "" && (
        <div
          className={esError ? "alert alert-danger" : "alert alert-success"}
          role="alert"
        >
          {mensaje}
        </div>
      )}

      <h2>Equipos registrados</h2>

      {equipos.length === 0 ? (
        <p>No existen equipos registrados.</p>
      ) : (
        equipos.map((equipo) => <Equipo key={equipo.id} equipo={equipo} />)
      )}
    </div>
  );
}

export default App;
