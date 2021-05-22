const express = require('express');

const app = express();
app.set('port', 3000);

app.set("view engine", "pug");
app.set('views', './views');

// 홈 화면
app.get('/', (req, res) => {
    res.render('home');
});

// 로그인 성공
app.post('/admit', (req, res) => {
    res.render('question');
});

// 회원가입
app.post('/join', (req, res) => {
    res.render('join');
});

// 회원가입 성공
app.post('/success', (req, res) => {
    res.render('home');
});

// 질문 
app.get('/question', (req, res) => {
    res.render('question');
});

// 마이페이지 
app.get('/mypage', (req, res) => {
    res.render('mypage');
});

app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`);
});