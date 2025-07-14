const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3001;

app.use(cors())

app.get('/questions/:amount', async (req, res) => {
  const amount = parseInt(req.params.amount);

  if (isNaN(amount) || amount < 1 || amount > 25) {
    return res.status(400).json({ error: 'Amount must be a number between 1 and 25' });
  }

  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=medium&type=multiple`;
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
  return html.replace(/&#039;/g, `'`)
             .replace(/&quot;/g, `"`)
             .replace(/&amp;/g, `&`)
             .replace(/&lt;/g, `<`)
             .replace(/&gt;/g, `>`);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
