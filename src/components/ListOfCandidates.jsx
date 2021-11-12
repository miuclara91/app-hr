import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";


export default function ListOfCandidates({ name }) {
  return (
    <Container>
      {/* Aquí se debe mostrar los nombres de los candidatos de la base de datos */}
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          margin: 1,
          padding: 2,
          bgcolor: '#e1f5fe'
          
        }}
      >
        <Grid container >
          <Grid item xs={6}>
            <Typography align="center" > {name} </Typography>
          </Grid>

          <Grid item xs={6}>
            <Link to="./candidate">
              <Button variant="contained"  sx={{ mx: "35%", bgcolor: 'text.secondary'}}>Detalles</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          margin: 1,
          padding: 2,
          bgcolor: '#e1f5fe'         
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography align="center" > {name} </Typography>
          </Grid>

          <Grid item xs={6}>
            <Link to="./candidate">
              <Button variant="contained"  sx={{ mx: "35%", bgcolor: 'text.secondary'}}>Detalles</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          margin: 1,
          padding: 2,
          bgcolor: '#e1f5fe'         
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography align="center" > {name} </Typography>
          </Grid>

          <Grid item xs={6}>
            <Link to="./candidate">
              <Button variant="contained"  sx={{ mx: "35%", bgcolor: 'text.secondary'}}>Detalles</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
