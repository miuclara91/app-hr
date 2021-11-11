import { Link } from "react-router-dom";
import { Button, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

export default function Candidate({ name, date, skills }) {
  return (
    <div>
      <div>Nombre: {name}</div>
      <div>F. Entrevista: {date}</div>
      <div>
        Habilidades:
        <FormGroup>

          {/* <p>Java: {String(skills.java)}</p>
            <p>Microservicios: {String(skills.micro)}</p>
            <p>Elastic: {String(skills.elastic)}</p> */}

          <FormControlLabel control={<Checkbox  />} value={skills.java} label="Java" />
          <FormControlLabel control={<Checkbox  />} value={skills.micro} label="Microservicios" />
          <FormControlLabel control={<Checkbox  />} value={skills.elastic} label="Elastic" />
        </FormGroup>
      </div>

      <Button variant="contained">Guardar</Button>

      <Link to="/">
        <Button variant="contained">Regresar</Button>
      </Link>
    </div>
  );
}
