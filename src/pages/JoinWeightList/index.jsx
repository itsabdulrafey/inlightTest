import React, { useState } from "react";
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
} from "@mui/material";
import Footer from "components/Footer/Footer";

import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
        {/* <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Header Title
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const Navigate = useNavigate();
  return (
    <>
      {HeaderWithBack()}
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
          {!isSubmitted ? (
            <CardContent>
              <Typography
                sx={{
                  color: "#444444",
                  fontWeight: 700,
                  lineHeight: "42px",
                  fontSize: "32px",
                  letterSpacing: "4px", // Adjust letter spacing
                  wordSpacing: "4px", // Adjust word spacing
                }}
              >
                JOIN WAIT LIST
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <Typography
                  variant="body2"
                  sx={{ marginTop: 2, color: "gray" }}
                >
                  <input type="checkbox" /> You are agreeing to the{" "}
                  <sapn style={{ fontWeight: "bold" }}>Terms</sapn> and{" "}
                  <span style={{ fontWeight: "bold" }}>Privacy Policy</span>
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#828282",
                    color: "#f9f9f9", // Match background or set a custom color
                    "&:hover": {
                      backgroundColor: "#828282", // Prevent background change on hover
                      color: "#f9f9f9", // Keep text color consistent on hover
                    },
                    marginTop: 2,
                    padding: 1,
                  }}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          ) : (
            <>
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
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "20px", color: "#888888" }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    You are not yet done.
                  </span>{" "}
                  Please verify your email by clicking on the link that we sent
                  to your inbox. Only then will we be able to contact you once
                  eFX Apex launches. Thank you for joining our wait list.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                ></Box>
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
                    color: "#f9f9f9", // Match background or set a custom color
                    "&:hover": {
                      backgroundColor: "#828282", // Prevent background change on hover
                      color: "#f9f9f9", // Keep text color consistent on hover
                    },
                  }}
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  Back to eFX Apex
                </Button>

                <Button
                  sx={{
                    backgroundColor: "#828282",
                    color: "#f9f9f9", // Match background or set a custom color
                    "&:hover": {
                      backgroundColor: "#828282", // Prevent background change on hover
                      color: "#f9f9f9", // Keep text color consistent on hover
                    },
                  }}
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
