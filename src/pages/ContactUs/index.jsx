import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box, Divider } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Card sx={{ width: 500, padding: 3 }}>
        {!isSubmitted ? (
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Contact Us
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2, padding: 1 ,backgroundColor:"#4F805D"}}
              >
                Submit
              </Button>
            </form>
            <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
              Have a message displayed that will let them know that they receive an email to verify their email address.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, color: 'gray' }}>
              Send an email with a verification link.
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Email Verification
            </Typography>
            <Typography variant="body1">
              Thank you for your interest in eFX Apex. We will inform you once the product becomes available. In the meantime, please verify your email address by following the link below:
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <strong>LINK:</strong> ........
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Kind Regards, <br />
              Your eFX Team from Boston
            </Typography>
            {/* Box for additional details after submission */}
            {/* <Box
              sx={{
                border: '2px solid black',
                padding: 2,
                marginTop: 3,
                textAlign: 'left',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Email.
              </Typography>
              <Typography variant="body2">
                Thank you for your interest in eFX Apex. We will inform you once the product becomes available.
              </Typography>
              <Typography variant="body2">
                In the meantime, please verify your email address by following this link: LINK: ........
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Kind Regards, <br />
                Your eFX Team from Boston
              </Typography>
            </Box> */}
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default ContactUs;
