
import cors from "cors";
import router from "./routes";
import express from "express";
const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

app.get('/',(req,res)=>{
  res.status(200).json('Welcome')
})

const port = process.env.PORT || 9000

app.listen(port,()=>{
  console.log('Listening to port',port);
})
