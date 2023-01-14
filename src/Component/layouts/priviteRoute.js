import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Protected(props) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.Auth);
  const loading = useSelector((state) => state.Auth.loading);
  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (auth.isAuthenticated === false) {
    return navigate("/login");
  }
  if (auth.isAuthenticated === true) {
    return { ...props.children };
  }
}
