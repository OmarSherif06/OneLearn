import styles from "../Styles/Questions.module.css";
import { useState, useEffect } from 'react';

function Questions() {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:3001/questions/10")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.questions);
				console.log(data.questions)
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    }, []);

    const handleAnswer = (option) => {
        if (answered || !questions.length) return;

        const currentQuestion = questions[currentIndex];
        if (option === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }

        setAnswered(true);

        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setAnswered(false);
        }, 1000);
    };

	if (!Array.isArray(questions) || questions.length === 0) return <p>Loading...</p>;
    
	if (currentIndex >= questions.length) {
        return (
            <div className={styles.container}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progress}
                        style={{ width: "100%" }}
                    ></div>
                </div>
                <h2>Quiz Complete!</h2>
                <p>You scored {score} out of {questions.length}</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    const progressPercent = (currentIndex / questions.length) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: progressPercent + "%" }}
                ></div>
            </div>

            <h3>{currentQuestion.question}</h3>

            <div className={styles.buttons}>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={answered}
                        className={
                            answered
                                ? option === currentQuestion.correctAnswer
                                    ? styles.correct
                                    : styles.wrong
                                : ""
                        }
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Questions;
