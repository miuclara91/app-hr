import { Link } from "react-router-dom";

export default function ListOfCandidates({ name }) {
  return (
    <div>
      {/* Aquí se debe mostrar los nombres de los candidatos de la base de datos */}
      {name}
      <Link to="./candidate">
        <button>Detalles</button>
      </Link>
    </div>
  );
}
