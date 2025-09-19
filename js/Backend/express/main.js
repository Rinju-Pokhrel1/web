const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
//(path,handler)

app.get('/', (req, res) => {
    res.send("HeLLO NEPAL.")

})
app.get('/home', (req, res) => {
    res.send("HeLLO NEPAL from home.")

})
app.get('/about', (req, res) => {
    res.send("ABOUT US")

})
app.get('/blog', (req, res) => {
    res.send("Blogs")

})
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send("HeLLO NEPAL from intro to js")

// })
// app.get('/blog/intro-to-css', (req, res) => {
//     res.send("HeLLO NEPAL from intro to css")

// })

// for this we can use
app.get('/blog/:slug', (req, res) => {
    console.log(req)
    res.send(`hello ${req.params.slug}`)

})

//we can add multiple 
app.get('/blog/:slug/:second', (req, res) => {
    console.log(req)
    res.send(`hello ${req.params.slug} and ${req.params.second}`)

})

app.listen(port ,()=>{
    console.log(`example app list on port ${port}`)

}
)


