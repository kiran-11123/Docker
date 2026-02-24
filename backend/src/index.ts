import express from 'express';
export const app = express();
app.use(express.json());


app.get("/" , async(req,res)=>{

    res.status(200).json({
         name : 'Kiran',
         age:22,
         occupation:'Software Engineer'
    })

})

app.post("/sum" , async(req,res)=>{

    const {a,b} = req.body;


    res.status(200).json({
         sum : a+b
    })

})




