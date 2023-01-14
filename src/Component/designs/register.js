import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography } from "@material-ui/core";
import HowToRegIcon from "@mui/icons-material/HowToReg";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function RegisterForm() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography sx={{ mb: 2 }} variant="h5">
        Create Your Account
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          size="small"
          label="Username"
          id="username"
          variant="outlined"
          fullWidth
        />
        <TextField
          size="small"
          label="Email"
          id="email"
          variant="outlined"
          type="email"
          fullWidth
        />
        <TextField
          size="small"
          label="Password"
          fullWidth
          id="password"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.button}
          startIcon={<HowToRegIcon />}
        >
          Register
        </Button>
      </form>
    </Container>
  );
}
