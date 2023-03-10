import './App.css';
import Questions from './components/Questions';
import Start from './components/Start';
import quizData from './data/quiz.json'
import { useState } from 'react';
import End from './components/End';
import Modal from './components/Modal';

const App = () => {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [repeatedQues, setRepeatedQues] = useState([]);

  const quizStartHandler = () => {
    let randomQues = Math.floor((Math.random())* (quizData.data.length))
    setActiveQuestion(randomQues);
    setRepeatedQues([...repeatedQues, randomQues]);
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setRepeatedQues([]);
    setStep(1);
  }

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler}/>}

      {step ===2 && <Questions
        data = {quizData.data[activeQuestion]}
        onAnswerUpdate = {setAnswers}
        numberOfQuestions = {quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep = {setStep}
        repeatedQues={repeatedQues}
        setRepeatedQues={setRepeatedQues}
      />}

      {step === 3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswerCheck={()=>setShowModal(true)}
        repeatedQues={repeatedQues}
      />}

      {showModal && <Modal
        onClose={()=> setShowModal(false)}
        results={answers}
        data={quizData.data}
        repeatedQues={repeatedQues}
      />}
    </div>
  );
}

export default App;
