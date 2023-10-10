import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

import useUserService from "../../services/userService";
import Form from "./Form";
import Title from "../UI/Title";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Congrats from "./Congrats";

export const SignUp = () => {
  const [positions, setPositions] = useState([]);
  const { getPositions, loading, error, clearError } = useUserService();
  const [sayCongrats, setSayCongrats] = useState(false);

  const onLoadPositions = (positions) => {
    setPositions(positions);
  };

  useEffect(() => {
    if (sayCongrats) {
      setTimeout(() => setSayCongrats(false), 3000);
    }
  }, [sayCongrats]);

  useEffect(() => {
    clearError();
    getPositions()
      .then((res) => res.positions)
      .then(onLoadPositions);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {sayCongrats ? <Congrats /> : (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ gap: "50px" }}>
          <Title text="Working with POST request" className="heading1" />
          <ErrorBoundary>
            <Form
              positions={positions}
              loading={loading}
              error={error}
              setSayCongrats={setSayCongrats}
            />
          </ErrorBoundary>
        </Stack>
      )}
    </>
  );
};

const SignUpSection = () => {
  return (
    <section id="signup" className="signup">
      <div className="container" style={{marginBlock: '140px 100px'}}>
        <SignUp />
      </div>
    </section>
  );
};

export default  SignUpSection;
