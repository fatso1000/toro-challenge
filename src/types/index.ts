export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
}

export interface IAnswer {
  id: number;
  image: string;
  nextQuestionId: number;
  imdbUrl: string;
}

export interface AnswersDisplayProps {
  answers: IAnswer[];
  handleAnswerClick: (value: number) => void;
}
