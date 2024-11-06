import { Fragment } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import AppBg from "./assets/img/app-bg.jpg";
import StepHandler from "./components/step-handler";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Box style={styles.containerStyles} className="text-white">
        <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              py: 4,
              width: "100%",
              height: "100vh",
            }}
          >
            <StepHandler />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

const styles = {
  containerStyles: {
    background: `linear-gradient(to bottom, rgba(32, 33, 36, 0.9), rgba(32, 33, 36, 0.9)), url(${AppBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
};

export default App;
