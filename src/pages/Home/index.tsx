import React, { useState, useEffect } from "react";
import ChoiceComponent from "../../component/ui/quizComponent/index";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ClassNames } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";

const index = () => {
  const questionList = [
    {
      questionNumber: 1,
      question: "Which fruit is a popular Moroccan dessert?",
      choices: ["Apple", "Grape", "Lychee", "Peach"],
      correctAnswer: 2,
    },
    {
      questionNumber: 2,
      question: "How do Moroccans use spices while cooking?",
      choices: ["Extensively", "Slightly", "Normally", "They dont use spices"],
      correctAnswer: 3,
    },
    {
      questionNumber: 3,
      question: "How many spices included in mixture Ras el Hanout?",
      choices: ["30", "5", "40", "27"],
      correctAnswer: 4,
    },
    {
      questionNumber: 4,
      question: "What is a popular lunch food in Morocco?",
      choices: ["Sweets", "Cold and Hot salads", "Yogurt", "Dessert"],
      correctAnswer: 2,
    },
    {
      questionNumber: 5,
      question: "Do Moroccan people drink alcohol?",
      choices: [
        "Uncommonly",
        "Commonly",
        "Moderate",
        "they dont drink alcohol",
      ],
      correctAnswer: 1,
    },
    {
      questionNumber: 6,
      question:
        "Which of the following is the most preferable food for Moroccans?",
      choices: ["Beef", "Milk", "Fish", "Chicken     "],
      correctAnswer: 1,
    },
    {
      questionNumber: 7,
      question: "Morocco is the world's largest exporter of:",
      choices: ["Swordfish", "Tuna", "shrimps", "Sardine fish"],
      correctAnswer: 4,
    },
    {
      questionNumber: 8,
      question: "Which drink is the most popular in Morocco?",
      choices: [
        "Green tea with mint",
        "Red tea with lemon",

        "Tea with milk",
        "coffe",
      ],
      correctAnswer: 1,
    },
    {
      questionNumber: 9,
      question: "What is the common dessert in Moroccan menu?",
      choices: ["Zaalouk", "Kaab el ghzal", "Khobz", "Harira"],
      correctAnswer: 2,
    },
    {
      questionNumber: 10,
      question: "Which fresh fruit juice is highly popular in Morocco?",
      choices: ["Banana juice", "Apple juice", "Orange Juice", "Avocado juice"],
      correctAnswer: 3,
    },
  ];
  var List = questionList;
  const [userChoice, setUserChoice] = useState<any>({
    question: "",
    choices: "",
    questionNumber: "",
    correctAnswer: "",
    userChoice: "",
  });
  const [userListAnswers, setUserListAnswers] = useState<any>([]);
  const [currentQest, setCurrentQuest] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const filterList = List.filter((el) => el.questionNumber === currentQest);

  var correctAnswer: string[] = [];

  for (let i = 0; i < questionList.length; i++) {
    correctAnswer.push(questionList[i].choices[questionList[i].correctAnswer]);
  }

  const HandlClickNext = (e: any) => {
    if (isChecked) {
      if (currentQest < List.length + 1) {
        setUserListAnswers([...userListAnswers, userChoice]);
        setCurrentQuest(currentQest + 1);
      } else {
        e.preventDefault();
      }
    } else {
      swal("pay attention!", "You shoud select a choice !", "warning");
    }
  };

  const Clickedchoice = (e: any) => {
    setIsChecked(true);
    let result = {
      question: filterList[0].question,
      choices: filterList[0].choices,
      questionNumber: filterList[0].questionNumber,
      correctAnswer: filterList[0].correctAnswer,
      userChoice: e.target.value,
    };

    setUserChoice(result);
  };

  let result = userListAnswers.map(
    (el: any) => el.choices[el.correctAnswer - 1] === el.userChoice
  );

  let FinalScore = result.filter((item: boolean) => item === true);

  console.log("this is user userListAnswers", userListAnswers);

  return (
    <>
      {filterList &&
        filterList.map((el) => (
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
            ;
            <div className="w-[320px]  sm:w-[450px] md:w-[750px] flex flex-col justify-center items-center  not-italic">
              <div className="font-medium text-xl text-stone-50  h-[100px] w-full flex items-center justify-center">
                <h3 className="text-center sm:w-[500px] md:w-full font-mono font-semibold text-2xl">
                  {el.question}
                </h3>
              </div>
              <div className="p-10 w-[340px]  h-[400px] sm:w-[450px] md:w-[750px]  bg-[url('/src/assests/food.jpeg')] bg-cover flex justify-center ">
                <div>
                  <ChoiceComponent
                    Clickedchoice={Clickedchoice}
                    HandlClickNext={HandlClickNext}
                    choices={el.choices}
                  />
                </div>
              </div>
              <div className="font-semibold font-mono text-stone-50">
                Question {currentQest}/10
              </div>
            </div>
          </div>
        ))}
      {currentQest > List.length && (
        <div className="bg-gradient-to-r   from-cyan-500 to-blue-500 flex flex-col justify-center items-center">
          <span className=" font-semibold text-stone-100 p-2 font-Fredoka text-3xl">
            {FinalScore.length >= 5 ? (
              <div className="font-mono flex flex-col gap-2 items-center">
                <p>You win</p>
                <Rating
                  readOnly
                  defaultValue={0}
                  value={FinalScore.length}
                  max={10}
                />
              </div>
            ) : (
              <div className=" font-mono  flex flex-col gap-2 items-center">
                <p> You lose</p>
                <Rating
                  readOnly
                  defaultValue={0}
                  value={FinalScore.length}
                  max={10}
                />
              </div>
            )}
          </span>

          <div className="  w-full h-full p-10  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-cover  justify-center ">
            {questionList &&
              questionList.map((el: any, i: any) => (
                <div className="m-2 p-2 flex fex-col gap-3 bg-stone-50 rounded-xl ">
                  <div className=" flex flex-col ">
                    <div className=" bg-cyan-600 text-stone-50 font-semibold rounded-full self-center w-[28px] h-[24px] flex items-center justify-center">
                      <span>{i + 1}</span>
                    </div>
                    <div>
                      <h3 className=" font-bold font-mono text-lg text-cyan-900 ">
                        {el.question}
                      </h3>
                      <ul className="m-2">
                        {el.choices.map((el: any, index: number) => (
                          <div className="flex gap-2 font-mono text-stone-400">
                            {userListAnswers[i].choices[
                              userListAnswers[i].correctAnswer - 1
                            ] === el ? (
                              <>
                                <li className="text-lime-700">{el}</li>
                                <span>
                                  <CheckIcon
                                    className="text-lime-700"
                                    fontSize="small"
                                  />
                                </span>
                              </>
                            ) : userListAnswers[i].userChoice === el ? (
                              <>
                                <li className="text-red-600">{el}</li>
                                <span>
                                  <CloseIcon
                                    className="text-red-600"
                                    fontSize="small"
                                  />
                                </span>
                              </>
                            ) : (
                              <>
                                <li>{el}</li>
                              </>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
