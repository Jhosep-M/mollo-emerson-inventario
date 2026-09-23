function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="bg-primary text-white text-center p-4 mb-4 rounded">
      <h1>{titulo}</h1>
      <p className="mb-0">{subtitulo}</p>
    </header>
  );
}

export default Encabezado;
