const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const curriculum = JSON.parse(fs.readFileSync(path.join(__dirname,'data','curriculum.json'),'utf8'));
const evidenceTemplate = JSON.parse(fs.readFileSync(path.join(__dirname,'templates','student-evidence-template.json'),'utf8'));

app.get('/',(req,res)=>res.render('home',{project:curriculum.project}));
app.get('/teacher',(req,res)=>res.render('teacher',{...curriculum}));
app.get('/student',(req,res)=>res.render('student',{project:curriculum.project,weeks:curriculum.weeks}));
app.get('/week/:week',(req,res)=>{
  const week = curriculum.weeks.find(w=>w.week===Number(req.params.week));
  if(!week) return res.status(404).send('Week not found');
  res.render('week',{project:curriculum.project,week});
});
app.get('/rubric',(req,res)=>res.render('rubric',{rubric:curriculum.rubric}));
app.get('/student-evidence-template',(req,res)=>res.render('evidence',{template:evidenceTemplate}));
app.get('/api/curriculum',(req,res)=>res.json(curriculum));
app.get('/api/student-evidence-template',(req,res)=>res.json(evidenceTemplate));
app.get('/download/student-evidence-template.json',(req,res)=>res.download(path.join(__dirname,'templates','student-evidence-template.json')));
app.get('/download/student-evidence-template.md',(req,res)=>res.download(path.join(__dirname,'templates','student-evidence-template.md')));

app.listen(PORT,()=>console.log(`Farting Bin STEM app running at http://localhost:${PORT}`));
