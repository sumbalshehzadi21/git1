import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get("/features.html",(req,res)=>{
    res.sendFile(__dirname + "/features.html");
})
app.get("/contact.html",(req,res)=>{
    res.sendFile(__dirname + "/contact.html");
})
app.post("/submit", (req, res) => {
    const email = req.body.email;
    const message = req.body.txtArea;

    console.log('Email:', email);
    console.log('Message:', message);

    // Send both email and message back to the client (optional)
    res.send(`Email: ${email}<br>Message: ${message}`);
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})