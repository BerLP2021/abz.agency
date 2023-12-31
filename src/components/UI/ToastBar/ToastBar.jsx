import { Snackbar, Alert } from "@mui/material";
import { memo } from "react";

const ToastBar = ({ message, setMessage }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setMessage("");
  };
  
  let serverValidationMessage;

  if (typeof message === "string") {
    serverValidationMessage = (
      <Snackbar open={!!message} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  } else {
    serverValidationMessage = [];
    for (let key in message) {
      serverValidationMessage.push(
        <Snackbar
          key={key}
          open={!!message}
          autoHideDuration={10000}
          onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {`'${key}': ${message[key].join(" ")}`}
          </Alert>
        </Snackbar>
      );
    }
  }
  return <>{serverValidationMessage}</>;
};

export default memo(ToastBar);
