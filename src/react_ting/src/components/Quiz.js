import React, { useEffect, useState } from 'react';
import { Button, Card, Form, ProgressBar } from 'react-bootstrap';
import * as d3 from 'd3'; 
import Papa from 'papaparse';
import './Quiz.css'; 


const quizQuestions = [
    {
        question: "What is your age?",
        options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or older"],
    },
    {
        question: "What is your gender?",
        options: ["Male", "Female", "Prefer not to say"],
    },
    {
        question: "What is your current level of physical activity?",
        options: [
            "Sedentary (little or no exercise, desk job)",
            "Lightly active (light exercise/sports 1-3 days per week)",
            "Moderately active (moderate exercise/sports 3-5 days per week)",
            "Very active (hard exercise/sports 6-7 days per week)",
            "Extremely active (hard daily exercise/sports & physical job or 2x training)",
        ],
    },
    {
        question: "What are your dietary preferences?",
        options: ["No restrictions", "Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Other"],
    },
    {
        question: "Do you have any specific health concerns?",
        options: [
            "No specific concerns",
            "Heart health",
            "Diabetes",
            "Obesity",
            "High blood pressure",
            "Other",
        ],
    },
    {
        question: "What are your nutritional goals?",
        options: ["Maintain current weight", "Lose weight", "Gain weight", "Improve general health", "Other"],
    },
    {
        question: "How many meals do you eat per day?",
        options: ["One", "Two", "Three", "More than three"],
    },
    {
        question: "Do you have any known food allergies?",
        options: [
            "No known food allergies",
            "Peanuts",
            "Tree nuts",
            "Milk",
            "Eggs",
            "Wheat",
            "Soy",
            "Fish",
            "Shellfish",
            "Other",
        ],
    },
    {
        question: "How often do you consume alcohol?",
        options: ["Never", "Occasionally", "1-2 times a week", "3-4 times a week", "Daily"],
    },
    {
        question: "Do you smoke?",
        options: ["Yes", "No", "I used to, but I don't anymore"],
    },
    {
        question: "Do you have a history of any specific nutritional deficiencies?",
        options: ["No known deficiencies", "Iron", "Vitamin D", "Calcium", "Vitamin B12", "Other"],
    },
];


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);  // Added savedRecipes state

    useEffect(() => {
        Papa.parse('./sample.csv', {
          download: true,
          header: true,
          complete: function(results) {
            setRecipes(results.data);
          }
        });
    }, []);

    const handleNextQuestion = () => {
        setAnswers([...answers, selectedAnswer]);

        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
    };

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setScore(0);
        setAnswers([]);
    };

    const saveRecipe = (recipe) => {
        setSavedRecipes([...savedRecipes, recipe]);
    };

    const getPersona = (answers) => {
        let persona = {
            diet: answers[3],
            mealsPerDay: answers[6]
        }
    
        return persona;
    };

    const downloadRecipes = (filteredRecipes) => {
        let csvContent = "data:text/csv;charset=utf-8,";
        let headers = Object.keys(filteredRecipes[0]).join(",");
        let rows = filteredRecipes.map(recipe => Object.values(recipe).join(","));
        csvContent += headers + "\n" + rows.join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "saved_recipes.csv");
        document.body.appendChild(link); // Required for FF
        link.click(); // This will download the data file named "saved_recipes.csv"
    };
    
    // ...
      
    // Shuffle function (Fisher-Yates algorithm)
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    if(currentQuestion >= quizQuestions.length) {
        let persona = getPersona(answers);
    
        // Shuffle the recipes before filtering
        let shuffledRecipes = shuffle(recipes);
        
        let filteredRecipes = shuffledRecipes.filter(recipe => {
            // Filter logic based on persona
            if (persona.diet === "Vegetarian" && recipe["Ingredients: Meat"]) {
                return false;
            }
    
            if (persona.diet === "Vegan" && (recipe["Ingredients: Dairy"] || recipe["Ingredients: Meat"])) {
                return false;
            }
    
            if (Array.isArray(persona.allergy) && persona.allergy.includes("Gluten") && (recipe["Ingredients: Pasta and Rice"] || "").includes("gluten")) {
                return false;
            }
    
            if (Array.isArray(persona.allergy) && persona.allergy.includes("Peanuts") && (recipe["Ingredients"] || "").includes("peanuts")) {
                return false;
            }
    
            if (Array.isArray(persona.allergy) && persona.allergy.includes("Soy") && (recipe["Ingredients"] || "").includes("soy")) {
                return false;
            }

            // You can add more conditions here based on the persona
    
            return true;
        });

        // Limit to max 12 recipes
        filteredRecipes = filteredRecipes.slice(0, 12);
    
        return (
            <div className="quiz-result">
                <h1>Quiz Completed</h1>
                <Button variant="secondary" onClick={restartQuiz}>Restart Quiz</Button>
                <h2>Your personalized AI generated meal suggestions:</h2>
                <div className="recipes-container">
                    {filteredRecipes.map((recipe, index) => (
                        <Card className="recipe-card" key={index}>
                            <Card.Body>
                                <Card.Title>{recipe["Recipe Name"]}</Card.Title>
                                <Card.Text>{recipe["Ingredients: Produce"]}</Card.Text>
                                <Button variant="primary" href={recipe["link"]}>Read More</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <Button variant="secondary" onClick={() => downloadRecipes(filteredRecipes)}>Save All Recipes</Button>
            </div>
        );

    }

    return (
        <div className="quiz-container">
            <ProgressBar now={((currentQuestion + 1) / quizQuestions.length) * 100} label={`${currentQuestion + 1}/${quizQuestions.length}`} />
            <Card>
                <Card.Header><h3>{quizQuestions[currentQuestion].question}</h3></Card.Header>
                <Card.Body>
                    <Form>
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                label={option}
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={handleAnswerChange}
                                className="quiz-option"
                            />
                        ))}
                    </Form>
                    <Button variant="primary" onClick={handleNextQuestion}>Next</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Quiz;
