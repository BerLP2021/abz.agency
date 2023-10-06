import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import useUserService from "../../services/userService";
import Form from "./Form";
import Title from "../UI/Title";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Congrats from "./Congrats";

const SignUp = ({ setSayCongrats }) => {
  const [positions, setPositions] = useState([]);
  const { getPositions, loading, error, clearError } = useUserService();

  const onLoadPositions = (positions) => {
    setPositions(positions);
  };

  useEffect(() => {
    clearError();
    getPositions()
      .then((res) => res.positions)
      .then(onLoadPositions);
    // eslint-disable-next-line
  }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: "50px" }}>
      <Title
        className="heading1 section-title"
        text="Working with POST request"
      />
      <ErrorBoundary>
        <Form
          positions={positions}
          loading={loading}
          error={error}
          setSayCongrats={setSayCongrats}
        />
      </ErrorBoundary>
    </Stack>
  );
};

const SignUpSection = () => {
  const [sayCongrats, setSayCongrats] = useState(false);

  useEffect(() => {
    if (sayCongrats) {
      setTimeout(() => setSayCongrats(false), 3000);
    }
  }, [sayCongrats]);

  return (
    <section id="signup" className="form">
      <div className="container">
        {sayCongrats ? (
          <Congrats />
        ) : (
          <SignUp setSayCongrats={setSayCongrats} />
        )}
      </div>
    </section>
  );
};

export default SignUpSection;
