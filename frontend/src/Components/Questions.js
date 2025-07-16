import styles from "../Styles/Questions.module.css";
import { useState, useEffect } from 'react';

function Questions({ darkMode }) {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    const [category, setCategory] = useState("17");
    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState(1);

    const getQuestions = (category, difficulty, amount) => {
        fetch(`http://127.0.0.1:3001/questions/${category}/${difficulty}/${amount}`)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.questions);
                setScore(0);
                setCurrentIndex(0);
                setAnswered(false);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    };

    useEffect(() => {
        console.log("Questions updated:", questions);
    }, [questions]);


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

    if (!Array.isArray(questions) || questions.length === 0) {
        return (
            <div className={`${styles.containerBefore} ${darkMode ? styles.dark : ""}`}>
                <div className="general">
                    <h3 style={{ textAlign: 'center', width: '100%' }}>General questions</h3>
                </div>
                <section>
                    <label>Category:</label>
                    <select
                        name="Category"
                        id="categories"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
			            <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </section>

                <section>
                    <label>Difficulty:</label>
                    <select
                        name="Difficulty"
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </section>

                <section>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        min={1}
                        max={25}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </section>

                <button onClick={() => getQuestions(category, difficulty, amount)}>
                    Start
                </button>
            </div>
        );
    }

    if (currentIndex >= questions.length) {
        return (
            <div className={`${styles.containerAfter} ${darkMode ? styles.dark : ""}`}>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "100%" }}></div>
                </div>
                <h2>Quiz Complete!</h2>
                <p>You scored {score} out of {questions.length}</p>
                <button onClick={() =>setQuestions([])}>{score === questions.length ? "Restart" : "Try Again!"}</button>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    const progressPercent = (currentIndex / questions.length) * 100;

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: progressPercent + "%" }}></div>
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
