import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";

import { Box, Button } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import OverflowTip from "../../OverflowTip/OverflowTip";

import "./inputFile.scss";

const VisuallyHiddenInput = styled("input")`
  opacity: 0;
  overflow: hidden;
  width: 0;
  border-radius: 0;
  white-space: nowrap;
`;

const InputFile = ({ register, errors }) => {
  const uploadedRef = useRef();
  const inputDescrRef = useRef();
  const { ref: registerRef, ...rest } = register("photo", {
    required: {
      value: true,
      message: "This field is required",
    },
    validate: {
      validFileType: (v) =>
        validateFileType(v) || `Invalid file type: only *.jpg, *.jpeg`,
      validSize: (v) =>
        validateImageSize(v) || `The file size should not exceed 5 MB`,
      validRes: async (v) =>
        (await validateImageResolution(v)) ||
        "The image resolution should be at least 70px*70px",
    },
  });
  const [loaded, setLoaded] = useState("");

  const validateFileType = (fileList) => {
    if (!fileList[0]) {
      return false;
    }
    return (
      fileList[0].type === "image/jpeg" || fileList[0].type === "image/jpg"
    );
  };

  const handleUploadedFile = (e) => {
    setLoaded(e.target.files[0]?.name || "");
    e.target.blur();
  };

  const validateImageSize = (fileList) => {
    if (!fileList[0]) {
      return false;
    }
    return fileList[0].size <= 5242880;
  };

  const validateImageResolution = (fileList) => {
    if (!fileList[0]) {
      return false;
    }
    return new Promise((res) => {
      const image = new Image();

      image.onload = function () {
        const width = this.width;
        const height = this.height;

        const minWidth = 70;
        const minHeight = 70;

        const result = width >= minWidth && height >= minHeight;
        res(result);
      };
      image.src = URL.createObjectURL(fileList[0]);
    });
  };

  return (
    <>
      <Box className="input-file_wrapper">
        <VisuallyHiddenInput
          type="file"
          accept="image/jpeg, image/jpg"
          {...rest}
          onChange={handleUploadedFile}
          onReset={() => setLoaded("")}
          ref={(el) => {
            registerRef(el);
            uploadedRef.current = el;
          }}
        />
        <Button
          component="label"
          onClick={() => {
            uploadedRef.current.click();
            uploadedRef.current.focus();
          }}
          tabIndex={-1}
          variant="outlined"
          className="input-file-btn"
          color="inherit"
          sx={{
            borderWidth: errors?.photo ? "2px" : "1px",
            borderColor: errors?.photo ? "error.main" : "inherit",
            transition: "border-color 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}>
          Upload
        </Button>
        <Box
          className={`input-file-btn__descr ${loaded ? "loaded" : ""} ${
            errors?.photo ? "input-file-btn__descr_error" : ""
          }`}
          ref={inputDescrRef}
          sx={{
            borderColor: `${errors.photo ? "error.main !important" : ""}`,
          }}
          onClick={() => {
            uploadedRef.current.click();
            uploadedRef.current.focus();
          }}>
          <OverflowTip name={loaded ? loaded : "Upload your photo"} />
        </Box>
      </Box>
      <ErrorMessage
        errors={errors}
        name="photo"
        render={({ message }) => <p className="error">{message}</p>}
      />
    </>
  );
};

export default InputFile;
