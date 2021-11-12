import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Checkbox,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";

export default function Candidate({ name, date, skills }) {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography>Nombre: {name}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>F. Entrevista: {date}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Box>
            Habilidades:
            <FormGroup>
              {/* <p>Java: {String(skills.java)}</p>
            <p>Microservicios: {String(skills.micro)}</p>
            <p>Elastic: {String(skills.elastic)}</p> */}

              <FormControlLabel
                control={<Checkbox />}
                value={skills.java}
                label="Java"
              />
              <FormControlLabel
                control={<Checkbox />}
                value={skills.micro}
                label="Microservicios"
              />
              <FormControlLabel
                control={<Checkbox />}
                value={skills.elastic}
                label="Elastic"
              />
            </FormGroup>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" sx={{ mx: 2, bgcolor: "#e91e63"}}>Guardar</Button>
          <Link to="/">
            <Button variant="contained" sx={{ mx: 2, bgcolor: "#651fff"}}>Regresar</Button>
          </Link>
        </Grid>

      </Grid>
    </Container>
  );
}
