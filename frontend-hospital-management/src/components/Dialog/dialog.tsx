import CloseIcon from '@mui/icons-material/Close';
import { Alert, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import ButtonGenre from '../ButtonGenre/buttonGenre';
import ButtonHealth from '../ButtonHealth/buttonhealth';
import './dialog.css';

const adicionar = require("../../assets/adicionar.png");

export default function DialogForm() {

  const [open, setOpen] = React.useState(false);
  const [openDialogSave, setOpenDialogSave] = React.useState(false);
  const [openDialogCancel, setOpenDialogCancel] = React.useState(false);

  const handleClickOpenButton = () => {
    setOpen(true);
  };

  const handleCloseCancel = () => {
    setOpen(false);
    setOpenDialogSave(false);
  };

  const handleCloseAlertSave = () => {
    setOpenDialogSave(false);
    setOpen(false);
  }

  const handleCloseAlertCancel = () => {
    setOpenDialogCancel(false);
  }

  const handleClickSave = () => {
    setOpenDialogSave(true);
  };

  const handleClickCancel = () => {
    setOpenDialogCancel(true);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpenButton}>
        <img src={adicionar} width={40} />
      </IconButton>
      <Dialog open={open} onClose={handleClickOpenButton}>
        <div>
          <div className='flex'>
            <DialogTitle>Insira um Novo Registro de Atendimento!</DialogTitle>
          </div>
          <div className='flex-position'>
            <IconButton onClick={handleCloseCancel}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="nameFull"
                label="Nome Completo"
                type="nameFull"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="age"
                label="Idade"
                name="age"
                type="number"
              />
            </Grid>
          </Grid>
          <ButtonGenre />
          <br></br>
          <ButtonHealth />
          <TextField
            margin="normal"
            required
            fullWidth
            id="symptoms"
            label="Sintomas"
            name="symptoms"
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button >
          </Button>
          <Button onClick={handleClickCancel}>Cancelar</Button>
          <Snackbar open={openDialogCancel} autoHideDuration={4000} onClose={handleCloseAlertCancel}>
            <Alert onClose={handleCloseAlertCancel} variant="filled" severity="error" sx={{ width: '70%' }}>
              Ocorreu um erro ao inserir o registro de atendimento!
            </Alert>
          </Snackbar>
          <Button onClick={handleClickSave}>Salvar</Button>
          <Snackbar open={openDialogSave} autoHideDuration={1000} onClose={handleCloseAlertSave}>
            <Alert onClose={handleCloseAlertSave} variant="filled" severity="success" sx={{ width: '75%' }}>
              Registro de atendimento de salvo com sucesso!
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog >
    </div >
  );
}
