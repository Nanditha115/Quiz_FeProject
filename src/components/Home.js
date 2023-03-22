import React from 'react'

const Home = ({onRules}) => {
  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h1>Instructions for the  Quiz</h1>
                <p>1. The quiz has 10 questions in total.</p>
                <p>2. Each question carries 1 mark.</p>
                <p>3. Each question has a timer running.</p>
                <p>4. Click on Next to go to the next question after 
                    selecting the option.
                </p>
                <p>5. You cannot go back to the previous question.</p>
                <p>6. Click on submit to check the answers and results.</p>
                <button className='button is-info is-medium' onClick={onRules}>Take me to the Quiz</button>
            </div>
        </div>
    </div>
  )
}

export default Home