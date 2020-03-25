const express= require ('express')
const app = express()

app.get('/', (req,res)=>{
res.send('this is the default endpoint')
})
app.get('/about', (req,res)=>{
    res.send('this is the endpoint')
    })
app.get('*', (req,res)=>{
    Response.send('404')
})
app.listen(3000,()=>{
    console.log('lising on port')
})