import { Stack } from "@mui/material";

import Title from "../UI/Title";
import TeamList from "./TeamList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const TeamListSection = () => {
  return (
    <section className="team">
      <Stack
        direction="column"
        justifyContent="center"
        className="container"
        alignItems="center"
        sx={{ gap: "50px" }}>
        <Title text="Working with GET request" className="heading1" />
        <ErrorBoundary>
          <TeamList />
        </ErrorBoundary>
      </Stack>
    </section>
  );
};

export default TeamListSection;
