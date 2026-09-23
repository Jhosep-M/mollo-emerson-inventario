function Equipo({ equipo }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{equipo.nombre}</h5>
        <p className="card-text mb-1">Marca: {equipo.marca}</p>
        <p className="card-text mb-1">Categoría: {equipo.categoria}</p>
        <p className="card-text mb-1">Precio: {equipo.precio}</p>
        <p className="card-text mb-1">Stock: {equipo.stock}</p>
        <p className="card-text mb-0">
          Estado: {equipo.disponible ? "Disponible" : "No disponible"}
        </p>
      </div>
    </div>
  );
}

export default Equipo;
