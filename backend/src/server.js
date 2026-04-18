import express from 'express';
const app=express();

import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}  is running  `);
});

import authRoutes from "./routes/auth.route.js";
//app.use("/api/auth",require("./routes/auth.js"));
app.use("/api/auth",authRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });

// app.get("/api/auth/signup",(req,res)=>{
//     res.send("signup");
// });
// app.get("/api/auth/logout",(req,res)=>{
//     res.send("logout");
// });
// app.get("/api/auth/login",(req,res)=>{
//     res.send("login");
// });