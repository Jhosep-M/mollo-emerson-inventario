import { useState } from "react";

function FormularioEquipo({ onAgregarEquipo }) {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [disponible, setDisponible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const precioNumero = Number(precio);
    const stockNumero = Number(stock);

    const esValido =
      nombre.trim() !== "" &&
      marca.trim() !== "" &&
      categoria !== "" &&
      precio !== "" &&
      !Number.isNaN(precioNumero) &&
      precioNumero > 0 &&
      stock !== "" &&
      !Number.isNaN(stockNumero) &&
      stockNumero >= 0;

    if (!esValido) {
      onAgregarEquipo(null);
      return;
    }

    const nuevoEquipo = {
      id: Date.now(),
      nombre: nombre.trim(),
      marca: marca.trim(),
      categoria,
      precio: precioNumero,
      stock: stockNumero,
      disponible,
    };

    onAgregarEquipo(nuevoEquipo);

    setNombre("");
    setMarca("");
    setCategoria("");
    setPrecio("");
    setStock("");
    setDisponible(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Laptop HP 15"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Marca</label>
        <input
          type="text"
          className="form-control"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          placeholder="Ej: HP"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          className="form-select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          <option value="Laptop">Laptop</option>
          <option value="Monitor">Monitor</option>
          <option value="Periférico">Periférico</option>
          <option value="Impresora">Impresora</option>
          <option value="Red">Red</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className="form-control"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          min="0"
          step="0.01"
          placeholder="Ej: 3500"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input
          type="number"
          className="form-control"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          min="0"
          step="1"
          placeholder="Ej: 10"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Estado</label>
        <select
          className="form-select"
          value={disponible ? "true" : "false"}
          onChange={(e) => setDisponible(e.target.value === "true")}
        >
          <option value="true">Disponible</option>
          <option value="false">No disponible</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Registrar equipo
      </button>
    </form>
  );
}

export default FormularioEquipo;
