import { Box, Button, MobileStepper, styled, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import constants from "../../constants";
import { IQuestion } from "../../types";
import PromoCard from "../promo-card";
import Footer from "../footer";
import AnswersDisplay from "../answers-display";

const DotStepper = styled(MobileStepper)(({ theme }) => ({
  "& .MuiMobileStepper-dots": {
    margin: "auto",
    gap: theme.spacing(2),
  },
  "& .MuiMobileStepper-dot": {
    width: 24,
    height: 24,
    border: "2px solid #22DAA8",
    backgroundColor: "white",
  },
  "& .MuiMobileStepper-dotActive": {
    backgroundColor: "#22DAA8",
  },
}));

const LogoButton = styled(Button)(({ theme }) => ({
  borderColor: "#450a0a",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  fontSize: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightBold,
}));

function StepHandler() {
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    constants.questions[0]
  );
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [lastMovie, setLastMovie] = useState<string | undefined>(undefined);

  const handleAnswerClick = (answerId: number) => {
    if (activeStep === 2) {
      const currentAnswer = currentQuestion.answers.find(
        (e) => e.id === answerId
      );
      setLastMovie(currentAnswer?.imdbUrl);
      setIsFinished(true);
    } else {
      const question = constants.getQuestionsById(answerId);
      if (question) {
        setCurrentQuestion(question);
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const Logo = () => (
    <Box>
      <LogoButton variant="outlined" color="error">
        YOUR LOGO
      </LogoButton>
    </Box>
  );

  return (
    <Fragment>
      {isFinished ? (
        <>
          <Logo />
          <PromoCard url={lastMovie} />
        </>
      ) : (
        <Box gap={4} display="flex" flexDirection="column" alignItems="center">
          <Logo />
          <Box
            sx={{ maxWidth: 450, background: "white" }}
            className="text-emerald-400 mx-auto py-3 px-6 text-center rounded-lg"
          >
            <Typography variant="h6">
              <strong>QUESTION {activeStep + 1} OF 3:</strong>
            </Typography>
            <DotStepper
              variant="dots"
              steps={3}
              position="static"
              className="w-auto"
              activeStep={activeStep}
              nextButton={<></>}
              backButton={<></>}
            />
          </Box>
          <Box>
            <Typography variant="h4" textAlign="center">
              <strong>{currentQuestion.question}</strong>
            </Typography>
          </Box>
          <AnswersDisplay
            handleAnswerClick={handleAnswerClick}
            answers={currentQuestion.answers}
          />
        </Box>
      )}
      <Footer />
    </Fragment>
  );
}

export default StepHandler;
