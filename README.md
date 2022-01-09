[![Click Here](https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/d0/8d/34/d08d342b-c581-bc37-e6d5-79ba90a8d0de/logo_youtube_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png)](https://youtu.be/hLv6KtYg1MM)
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

