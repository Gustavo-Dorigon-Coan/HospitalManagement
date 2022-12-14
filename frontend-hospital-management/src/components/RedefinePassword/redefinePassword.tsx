import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const password = require("../../assets/password.png");
const theme = createTheme();

export default function RedefinePassword() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={password} width={60} />
          <Typography component="h1" variant="h5">
            Recuperar Senha!!
          </Typography>
          <div>
            Insira seu email para redefinir a sua senha!
          </div>
          <div></div>
          <Box component="form" noValidate sx={{ mt: 0, width: 500 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Email"
              type="email"
            />
            <div>
              <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                >
                  Enviar
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}