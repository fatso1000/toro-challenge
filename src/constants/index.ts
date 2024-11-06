import { IQuestion } from "../types";

const constants: {
  getQuestionsById: (id: number) => null | IQuestion;
  questions: IQuestion[];
} = {
  getQuestionsById: (id: number) => {
    const question = constants.questions.find(
      (questions) => questions.id === id
    );
    if (!question) return null;
    return question;
  },
  questions: [
    {
      id: 1,
      question: "Choose one of the three movies?",
      answers: [
        {
          id: 1,
          image: "gray-man",
          nextQuestionId: 2,
          imdbUrl: "https://www.imdb.com/title/tt1649418/",
        }, // The Gray Man
        {
          id: 2,
          image: "blonde",
          nextQuestionId: 3,
          imdbUrl: "https://www.imdb.com/title/tt1655389/",
        }, // Blonde
        {
          id: 3,
          image: "batman",
          nextQuestionId: 4,
          imdbUrl: "https://www.imdb.com/title/tt1877830/",
        }, // The Batman
      ],
    },
    {
      id: 2,
      question: "Which one do you like the most?",
      answers: [
        {
          id: 4,
          image: "thor",
          nextQuestionId: 5,
          imdbUrl: "https://www.imdb.com/title/tt10648342/",
        }, // Thor: Love and Thunder
        {
          id: 5,
          image: "top-gun",
          nextQuestionId: 6,
          imdbUrl: "https://www.imdb.com/title/tt1745960/",
        }, // Top Gun: Maverick
        {
          id: 6,
          image: "spider-man",
          nextQuestionId: 7,
          imdbUrl: "https://www.imdb.com/title/tt10872600/",
        }, // Spider-Man: No Way Home
      ],
    },
    {
      id: 4,
      question: "Which one do you like the most?",
      answers: [
        {
          id: 7,
          image: "dr-house",
          nextQuestionId: 5,
          imdbUrl: "https://www.imdb.com/title/tt0412142/",
        }, // House M.D.
        {
          id: 8,
          image: "the-boys",
          nextQuestionId: 6,
          imdbUrl: "https://www.imdb.com/title/tt1190634/",
        }, // The Boys
        {
          id: 9,
          image: "penguin",
          nextQuestionId: 8,
          imdbUrl: "https://www.imdb.com/title/tt2091879/",
        }, // Gotham (Penguin character)
      ],
    },
    {
      id: 3,
      question: "Which one do you like the most?",
      answers: [
        {
          id: 11,
          image: "joker2",
          nextQuestionId: 6,
          imdbUrl: "https://www.imdb.com/title/tt12361974/",
        }, // Joker 2
        {
          id: 12,
          image: "deadpool-wolverine",
          nextQuestionId: 8,
          imdbUrl: "https://www.imdb.com/title/tt1431045/",
        }, // Deadpool (with Wolverine in future movies)
        {
          id: 13,
          image: "logan",
          nextQuestionId: 7,
          imdbUrl: "https://www.imdb.com/title/tt3315342/",
        }, // Logan
      ],
    },
    {
      id: 5,
      question: "Which one do you want to watch now?",
      answers: [
        {
          id: 14,
          image: "flash",
          nextQuestionId: 14,
          imdbUrl: "https://www.imdb.com/title/tt0439572/",
        }, // The Flash
        {
          id: 15,
          image: "bullet-train",
          nextQuestionId: 15,
          imdbUrl: "https://www.imdb.com/title/tt12593682/",
        }, // Bullet Train
        {
          id: 16,
          image: "minions",
          nextQuestionId: 16,
          imdbUrl: "https://www.imdb.com/title/tt5113044/",
        }, // Minions: The Rise of Gru
      ],
    },
    {
      id: 6,
      question: "Which one do you want to watch now?",
      answers: [
        {
          id: 17,
          image: "dark-knight",
          nextQuestionId: 17,
          imdbUrl: "https://www.imdb.com/title/tt0468569/",
        }, // The Dark Knight
        {
          id: 18,
          image: "fight-club",
          nextQuestionId: 18,
          imdbUrl: "https://www.imdb.com/title/tt0137523/",
        }, // Fight Club
        {
          id: 19,
          image: "pulp-fiction",
          nextQuestionId: 19,
          imdbUrl: "https://www.imdb.com/title/tt0110912/",
        }, // Pulp Fiction
      ],
    },
    {
      id: 7,
      question: "Which one do you want to watch now?",
      answers: [
        {
          id: 21,
          image: "shutter-island",
          nextQuestionId: 21,
          imdbUrl: "https://www.imdb.com/title/tt1130884/",
        }, // Shutter Island
        {
          id: 22,
          image: "seven",
          nextQuestionId: 22,
          imdbUrl: "https://www.imdb.com/title/tt0114369/",
        }, // Se7en
        {
          id: 23,
          image: "shawshank",
          nextQuestionId: 23,
          imdbUrl: "https://www.imdb.com/title/tt0111161/",
        }, // The Shawshank Redemption
      ],
    },
    {
      id: 8,
      question: "Which one do you want to watch now?",
      answers: [
        {
          id: 24,
          image: "sopranos",
          nextQuestionId: 24,
          imdbUrl: "https://www.imdb.com/title/tt0141842/",
        }, // Sopranos
        {
          id: 25,
          image: "better-call-saul",
          nextQuestionId: 25,
          imdbUrl: "https://www.imdb.com/title/tt3032476/",
        }, // Better call saul
        {
          id: 26,
          image: "chernobyl",
          nextQuestionId: 26,
          imdbUrl: "https://www.imdb.com/title/tt7366338/",
        }, // Chernobyl
      ],
    },
  ],
};

export default constants;
