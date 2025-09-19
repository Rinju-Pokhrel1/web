const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public'))


// Middleware
app.use((req, res, next) => {
    const log = `${Date.now()} - ${req.method}\n`;
    fs.appendFileSync('logs.txt', log);  // Append logs to logs.txt
    console.log(log.trim());             // Print the log to the console
    next();                              // Move to the next middleware or route
});
//(path,handler)

// app.get('/', (req, res) => {

//     res.send("HeLLO NEPAL.");
//     console.log("Running get rqst")

// })
//  app.post('/', (req, res) => {

//    res.send("HeLLO NEPAL post.")
//     console.log("Running post rqst")

// })
// app.get('/index', (req, res) => {
//     res.sendFile(`templates/index.html`,{root:__dirname})

// })


//chaining of the rqst


app.get('/', (req, res) => {

    res.send("HeLLO NEPAL.");
    console.log("Running get rqst")

})
    .post('/', (req, res) => {

        res.send("HeLLO NEPAL post.")
        console.log("Running post rqst")

    })
    .get('/index', (req, res) => {
        res.sendFile(`templates/index.html`, { root: __dirname })

    })


    .listen(port, () => {
        console.log(`app list on port ${port}`)

    }
    )


