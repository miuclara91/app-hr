import { Link } from "react-router-dom";

export default function Candidate({ name, date, skills }) {
  return (
    <div>
      <div>Nombre: {name}</div>
      <div>F. Entrevista: {date}</div>
      <div>
        Habilidades:
        <p>Java: {String(skills.java)}</p>
        <p>Microservicios: {String(skills.micro)}</p>
        <p>Elastic: {String(skills.elastic)}</p>
      </div>

      <button>Guardar</button>

      <Link to="/">
        <button>Regresar</button>
      </Link>
    </div>
  );
}
