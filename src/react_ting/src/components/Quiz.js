import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Lisbon", "London", "Dublin", "Madrid"],
        answer: "Madrid"
    },
    // Add more questions as needed
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const [score, setScore] = useState(0);

    const handleNextQuestion = () => {
        if(quizQuestions[currentQuestion].answer === selectedAnswer) {
            setScore(score + 1);
        }

        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setScore(0);
    };
    
    if(currentQuestion >= quizQuestions.length) {
        return (
            <div>
                <h1>Quiz Completed</h1>
                <h2>Your score is: {score}</h2>
                <Button variant="primary" onClick={restartQuiz}>
                    Restart Quiz
                </Button>
            </div>
        );
    }
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {quizQuestions[currentQuestion].question}
                </Card.Title>

                <Form>
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                        <Form.Check 
                            type='radio'
                            id={`default-radio${index}`}
                            key={index} 
                            label={option}
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={handleAnswerChange}
                        />
                    ))}
                </Form>

                <Button variant="primary" onClick={handleNextQuestion}>
                    Next Question
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Quiz;
