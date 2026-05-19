import express from "express"
import router from "./routes/materials.routes.js"

const app = express()

app.use(express.json())

//routes
app.use(router)


const PORT = 3333
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})