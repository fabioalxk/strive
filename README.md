# MERN Quiz

> Simple quiz made with Node.js

## Quick Start

Add your MONGO_URI to the default.json file.

```bash
# Install dependencies for server
npm install

# Start the project
npm start


# Server runs on http://localhost:5000
```

# Endpoints

Here below are the endpoints:

# 1) Get all quizzes
```
http://localhost:5000/api/quiz/getAllQuizzes
```

# 2) Get quiz details
```sh
http://localhost:5000/api/quiz/61da31fbfa1ed02e09e84cb5
```

# 3) Create a new quiz
```sh
http://localhost:5000/api/quiz/createNewQuiz
```

# 4) Create a new question
```
http://localhost:5000/api/quiz/:quizId/createQuestion/
```
# 5) Create a new answer
```
http://localhost:5000/api/quiz/:quizId/:questionId
```

# 5) Delete a quiz
```
http://localhost:5000/api/quiz/:quizId
```
---

