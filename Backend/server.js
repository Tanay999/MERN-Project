import app from "./app.js";


app.listen(process.env.PORT, ()=>{
    console.log(`Server Running Port ${process.env.PORT}`);
})