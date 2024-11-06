import { Grid2, Paper, styled } from "@mui/material";
import { AnswersDisplayProps } from "../../types";
import DynamicImage from "./dynamic-image";

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: "0.75rem",
}));

function AnswersDisplay({ answers, handleAnswerClick }: AnswersDisplayProps) {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {answers.map((answer) => (
        <Grid2 size={4} key={answer.id} display="flex" justifyContent="center">
          <Item
            onClick={() => handleAnswerClick(answer.nextQuestionId)}
            sx={{
              width: "100%",
              maxWidth: 225,
              minWidth: 225,
              height: "auto",
              objectFit: "cover",
              background: "transparent",
            }}
            className="card-overlay shadow-xl rounded-xl cursor-pointer"
          >
            <div className="gradient-overlay rounded-xl"></div>
            <DynamicImage imageName={answer.image} alt={answer.image} />
          </Item>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default AnswersDisplay;
