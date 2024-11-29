import React, { useEffect, useState } from "react";
import {
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import Footer from "components/Footer/Footer";

import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toast } from "react-toastify";
import ApiCall from "utils/Api";

const HeaderWithBack = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={() => navigate(-1)} // Navigate back
        >
          <ArrowBackIcon style={{ fontSize: 40 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const VarifyEmail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const validateToken = async () => {
    try {
      const response = await ApiCall.Api.post(
        `user/validate-token?string=${id}`
      );
      console.log("Token validated:", response.data);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || "Error validating token"
      );
      toast.error(error?.response?.data?.message || "Error validating token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <HeaderWithBack />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Card
          elevation={0}
          sx={{ width: 500, padding: 3, backgroundColor: "#f4f6f8" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px auto",
              padding: "20px",
              border: "4px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            {errorMessage ? (
              errorMessage
            ) : (
              <Typography
                variant="body1"
                sx={{ marginBottom: "20px", color: "#888888" }}
              >
                <span style={{ fontWeight: "bold" }}>
                  You have successfully verified your email.
                </span>{" "}
                Thank you for joining eFX Apex. We will keep you updated about
                our upcoming launch.
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#828282",
                color: "#f9f9f9",
                "&:hover": {
                  backgroundColor: "#828282",
                  color: "#f9f9f9",
                },
              }}
              onClick={() => navigate("/")}
            >
              Back to eFX Apex
            </Button>

            <Button
              sx={{
                backgroundColor: "#828282",
                color: "#f9f9f9",
                "&:hover": {
                  backgroundColor: "#828282",
                  color: "#f9f9f9",
                },
              }}
              onClick={() => navigate("/")}
            >
              Close
            </Button>
          </Box>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default VarifyEmail;
