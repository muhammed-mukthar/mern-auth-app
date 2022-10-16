require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const connection=require('./db')
const userRoutes=require('./routes/user')
const authRoutes=require('./routes/auth')

/* ------------------------------- middleware ------------------------------- */

app.use(express.json())
app.use(cors())
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

/* ------------------------------ database connect ------------------------------ */
connection()


const port=process.env.PORT||5000

app.listen(port,()=>console.log('listening to port 5000'))