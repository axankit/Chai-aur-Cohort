import express from "express"
import dotenv from "dotenv"
// import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// app.use(cors({
//     origin:"htt"
// }
// ))

app.get('/', (req, res) => {
  res.send('Starting me ragdna parta hai')
})

app.get("/ankit",(req,res)=>{
    res.send("Mehant karo, jin kandho per jimmedari hoti hai unhe thakna nahi hota hai")
})

app.get("/avni",(req,res)=>{
    res.send("Mere pass toh kapre hi nahi hai ")
})

app.get("/absar",(req,res)=>{
    res.send("Vichar dhara me bhata hua ")
})

console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})