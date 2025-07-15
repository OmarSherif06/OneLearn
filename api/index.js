const express = require('express');
const cors = require('cors');
const he = require('he');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/questions/:category/:difficulty/:amount', async (req, res) => {
  const amount = parseInt(req.params.amount);
  const category = req.params.category;
  const difficulty = req.params.difficulty;

  if (isNaN(amount) || amount < 1 || amount > 25) 
    return res.status(400).json({ error: 'Amount must be a number between 1 and 25' });

  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();

    const formattedQuestions = data.results.map((q, i) => ({
      id: i + 1,
      question: decodeHtml(q.question),
      options: shuffle([
        ...q.incorrect_answers.map(decodeHtml),
        decodeHtml(q.correct_answer),
      ]),
      correctAnswer: decodeHtml(q.correct_answer),
    }));

    res.json({ questions: formattedQuestions });
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch question ${error}` });
  }
});

function decodeHtml(html) {
  return he.decode(html);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
