import React, { useState, useRef } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import Logo from "../../assets/Logo.jpg";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ open, handleClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [phoneNumber, setPhoneNumber] = useState("");

  const otpRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to the next field
      if (index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleModalClose = () => {
    setOtpSent(false);
    setOtp(Array(6).fill(""));
    setPhoneNumber("");
    handleClose();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validatePhoneNumber = (number) => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const sendOtp = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setOtpSent(true);
    }
  };

  const verifyOtp = () => {
    if (otp.join("") === "123456") {
      Cookies.set("userLoggedIn", "true");
      handleModalClose(); // Close the modal after 2 seconds
      window.location.reload();
    } else {
      toast.error("Incorrect OTP. Please try again.");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ToastContainer />
        <img
          src={Logo}
          alt="Logo"
          style={{
            borderRadius: "50%",
            width: 100,
            height: 100,
            marginBottom: 16,
          }}
        />
        <Typography variant="h6" component="h2" gutterBottom>
          Log in
        </Typography>
        {otpSent ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              {[...Array(6)].map((_, index) => (
                <TextField
                  key={index}
                  variant="outlined"
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center" },
                  }}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  sx={{
                    width: 40,
                  }}
                  inputRef={(ref) => (otpRefs.current[index] = ref)}
                />
              ))}
            </Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Waiting for OTP{" "}
              <span style={{ color: "rgb(245, 130, 32)" }}>5:58 mins</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mr: 1,
                  color: "rgb(245, 130, 32)",
                }}
                onClick={() => setOtpSent(false)}
              >
                Back
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  ml: 1,
                  bgcolor: "rgb(245, 130, 32)",
                  "&:hover": { bgcolor: "rgb(250, 205, 166)" },
                }}
                onClick={verifyOtp}
              >
                Login
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Registered mobile number
            </Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="(+91)"
              margin="normal"
              size="small"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              InputProps={{
                disableUnderline: true,
                sx: { borderBottom: "1px solid" },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 5,
                bgcolor: validatePhoneNumber(phoneNumber)
                  ? "rgb(245, 130, 32)"
                  : "grey",
                "&:hover": {
                  bgcolor: validatePhoneNumber(phoneNumber)
                    ? "rgb(250, 205, 166)"
                    : "grey",
                },
              }}
              onClick={sendOtp}
              disabled={!validatePhoneNumber(phoneNumber)}
            >
              Get OTP
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Login;
