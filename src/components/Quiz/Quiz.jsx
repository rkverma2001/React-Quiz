import { useState, useRef } from "react";
import "./style.css";
import { data } from "../../assets/data";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [check, setCheck] = useState(false);
  const [score, setScore] = useState(0);

  const optionA = useRef(null);
  const optionB = useRef(null);
  const optionC = useRef(null);
  const optionD = useRef(null);

  const options = [optionA, optionB, optionC, optionD];

  const checkAns = (e, ans) => {
    if (check === false) {
      if (question.answer === ans) {
        e.target.classList.add("correct");
        setCheck(true);
        setScore(prev => prev+1)
      } else {
        e.target.classList.add("wrong");
        setCheck(true);
        const answerIndex = question.answer.charCodeAt(0) - 65;
        options[answerIndex].current.classList.add("correct");
      }
    }
  };


  const nextBtn = () => {
    if(check === true) {
      setIndex(index+1)
      setQuestion(data[index])
      setCheck(false)
    }
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul>
        <li
        ref={optionA}
          onClick={(e) => {
            checkAns(e, "A");
          }}
        >
          {question.options.A}
        </li>
        <li
        ref={optionB}
          onClick={(e) => {
            checkAns(e, "B");
          }}
        >
          {question.options.B}
        </li>
        <li
        ref={optionC}
          onClick={(e) => {
            checkAns(e, "C");
          }}
        >
          {question.options.C}
        </li>
        <li
        ref={optionD}
          onClick={(e) => {
            checkAns(e, "D");
          }}
        >
          {question.options.D}
        </li>
      </ul>
      <button className="button-1" role="button" onClick={nextBtn}>
        Next
      </button>
      <div className="index">{index+1} of {data.length} questions</div>
    </div>
  );
};
