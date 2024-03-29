const express = require('express')
const app = express()
const port = 3000

// middleware
app.use((req, res, next) => {
  const currentTime = new Date()
  res.locals.reqTime = currentTime
  next()
})

// 列出全部 Todo
app.get('/', (req, res) => {
  const secondTime = new Date()
  console.log(`${res.locals.reqTime} | ${req.method} form ${req.url} | total time: ${secondTime - res.locals.reqTime} ms`)
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  const secondTime = new Date()
  console.log(`${res.locals.reqTime} | ${req.method} form ${req.url} | total time: ${secondTime - res.locals.reqTime} ms`)
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  const secondTime = new Date()
  console.log(`${res.locals.reqTime} | ${req.method} form ${req.url} | total time: ${secondTime - res.locals.reqTime} ms`)
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  const secondTime = new Date()
  console.log(`${res.locals.reqTime} | ${req.method} form ${req.url} | total time: ${secondTime - res.locals.reqTime} ms`)
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  const secondTime = new Date()
  console.log(`${res.locals.reqTime} | ${req.method} form ${req.url} | total time: ${secondTime - res.locals.reqTime} ms`)
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})