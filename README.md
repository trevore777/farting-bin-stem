# Farting Bin STEM Journey

A Node.js/Express prototype for a 7-week Year 9 STEM project.

## Features
- Teacher 7-week TLAP overview
- Student 28-lesson journey
- Browser-based progress checkboxes
- Weekly lesson/evidence pages
- 100-mark marking rubric
- Student Evidence template view
- Downloadable JSON and Markdown Student Evidence templates
- JSON curriculum API endpoints

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000

## Main routes
- `/teacher`
- `/student`
- `/week/1` through `/week/7`
- `/rubric`
- `/student-evidence-template`
- `/api/curriculum`
- `/api/student-evidence-template`

## Student Evidence integration
The file `templates/student-evidence-template.json` is intentionally simple so it can be mapped into an assignment/workbook structure in Student Evidence. The app currently stores only lesson completion in browser localStorage; no student data is sent to a server.
