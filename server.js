import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static('public'))



app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`)
})




app.post('game', (req, res) => {
    const params = req.body
    res.send('random.text');
});

// app.route('/game')
//     .get((req, res, next) => {
//         res.send('GET request has been called');
        
//     })
//     .post((req, res, next) => {
//         res.send('POST request called');
//     })
//     .all((req, res, next) => {
//         res.send('Other requests called');
//     })


  
  



// // app.get()

// app.put()